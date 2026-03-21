import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Script from "next/script";
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
  themeColor: "#0B3D2C",
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
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P7GCLW33');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4D5GFYYFX6"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4D5GFYYFX6');`}
        </Script>
      </head>
      <body className="font-inter antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P7GCLW33"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
