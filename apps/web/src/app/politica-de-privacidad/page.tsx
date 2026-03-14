import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Politica de Privacidad | Soldevilla",
  description:
    "Politica de privacidad de Sol de Villa Peru S.A.C. Conoce como recopilamos, usamos y protegemos tus datos personales.",
};

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <Header />

      <section className="relative bg-dark-green pt-[200px] max-md:pt-[140px] pb-[100px] max-md:pb-[60px]">
        <WaveDivider position="bottom" />
        <div className="max-w-container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-[46px] max-md:text-[32px] font-bold leading-[1.1] text-white">
            Politica de Privacidad
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
              1. Identificacion del responsable del tratamiento
            </h2>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              En cumplimiento del Reglamento General de Proteccion de Datos (RGPD) de la Union Europea y de la Ley
              N.° 29733 de Proteccion de Datos Personales de Peru, le informamos que el responsable del tratamiento
              de sus datos personales es:
            </p>
            <ul className="font-inter text-sm text-text leading-relaxed list-none flex flex-col gap-1 mb-4 pl-4">
              <li><strong className="text-dark-green">Razon social:</strong> SOL DE VILLA PERU S.A.C.</li>
              <li><strong className="text-dark-green">RUC:</strong> 20522163971</li>
              <li><strong className="text-dark-green">Domicilio:</strong> Centro de Operaciones, Ica, Peru</li>
              <li><strong className="text-dark-green">Correo electronico:</strong> info@soldevilla.pe</li>
              <li><strong className="text-dark-green">Telefono:</strong> (+51) 962 240 404</li>
              <li><strong className="text-dark-green">Sitio web:</strong> soldevilla.pe</li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="font-montserrat text-[22px] font-bold text-primary mb-4">
              2. Datos personales que recopilamos
            </h2>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Recopilamos los siguientes datos personales a traves de nuestro sitio web:
            </p>

            <h3 className="font-montserrat text-lg font-bold text-dark-green mb-2">
              2.1. Datos proporcionados directamente por el usuario
            </h3>
            <ul className="font-inter text-sm text-text leading-relaxed list-disc pl-6 mb-4 flex flex-col gap-1">
              <li>Nombre y apellidos</li>
              <li>Correo electronico</li>
              <li>Numero de telefono</li>
              <li>Mensaje o consulta (formularios de contacto)</li>
              <li>Correo electronico (suscripcion a newsletter)</li>
            </ul>

            <h3 className="font-montserrat text-lg font-bold text-dark-green mb-2">
              2.2. Datos recopilados automaticamente
            </h3>
            <ul className="font-inter text-sm text-text leading-relaxed list-disc pl-6 mb-4 flex flex-col gap-1">
              <li>Direccion IP</li>
              <li>Tipo de navegador y sistema operativo</li>
              <li>Paginas visitadas y tiempo de permanencia</li>
              <li>Datos de cookies (consulte nuestra Politica de Cookies)</li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="font-montserrat text-[22px] font-bold text-primary mb-4">
              3. Finalidad del tratamiento
            </h2>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Sus datos personales son tratados con las siguientes finalidades:
            </p>
            <ul className="font-inter text-sm text-text leading-relaxed list-disc pl-6 mb-4 flex flex-col gap-1">
              <li>Gestionar y responder consultas realizadas a traves de los formularios de contacto</li>
              <li>Enviar comunicaciones comerciales, ofertas y novedades (newsletter), previo consentimiento</li>
              <li>Mejorar la experiencia de navegacion y el funcionamiento del sitio web</li>
              <li>Realizar analisis estadisticos de uso del sitio</li>
              <li>Cumplir con obligaciones legales aplicables</li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="font-montserrat text-[22px] font-bold text-primary mb-4">
              4. Base legal del tratamiento
            </h2>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              El tratamiento de sus datos se fundamenta en las siguientes bases legales:
            </p>
            <ul className="font-inter text-sm text-text leading-relaxed list-disc pl-6 mb-4 flex flex-col gap-1">
              <li>
                <strong className="text-dark-green">Consentimiento:</strong> al completar formularios de contacto,
                suscribirse al newsletter o aceptar cookies, usted presta su consentimiento libre, informado e
                inequivoco para el tratamiento de sus datos (Art. 6.1.a RGPD; Art. 13.5 Ley 29733).
              </li>
              <li>
                <strong className="text-dark-green">Ejecucion contractual o precontractual:</strong> cuando el
                tratamiento es necesario para atender su solicitud de informacion sobre nuestros productos o
                servicios (Art. 6.1.b RGPD).
              </li>
              <li>
                <strong className="text-dark-green">Interes legitimo:</strong> para mejorar nuestros servicios y
                la seguridad del sitio web (Art. 6.1.f RGPD).
              </li>
              <li>
                <strong className="text-dark-green">Obligacion legal:</strong> cuando sea necesario para cumplir
                con la normativa aplicable (Art. 6.1.c RGPD; Art. 14 Ley 29733).
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="font-montserrat text-[22px] font-bold text-primary mb-4">
              5. Destinatarios y transferencias internacionales
            </h2>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Sus datos personales no seran cedidos a terceros salvo obligacion legal. No obstante, le informamos que
              podemos utilizar servicios de terceros que actuan como encargados del tratamiento, tales como:
            </p>
            <ul className="font-inter text-sm text-text leading-relaxed list-disc pl-6 mb-4 flex flex-col gap-1">
              <li>Proveedores de alojamiento web (hosting)</li>
              <li>Herramientas de analisis web (Google Analytics)</li>
              <li>Plataformas de envio de correo electronico</li>
            </ul>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Algunos de estos proveedores pueden encontrarse fuera del Espacio Economico Europeo (EEE). En tales
              casos, nos aseguramos de que existan garantias adecuadas conforme al RGPD, como clausulas contractuales
              tipo aprobadas por la Comision Europea o el cumplimiento del marco de privacidad correspondiente.
            </p>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              En relacion con la legislacion peruana, los datos se almacenan en servidores que cumplen con estandares
              de seguridad adecuados conforme a la Ley 29733 y su reglamento.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="font-montserrat text-[22px] font-bold text-primary mb-4">
              6. Periodo de conservacion
            </h2>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Conservaremos sus datos personales durante el tiempo necesario para cumplir con la finalidad para la
              que fueron recabados:
            </p>
            <ul className="font-inter text-sm text-text leading-relaxed list-disc pl-6 mb-4 flex flex-col gap-1">
              <li>
                <strong className="text-dark-green">Consultas de contacto:</strong> hasta que se resuelva la
                consulta y, posteriormente, durante el plazo de prescripcion legal aplicable.
              </li>
              <li>
                <strong className="text-dark-green">Newsletter:</strong> hasta que el usuario solicite la baja.
              </li>
              <li>
                <strong className="text-dark-green">Datos de navegacion:</strong> segun los periodos establecidos
                en nuestra Politica de Cookies.
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="font-montserrat text-[22px] font-bold text-primary mb-4">
              7. Derechos del usuario
            </h2>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              De conformidad con el RGPD y la Ley 29733, usted tiene derecho a:
            </p>
            <ul className="font-inter text-sm text-text leading-relaxed list-disc pl-6 mb-4 flex flex-col gap-1">
              <li><strong className="text-dark-green">Acceso:</strong> conocer que datos personales suyos tratamos.</li>
              <li><strong className="text-dark-green">Rectificacion:</strong> solicitar la correccion de datos inexactos o incompletos.</li>
              <li><strong className="text-dark-green">Cancelacion/Supresion:</strong> solicitar la eliminacion de sus datos cuando ya no sean necesarios.</li>
              <li><strong className="text-dark-green">Oposicion:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
              <li><strong className="text-dark-green">Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso comun (RGPD).</li>
              <li><strong className="text-dark-green">Limitacion del tratamiento:</strong> solicitar la restriccion del tratamiento en supuestos legalmente previstos.</li>
              <li><strong className="text-dark-green">Derecho al olvido:</strong> solicitar la supresion de sus datos y de los enlaces que dirijan a ellos (RGPD).</li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="font-montserrat text-[22px] font-bold text-primary mb-4">
              8. Ejercicio de derechos y contacto
            </h2>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Para ejercer cualquiera de los derechos mencionados, puede dirigir su solicitud a:
            </p>
            <ul className="font-inter text-sm text-text leading-relaxed list-none flex flex-col gap-1 mb-4 pl-4">
              <li><strong className="text-dark-green">Correo electronico:</strong> info@soldevilla.pe</li>
              <li><strong className="text-dark-green">Direccion postal:</strong> Centro de Operaciones, Ica, Peru</li>
            </ul>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              La solicitud debera incluir su nombre completo, documento de identidad y descripcion clara del derecho
              que desea ejercer. Responderemos en un plazo maximo de treinta (30) dias habiles.
            </p>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Asimismo, le informamos que tiene derecho a presentar una reclamacion ante la autoridad de control
              competente:
            </p>
            <ul className="font-inter text-sm text-text leading-relaxed list-disc pl-6 mb-4 flex flex-col gap-1">
              <li>
                <strong className="text-dark-green">Union Europea:</strong> Agencia Espanola de Proteccion de
                Datos (AEPD) o la autoridad de proteccion de datos de su pais de residencia.
              </li>
              <li>
                <strong className="text-dark-green">Peru:</strong> Autoridad Nacional de Proteccion de Datos
                Personales, adscrita al Ministerio de Justicia y Derechos Humanos.
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="font-montserrat text-[22px] font-bold text-primary mb-4">
              9. Uso de cookies
            </h2>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              Nuestro sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegacion
              y obtener datos estadisticos. Para mas informacion sobre los tipos de cookies que utilizamos,
              su finalidad y como gestionarlas, consulte nuestra{" "}
              <a href="/politica-de-cookies" className="text-primary hover:text-dark-green transition-colors underline">
                Politica de Cookies
              </a>.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="font-montserrat text-[22px] font-bold text-primary mb-4">
              10. Modificaciones a la politica de privacidad
            </h2>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              SOL DE VILLA PERU S.A.C. se reserva el derecho de modificar la presente politica de privacidad
              para adaptarla a novedades legislativas o jurisprudenciales, asi como a practicas de la industria.
              En caso de que se produzcan cambios significativos, se lo comunicaremos a traves de nuestro sitio
              web o por correo electronico.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="font-montserrat text-[22px] font-bold text-primary mb-4">
              11. Legislacion aplicable y jurisdiccion
            </h2>
            <p className="font-inter text-base text-text leading-relaxed mb-4">
              La presente politica de privacidad se rige por:
            </p>
            <ul className="font-inter text-sm text-text leading-relaxed list-disc pl-6 mb-4 flex flex-col gap-1">
              <li>
                El Reglamento (UE) 2016/679 General de Proteccion de Datos (RGPD) para usuarios ubicados en la
                Union Europea.
              </li>
              <li>
                La Ley N.° 29733, Ley de Proteccion de Datos Personales del Peru, y su reglamento aprobado por
                Decreto Supremo N.° 003-2013-JUS, para usuarios ubicados en Peru.
              </li>
            </ul>
            <p className="font-inter text-base text-text leading-relaxed">
              Para cualquier controversia derivada de la interpretacion o aplicacion de esta politica, las partes se
              someteran a los juzgados y tribunales competentes de la ciudad de Lima, Peru, salvo que la normativa
              aplicable establezca una jurisdiccion distinta.
            </p>
          </div>
        </article>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
