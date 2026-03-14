"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";

type FormState = {
  name: string;
  documentType: "DNI" | "CE" | "Pasaporte";
  documentNumber: string;
  address: string;
  phone: string;
  email: string;
  isMinor: boolean;
  tutorName: string;
  tutorDocumentType: "DNI" | "CE" | "Pasaporte";
  tutorDocumentNumber: string;
  type: "reclamo" | "queja";
  serviceDescription: string;
  claimedAmount: string;
  complaintDetail: string;
  consumerRequest: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  documentType: "DNI",
  documentNumber: "",
  address: "",
  phone: "",
  email: "",
  isMinor: false,
  tutorName: "",
  tutorDocumentType: "DNI",
  tutorDocumentNumber: "",
  type: "reclamo",
  serviceDescription: "",
  claimedAmount: "",
  complaintDetail: "",
  consumerRequest: "",
};

const DOC_TYPES = ["DNI", "CE", "Pasaporte"] as const;

type SubmitStatus = "idle" | "sending" | "sent" | "error";

export default function LibroDeReclamacionesPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [complaintId, setComplaintId] = useState("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrors({});

    try {
      const res = await fetch("/api/complaints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        if (data.errors) setErrors(data.errors);
        return;
      }

      setComplaintId(data.id);
      setStatus("sent");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full bg-light-green border border-light-gray rounded-lg px-4 py-3 font-inter text-sm text-text placeholder:text-muted-gray outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors";
  const selectBase =
    "w-full bg-light-green border border-light-gray rounded-lg px-4 py-3 font-inter text-sm text-text outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors appearance-none cursor-pointer";
  const labelBase = "font-montserrat text-sm font-medium text-dark-green block mb-1.5";
  const sectionHeading = "font-montserrat text-lg font-bold text-dark-green mb-4";
  const errorText = "font-inter text-xs text-red-600 mt-1";

  return (
    <>
      <Header />

      <section className="relative bg-dark-green pt-[200px] max-md:pt-[140px] pb-[100px] max-md:pb-[60px]">
        <WaveDivider position="bottom" />
        <div className="max-w-container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-[46px] max-md:text-[32px] font-bold leading-[1.1] text-white">
            Libro de Reclamaciones
          </h1>
          <p className="font-inter text-base max-md:text-sm text-white/80 mt-4 max-w-[600px] mx-auto">
            Conforme a la Ley N° 29571, Codigo de Proteccion y Defensa del Consumidor
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-4 py-16 max-md:py-10">
        <div className="grid grid-cols-5 max-lg:grid-cols-1 gap-10">
          <div className="col-span-3 max-lg:col-span-1">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h2 className={sectionHeading}>
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5 fill-primary shrink-0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                    </svg>
                    Datos del consumidor
                  </span>
                </h2>

                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                  <div className="col-span-2 max-md:col-span-1">
                    <label htmlFor="name" className={labelBase}>Nombre completo *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ingrese su nombre completo"
                      className={inputBase}
                    />
                    {errors.name && <p className={errorText}>{errors.name[0]}</p>}
                  </div>

                  <div>
                    <label htmlFor="documentType" className={labelBase}>Tipo de documento *</label>
                    <select
                      id="documentType"
                      name="documentType"
                      value={form.documentType}
                      onChange={handleChange}
                      className={selectBase}
                    >
                      {DOC_TYPES.map((dt) => (
                        <option key={dt} value={dt}>{dt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="documentNumber" className={labelBase}>Numero de documento *</label>
                    <input
                      id="documentNumber"
                      name="documentNumber"
                      type="text"
                      required
                      value={form.documentNumber}
                      onChange={handleChange}
                      placeholder="Ingrese su numero de documento"
                      className={inputBase}
                    />
                    {errors.documentNumber && <p className={errorText}>{errors.documentNumber[0]}</p>}
                  </div>

                  <div className="col-span-2 max-md:col-span-1">
                    <label htmlFor="address" className={labelBase}>Domicilio *</label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Ingrese su direccion"
                      className={inputBase}
                    />
                    {errors.address && <p className={errorText}>{errors.address[0]}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelBase}>Telefono *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      pattern="[0-9()#&+*\-=.]+"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Ej: 977867347"
                      className={inputBase}
                    />
                    {errors.phone && <p className={errorText}>{errors.phone[0]}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className={labelBase}>Correo electronico *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      className={inputBase}
                    />
                    {errors.email && <p className={errorText}>{errors.email[0]}</p>}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="isMinor"
                      checked={form.isMinor}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-light-gray text-primary focus:ring-primary cursor-pointer accent-primary"
                    />
                    <span className="font-montserrat text-sm text-dark-green group-hover:text-primary transition-colors">
                      Soy menor de edad
                    </span>
                  </label>
                </div>

                {form.isMinor && (
                  <div className="mt-4 p-4 bg-light-green/50 border border-light-gray rounded-lg">
                    <h3 className="font-montserrat text-sm font-bold text-dark-green mb-3">Datos del padre o tutor</h3>
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                      <div className="col-span-2 max-md:col-span-1">
                        <label htmlFor="tutorName" className={labelBase}>Nombre del tutor *</label>
                        <input
                          id="tutorName"
                          name="tutorName"
                          type="text"
                          value={form.tutorName}
                          onChange={handleChange}
                          placeholder="Nombre completo del tutor"
                          className={inputBase}
                        />
                        {errors.tutorName && <p className={errorText}>{errors.tutorName[0]}</p>}
                      </div>
                      <div>
                        <label htmlFor="tutorDocumentType" className={labelBase}>Tipo de documento</label>
                        <select
                          id="tutorDocumentType"
                          name="tutorDocumentType"
                          value={form.tutorDocumentType}
                          onChange={handleChange}
                          className={selectBase}
                        >
                          {DOC_TYPES.map((dt) => (
                            <option key={dt} value={dt}>{dt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="tutorDocumentNumber" className={labelBase}>Numero de documento</label>
                        <input
                          id="tutorDocumentNumber"
                          name="tutorDocumentNumber"
                          type="text"
                          value={form.tutorDocumentNumber}
                          onChange={handleChange}
                          placeholder="Documento del tutor"
                          className={inputBase}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-light-gray pt-8">
                <h2 className={sectionHeading}>
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5 fill-primary shrink-0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                    </svg>
                    Tipo de solicitud
                  </span>
                </h2>

                <div className="flex gap-0 mb-6">
                  <button
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, type: "reclamo" }))}
                    className={`flex-1 py-3 font-montserrat text-sm font-bold rounded-l-lg border transition-colors ${
                      form.type === "reclamo"
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-dark-green border-light-gray hover:bg-light-green"
                    }`}
                  >
                    Reclamo
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, type: "queja" }))}
                    className={`flex-1 py-3 font-montserrat text-sm font-bold rounded-r-lg border border-l-0 transition-colors ${
                      form.type === "queja"
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-dark-green border-light-gray hover:bg-light-green"
                    }`}
                  >
                    Queja
                  </button>
                </div>
              </div>

              <div className="border-t border-light-gray pt-8">
                <h2 className={sectionHeading}>
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5 fill-primary shrink-0" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z" />
                    </svg>
                    Detalle del bien o servicio
                  </span>
                </h2>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="serviceDescription" className={labelBase}>Descripcion del bien o servicio contratado *</label>
                    <textarea
                      id="serviceDescription"
                      name="serviceDescription"
                      rows={3}
                      required
                      value={form.serviceDescription}
                      onChange={handleChange}
                      placeholder="Describa el producto o servicio adquirido"
                      className={`${inputBase} resize-none`}
                    />
                    {errors.serviceDescription && <p className={errorText}>{errors.serviceDescription[0]}</p>}
                  </div>

                  <div>
                    <label htmlFor="claimedAmount" className={labelBase}>Monto reclamado (S/) - Opcional</label>
                    <input
                      id="claimedAmount"
                      name="claimedAmount"
                      type="text"
                      value={form.claimedAmount}
                      onChange={handleChange}
                      placeholder="Ej: 150.00"
                      className={inputBase}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-light-gray pt-8">
                <h2 className={sectionHeading}>
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5 fill-primary shrink-0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
                    </svg>
                    Detalle del {form.type === "reclamo" ? "reclamo" : "queja"}
                  </span>
                </h2>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="complaintDetail" className={labelBase}>
                      Descripcion del {form.type === "reclamo" ? "reclamo" : "queja"} *
                    </label>
                    <textarea
                      id="complaintDetail"
                      name="complaintDetail"
                      rows={4}
                      required
                      value={form.complaintDetail}
                      onChange={handleChange}
                      placeholder={
                        form.type === "reclamo"
                          ? "Detalle su reclamo sobre el producto o servicio"
                          : "Detalle su queja sobre la atencion recibida"
                      }
                      className={`${inputBase} resize-none`}
                    />
                    {errors.complaintDetail && <p className={errorText}>{errors.complaintDetail[0]}</p>}
                  </div>

                  <div>
                    <label htmlFor="consumerRequest" className={labelBase}>Pedido del consumidor *</label>
                    <textarea
                      id="consumerRequest"
                      name="consumerRequest"
                      rows={3}
                      required
                      value={form.consumerRequest}
                      onChange={handleChange}
                      placeholder="Indique cual es la solucion que espera obtener"
                      className={`${inputBase} resize-none`}
                    />
                    {errors.consumerRequest && <p className={errorText}>{errors.consumerRequest[0]}</p>}
                  </div>
                </div>
              </div>

              {status === "sent" && (
                <div className="bg-light-green border border-primary/30 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 fill-primary shrink-0 mt-0.5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.249-6.248 16.379 0 22.628l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                    </svg>
                    <div>
                      <p className="font-montserrat text-base font-bold text-dark-green">
                        Registro exitoso
                      </p>
                      <p className="font-inter text-sm text-text mt-1">
                        Su {form.type === "reclamo" ? "reclamo" : "queja"} ha sido registrado con el numero{" "}
                        <strong className="text-primary">{complaintId}</strong>.
                        Recibira una confirmacion en su correo electronico.
                      </p>
                      <p className="font-inter text-xs text-muted-dark mt-2">
                        El plazo de respuesta es de 30 dias calendario (Art. 24° D.S. 011-2011-PCM).
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 fill-red-500 shrink-0 mt-0.5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" />
                    </svg>
                    <div>
                      <p className="font-montserrat text-base font-bold text-red-700">
                        Error al enviar
                      </p>
                      <p className="font-inter text-sm text-red-600 mt-1">
                        Ocurrio un error al procesar su solicitud. Por favor, intente nuevamente.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="w-full bg-primary text-white font-montserrat text-base font-bold rounded-pill py-4 hover:bg-dark-green transition-colors cursor-pointer border-none disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "sending" && (
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                )}
                {status === "idle" && "Enviar solicitud"}
                {status === "sending" && "Enviando..."}
                {status === "sent" && "Solicitud enviada"}
                {status === "error" && "Reintentar envio"}
              </button>
            </form>
          </div>

          <div className="col-span-2 max-lg:col-span-1 space-y-6 max-lg:order-first">
            <div className="bg-light-green border border-light-gray rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 fill-primary" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM64 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112zM176 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112z" />
                  </svg>
                </div>
                <h3 className="font-montserrat text-base font-bold text-dark-green">Datos del proveedor</h3>
              </div>
              <ul className="space-y-2.5">
                <li className="font-inter text-sm text-text flex items-start gap-2">
                  <span className="font-montserrat font-medium text-dark-green shrink-0">Razon social:</span>
                  Sol de Villa Peru S.A.C.
                </li>
                <li className="font-inter text-sm text-text flex items-start gap-2">
                  <span className="font-montserrat font-medium text-dark-green shrink-0">RUC:</span>
                  20522163971
                </li>
                <li className="font-inter text-sm text-text flex items-start gap-2">
                  <span className="font-montserrat font-medium text-dark-green shrink-0">Direccion:</span>
                  Centro de Operaciones, Ica
                </li>
                <li className="font-inter text-sm text-text flex items-start gap-2">
                  <span className="font-montserrat font-medium text-dark-green shrink-0">Email:</span>
                  <a href="mailto:info@soldevilla.pe" className="text-primary hover:text-dark-green transition-colors">
                    info@soldevilla.pe
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-light-green border border-light-gray rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 fill-primary" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                  </svg>
                </div>
                <h3 className="font-montserrat text-base font-bold text-dark-green">Plazo de respuesta</h3>
              </div>
              <p className="font-inter text-sm text-text leading-relaxed">
                El proveedor debera dar respuesta al reclamo o queja en un plazo no mayor a{" "}
                <strong className="text-dark-green">30 dias calendario</strong>, contados desde la fecha de su presentacion,
                conforme al articulo 24° del D.S. 011-2011-PCM.
              </p>
            </div>

            <div className="bg-light-green border border-light-gray rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 fill-primary" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
                  </svg>
                </div>
                <h3 className="font-montserrat text-base font-bold text-dark-green">Reclamo vs. Queja</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-montserrat text-sm font-semibold text-dark-green mb-1">Reclamo</p>
                  <p className="font-inter text-sm text-text leading-relaxed">
                    Disconformidad relacionada a los productos o servicios adquiridos o contratados con el proveedor.
                  </p>
                </div>
                <div className="border-t border-light-gray pt-3">
                  <p className="font-montserrat text-sm font-semibold text-dark-green mb-1">Queja</p>
                  <p className="font-inter text-sm text-text leading-relaxed">
                    Disconformidad no relacionada a los productos o servicios; o malestar respecto a la atencion al publico
                    por parte de la empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
