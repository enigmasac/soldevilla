import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Libro de Reclamaciones | Soldevilla",
  description:
    "Libro de Reclamaciones virtual de Sol de Villa Peru S.A.C. conforme a la Ley N° 29571 y el D.S. N° 011-2011-PCM. Registre su reclamo o queja.",
  openGraph: {
    title: "Libro de Reclamaciones | Soldevilla",
    description:
      "Libro de Reclamaciones virtual de Sol de Villa Peru S.A.C. conforme a la Ley N° 29571.",
    type: "website",
    url: "https://soldevilla.pe/libro-de-reclamaciones",
  },
};

export default function LibroDeReclamacionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
