import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const complaintSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  documentType: z.enum(["DNI", "CE", "Pasaporte"], {
    message: "Seleccione un tipo de documento",
  }),
  documentNumber: z.string().min(1, "El numero de documento es obligatorio"),
  address: z.string().min(1, "El domicilio es obligatorio"),
  phone: z.string().min(1, "El telefono es obligatorio"),
  email: z.string().email("Ingrese un correo electronico valido"),
  isMinor: z.boolean(),
  tutorName: z.string().optional(),
  tutorDocumentType: z.enum(["DNI", "CE", "Pasaporte"]).optional(),
  tutorDocumentNumber: z.string().optional(),
  type: z.enum(["reclamo", "queja"], {
    message: "Seleccione reclamo o queja",
  }),
  serviceDescription: z.string().min(1, "La descripcion del bien o servicio es obligatoria"),
  claimedAmount: z.string().optional(),
  complaintDetail: z.string().min(1, "El detalle es obligatorio"),
  consumerRequest: z.string().min(1, "El pedido del consumidor es obligatorio"),
});

type ComplaintData = z.infer<typeof complaintSchema>;

function generateId() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, "");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `REC-${date}-${rand}`;
}

function buildAdminHtml(data: ComplaintData, id: string) {
  const typeLabel = data.type === "reclamo" ? "Reclamo" : "Queja";
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0B3D2C;padding:24px;text-align:center">
        <h1 style="color:white;margin:0;font-size:22px">Nuevo ${typeLabel} - Libro de Reclamaciones</h1>
      </div>
      <div style="padding:24px;background:#f9f9f9">
        <p style="margin:0 0 16px;font-size:14px;color:#414141"><strong>ID:</strong> ${id}</p>
        <p style="margin:0 0 16px;font-size:14px;color:#414141"><strong>Fecha:</strong> ${new Date().toLocaleString("es-PE", { timeZone: "America/Lima" })}</p>

        <h2 style="font-size:16px;color:#0B3D2C;border-bottom:2px solid #729F28;padding-bottom:8px">Datos del consumidor</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:16px">
          <tr><td style="padding:6px 0;font-size:14px;color:#787878;width:40%">Nombre</td><td style="padding:6px 0;font-size:14px;color:#414141">${data.name}</td></tr>
          <tr><td style="padding:6px 0;font-size:14px;color:#787878">Documento</td><td style="padding:6px 0;font-size:14px;color:#414141">${data.documentType} ${data.documentNumber}</td></tr>
          <tr><td style="padding:6px 0;font-size:14px;color:#787878">Domicilio</td><td style="padding:6px 0;font-size:14px;color:#414141">${data.address}</td></tr>
          <tr><td style="padding:6px 0;font-size:14px;color:#787878">Telefono</td><td style="padding:6px 0;font-size:14px;color:#414141">${data.phone}</td></tr>
          <tr><td style="padding:6px 0;font-size:14px;color:#787878">Email</td><td style="padding:6px 0;font-size:14px;color:#414141">${data.email}</td></tr>
        </table>

        ${data.isMinor ? `
        <h2 style="font-size:16px;color:#0B3D2C;border-bottom:2px solid #729F28;padding-bottom:8px">Menor de edad - Datos del tutor</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:16px">
          <tr><td style="padding:6px 0;font-size:14px;color:#787878;width:40%">Tutor</td><td style="padding:6px 0;font-size:14px;color:#414141">${data.tutorName || "-"}</td></tr>
          <tr><td style="padding:6px 0;font-size:14px;color:#787878">Documento tutor</td><td style="padding:6px 0;font-size:14px;color:#414141">${data.tutorDocumentType || ""} ${data.tutorDocumentNumber || "-"}</td></tr>
        </table>
        ` : ""}

        <h2 style="font-size:16px;color:#0B3D2C;border-bottom:2px solid #729F28;padding-bottom:8px">Detalle del ${typeLabel.toLowerCase()}</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:16px">
          <tr><td style="padding:6px 0;font-size:14px;color:#787878;width:40%">Tipo</td><td style="padding:6px 0;font-size:14px;color:#414141;font-weight:bold">${typeLabel}</td></tr>
          <tr><td style="padding:6px 0;font-size:14px;color:#787878">Bien/servicio</td><td style="padding:6px 0;font-size:14px;color:#414141">${data.serviceDescription}</td></tr>
          ${data.claimedAmount ? `<tr><td style="padding:6px 0;font-size:14px;color:#787878">Monto reclamado</td><td style="padding:6px 0;font-size:14px;color:#414141">S/ ${data.claimedAmount}</td></tr>` : ""}
          <tr><td style="padding:6px 0;font-size:14px;color:#787878">Detalle</td><td style="padding:6px 0;font-size:14px;color:#414141">${data.complaintDetail}</td></tr>
          <tr><td style="padding:6px 0;font-size:14px;color:#787878">Pedido</td><td style="padding:6px 0;font-size:14px;color:#414141">${data.consumerRequest}</td></tr>
        </table>
      </div>
    </div>
  `;
}

function buildConfirmationHtml(data: ComplaintData, id: string) {
  const typeLabel = data.type === "reclamo" ? "Reclamo" : "Queja";
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0B3D2C;padding:24px;text-align:center">
        <h1 style="color:white;margin:0;font-size:22px">Confirmacion de ${typeLabel}</h1>
      </div>
      <div style="padding:24px;background:#f9f9f9">
        <p style="font-size:14px;color:#414141">Estimado/a <strong>${data.name}</strong>,</p>
        <p style="font-size:14px;color:#414141">Hemos recibido su ${typeLabel.toLowerCase()} correctamente. A continuacion los datos de referencia:</p>

        <div style="background:#E9F2EA;border-left:4px solid #729F28;padding:16px;margin:16px 0;border-radius:4px">
          <p style="margin:0 0 8px;font-size:16px;font-weight:bold;color:#0B3D2C">Numero de ${typeLabel.toLowerCase()}</p>
          <p style="margin:0;font-size:24px;font-weight:bold;color:#729F28">${id}</p>
        </div>

        <p style="font-size:14px;color:#414141">De acuerdo con el articulo 24 del D.S. 011-2011-PCM, el plazo maximo de respuesta es de <strong>30 dias calendario</strong> contados desde la fecha de presentacion de su ${typeLabel.toLowerCase()}.</p>

        <p style="font-size:14px;color:#414141">Si tiene alguna consulta adicional, puede contactarnos en <a href="mailto:info@soldevilla.pe" style="color:#729F28">info@soldevilla.pe</a> o al telefono +51 977 867 347.</p>

        <hr style="border:none;border-top:1px solid #D9D9D9;margin:24px 0" />
        <p style="font-size:12px;color:#787878;text-align:center">Sol de Villa Peru S.A.C. | RUC 20522163971<br>Av. Mariscal La Mar 750, Miraflores, Lima</p>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = complaintSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json({ message: "Datos invalidos", errors }, { status: 400 });
    }

    const data = result.data;

    if (data.isMinor) {
      if (!data.tutorName || !data.tutorDocumentType || !data.tutorDocumentNumber) {
        return NextResponse.json(
          { message: "Datos invalidos", errors: { tutorName: ["Los datos del tutor son obligatorios para menores de edad"] } },
          { status: 400 }
        );
      }
    }

    const id = generateId();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const typeLabel = data.type === "reclamo" ? "Reclamo" : "Queja";

    await Promise.all([
      transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: process.env.CONTACT_EMAIL,
        subject: `[Libro de Reclamaciones] Nuevo ${typeLabel} - ${id}`,
        html: buildAdminHtml(data, id),
      }),
      transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: data.email,
        subject: `Confirmacion de ${typeLabel} - ${id} | Sol de Villa`,
        html: buildConfirmationHtml(data, id),
      }),
    ]);

    return NextResponse.json({ message: `${typeLabel} registrado exitosamente`, id }, { status: 201 });
  } catch (error) {
    console.error("Error processing complaint:", error);
    return NextResponse.json({ message: "Error al procesar el registro. Intente nuevamente." }, { status: 500 });
  }
}
