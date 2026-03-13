import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soldevilla | Soluciones Agrícolas Sostenibles",
  description:
    "Productos biológicos, abonos naturales, fertilizantes ecológicos y tratamientos con microorganismos para una agricultura sostenible.",
  keywords: [
    "agricultura sostenible",
    "productos biológicos",
    "fertilizantes ecológicos",
    "abonos naturales",
    "microorganismos",
    "Soldevilla",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Soldevilla | Soluciones Agrícolas Sostenibles",
    description:
      "Productos biológicos y fertilizantes ecológicos para una agricultura sostenible.",
    url: "https://soldevilla.pe",
    siteName: "Soldevilla",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${inter.variable}`}
    >
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
