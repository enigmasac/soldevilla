import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Politica de Cookies | Soldevilla",
  description:
    "Politica de cookies de Sol de Villa Peru S.A.C. Informacion sobre los tipos de cookies que utilizamos y como gestionarlas.",
};

export default function PoliticaDeCookiesPage() {
  return (
    <>
      <Header />

      <section className="relative bg-dark-green pt-[200px] max-md:pt-[140px] pb-[100px] max-md:pb-[60px]">
        <WaveDivider position="bottom" />
        <div className="max-w-container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-[46px] max-md:text-[32px] font-bold leading-[1.1] text-white">
            Politica de Cookies
          </h1>
        </div>
      </section>

      <section className="max-w-container mx-auto px-4 py-16 max-md:py-10">
        <article className="max-w-[800px] mx-auto">
          <p className="font-inter text-sm text-muted-dark mb-10">
            Ultima actualizacion: 13 de marzo de 2026
          </p>

          <div className="mb-10">
            <h2 className="font-montserrat text-[22px] font-bold text-primary mb-4">
              1. Que son las cookies
            </h2>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Las cookies son pequenos archivos de texto que se almacenan en su dispositivo (ordenador, tablet o
              telefono movil) cuando visita un sitio web. Permiten que el sitio recuerde sus acciones y preferencias
              (como el idioma, tamano de fuente y otras preferencias de visualizacion) durante un periodo de tiempo,
              para que no tenga que volver a configurarlas cada vez que regrese al sitio o navegue entre sus paginas.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="font-montserrat text-[22px] font-bold text-primary mb-4">
              2. Tipos de cookies que utilizamos
            </h2>

            <h3 className="font-montserrat text-lg font-bold text-dark-green mb-2">
              2.1. Cookies tecnicas (necesarias)
            </h3>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Son imprescindibles para el correcto funcionamiento del sitio web. Permiten la navegacion y el uso de
              las diferentes opciones y servicios. Sin estas cookies, el sitio no podria funcionar correctamente.
            </p>

            <h3 className="font-montserrat text-lg font-bold text-dark-green mb-2">
              2.2. Cookies analiticas
            </h3>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Nos permiten cuantificar el numero de usuarios y realizar la medicion y analisis estadistico de la
              utilizacion del sitio web. Se examina la navegacion con el fin de mejorar la oferta de productos y
              servicios que ofrecemos.
            </p>

            <h3 className="font-montserrat text-lg font-bold text-dark-green mb-2">
              2.3. Cookies de terceros
            </h3>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Son aquellas establecidas por dominios distintos al nuestro. No tenemos control sobre estas cookies
              y su uso se rige por las politicas de privacidad de los terceros correspondientes.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="font-montserrat text-[22px] font-bold text-primary mb-4">
              3. Cookies especificas del sitio
            </h2>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              A continuacion se detallan las cookies utilizadas en soldevilla.pe:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-dark-green text-white">
                    <th className="font-montserrat font-semibold text-left px-4 py-2.5">Cookie</th>
                    <th className="font-montserrat font-semibold text-left px-4 py-2.5">Tipo</th>
                    <th className="font-montserrat font-semibold text-left px-4 py-2.5">Finalidad</th>
                    <th className="font-montserrat font-semibold text-left px-4 py-2.5">Duracion</th>
                  </tr>
                </thead>
                <tbody className="font-inter text-text">
                  <tr className="bg-light-green">
                    <td className="px-4 py-2.5">_ga</td>
                    <td className="px-4 py-2.5">Analitica</td>
                    <td className="px-4 py-2.5">Google Analytics: distingue usuarios unicos</td>
                    <td className="px-4 py-2.5">2 anos</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2.5">_ga_*</td>
                    <td className="px-4 py-2.5">Analitica</td>
                    <td className="px-4 py-2.5">Google Analytics: mantiene el estado de la sesion</td>
                    <td className="px-4 py-2.5">2 anos</td>
                  </tr>
                  <tr className="bg-light-green">
                    <td className="px-4 py-2.5">_gid</td>
                    <td className="px-4 py-2.5">Analitica</td>
                    <td className="px-4 py-2.5">Google Analytics: distingue usuarios</td>
                    <td className="px-4 py-2.5">24 horas</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2.5">_gat</td>
                    <td className="px-4 py-2.5">Analitica</td>
                    <td className="px-4 py-2.5">Google Analytics: limita la tasa de peticiones</td>
                    <td className="px-4 py-2.5">1 minuto</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="font-montserrat text-[22px] font-bold text-primary mb-4">
              4. Como gestionar y desactivar cookies
            </h2>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Usted puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la
              configuracion de su navegador. A continuacion le indicamos como hacerlo en los principales navegadores:
            </p>

            <h3 className="font-montserrat text-lg font-bold text-dark-green mb-2">
              Google Chrome
            </h3>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Configuracion → Privacidad y seguridad → Cookies y otros datos de sitios. Desde alli puede bloquear
              cookies de terceros, borrar cookies al cerrar el navegador o gestionar las excepciones por sitio.
            </p>

            <h3 className="font-montserrat text-lg font-bold text-dark-green mb-2">
              Mozilla Firefox
            </h3>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Opciones → Privacidad y seguridad → Cookies y datos del sitio. Puede elegir entre proteccion estandar,
              estricta o personalizada para controlar que cookies se aceptan.
            </p>

            <h3 className="font-montserrat text-lg font-bold text-dark-green mb-2">
              Safari
            </h3>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Preferencias → Privacidad → Cookies y datos de sitios web. Safari permite bloquear todas las cookies
              o impedir el rastreo entre sitios web.
            </p>

            <h3 className="font-montserrat text-lg font-bold text-dark-green mb-2">
              Microsoft Edge
            </h3>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Configuracion → Cookies y permisos del sitio → Cookies y datos almacenados. Puede elegir bloquear
              cookies de terceros o todas las cookies.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="font-montserrat text-[22px] font-bold text-primary mb-4">
              5. Consecuencias de desactivar las cookies
            </h2>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Si decide desactivar las cookies, es posible que algunas funcionalidades del sitio web no esten
              disponibles o que su experiencia de navegacion se vea afectada. En particular:
            </p>
            <ul className="font-inter text-sm text-text leading-relaxed list-disc pl-6 mb-4 flex flex-col gap-1">
              <li>Las preferencias de navegacion no se guardaran entre visitas</li>
              <li>No podremos obtener datos estadisticos sobre el uso del sitio para mejorarlo</li>
              <li>Algunas funcionalidades interactivas podrian no funcionar correctamente</li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="font-montserrat text-[22px] font-bold text-primary mb-4">
              6. Actualizacion de la politica de cookies
            </h2>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              SOL DE VILLA PERU S.A.C. puede modificar esta politica de cookies en funcion de cambios legislativos,
              regulatorios o con la finalidad de adaptar dicha politica a las instrucciones de la autoridad competente.
              Se recomienda revisar esta politica periodicamente.
            </p>
            <p className="font-inter text-base text-text leading-relaxed">
              Para cualquier consulta relacionada con nuestra politica de cookies, puede contactarnos en{" "}
              <a href="mailto:info@soldevilla.pe" className="text-primary hover:text-dark-green transition-colors underline">
                info@soldevilla.pe
              </a>.
            </p>
          </div>
        </article>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
