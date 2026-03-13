"use client";

import { useState } from "react";

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5 fill-primary shrink-0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
      </svg>
    ),
    text: "Av. Mariscal La Mar 750 Miraflores",
    href: "#",
  },
  {
    icon: (
      <svg className="w-5 h-5 fill-primary shrink-0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
      </svg>
    ),
    text: "(51) 977 867 347",
    href: "tel:+51977867347",
  },
  {
    icon: (
      <svg className="w-5 h-5 fill-primary shrink-0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
      </svg>
    ),
    text: "(51) 991 736 655",
    href: "tel:+51991736655",
  },
  {
    icon: (
      <svg className="w-5 h-5 fill-primary shrink-0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
      </svg>
    ),
    text: "Info@soldevilla.pe",
    href: "mailto:Info@soldevilla.pe",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [docModal, setDocModal] = useState<"catalogo" | "ficha" | null>(null);
  const [docForm, setDocForm] = useState({ name: "", email: "", phone: "" });
  const [docSent, setDocSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  function handleDocChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDocForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleDocSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDocSent(true);
    setTimeout(() => {
      setDocModal(null);
      setDocSent(false);
      setDocForm({ name: "", email: "", phone: "" });
    }, 3000);
  }

  return (
    <section
      id="contacto"
      className="relative z-30 pb-[230px] max-md:pb-[100px] -mb-[130px] max-md:-mb-[60px] px-4"
      style={{ background: "linear-gradient(to bottom, transparent 100px, #E9F2EA 100px)" }}
    >
      <div className="relative z-10 max-w-container mx-auto -mt-[160px] max-md:-mt-[60px]">
        <div className="bg-white rounded-[30px] shadow-[0_0_30px_rgba(0,0,0,0.1)] p-[50px] max-md:p-6">
          <div className="flex max-md:flex-col gap-10 max-md:gap-6">
            <div className="w-[45%] max-md:w-full shrink-0">
              <h3 className="font-montserrat text-[28px] max-md:text-[22px] font-bold leading-[1.1] text-dark-green mb-8 max-md:mb-4">
                ¿Listo para contactarnos?
              </h3>

              <ul className="space-y-4 mb-8">
                {CONTACT_INFO.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    {item.icon}
                    <a
                      href={item.href}
                      className="font-montserrat text-[15px] font-medium leading-[1.4] text-text hover:text-primary transition-colors no-underline"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4 max-lg:hidden">
                <button
                  type="button"
                  onClick={() => setDocModal("catalogo")}
                  className="border-2 border-dotted border-primary rounded-pill px-6 py-3 font-montserrat text-sm font-semibold text-dark-green text-center hover:bg-light-green transition-colors cursor-pointer bg-transparent"
                >
                  Descargar catálogo (PDF)
                </button>
                <button
                  type="button"
                  onClick={() => setDocModal("ficha")}
                  className="bg-dark-green rounded-pill px-6 py-3 font-montserrat text-sm font-semibold text-white text-center hover:bg-primary transition-colors cursor-pointer border-none"
                >
                  Solicitar Ficha Técnica
                </button>
              </div>
            </div>

            <div className="flex-1">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-light-green rounded-pill px-[15px] py-[15px] font-inter text-sm text-text placeholder:text-muted-gray outline-none border-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-light-green rounded-pill px-[15px] py-[15px] font-inter text-sm text-text placeholder:text-muted-gray outline-none border-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono ó Whatsapp"
                  pattern="[0-9()#&+*\-=.]+"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-light-green rounded-pill px-[15px] py-[15px] font-inter text-sm text-text placeholder:text-muted-gray outline-none border-none"
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Cuéntanos tu consulta"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-light-green rounded-[20px] px-[15px] py-[15px] font-inter text-sm text-text placeholder:text-muted-gray outline-none border-none resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-accent text-white font-montserrat text-base font-bold rounded-pill py-[15px] hover:bg-dark-green transition-colors cursor-pointer border-none"
                >
                  Solicitar Cotización
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {docModal && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          onClick={() => { setDocModal(null); setDocSent(false); setDocForm({ name: "", email: "", phone: "" }); }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-[20px] shadow-[0_0_40px_rgba(0,0,0,0.15)] w-full max-w-[440px] p-8 max-md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => { setDocModal(null); setDocSent(false); setDocForm({ name: "", email: "", phone: "" }); }}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted-gray hover:text-dark-green transition-colors cursor-pointer bg-transparent border-none text-xl leading-none"
              aria-label="Cerrar"
            >
              &times;
            </button>

            {docSent ? (
              <div className="text-center py-6">
                <svg className="w-14 h-14 mx-auto mb-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h4 className="font-montserrat text-xl font-bold text-dark-green mb-2">
                  Solicitud enviada
                </h4>
                <p className="font-inter text-sm text-text">
                  Te enviaremos el documento a tu correo electrónico.
                </p>
              </div>
            ) : (
              <>
                <h4 className="font-montserrat text-xl font-bold text-dark-green mb-2">
                  {docModal === "catalogo" ? "Descargar catálogo" : "Solicitar Ficha Técnica"}
                </h4>
                <p className="font-inter text-sm text-muted-gray mb-6">
                  Déjanos tus datos para enviarte el documento.
                </p>
                <form onSubmit={handleDocSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    required
                    value={docForm.name}
                    onChange={handleDocChange}
                    className="w-full bg-light-green rounded-pill px-[15px] py-[13px] font-inter text-sm text-text placeholder:text-muted-gray outline-none border-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    required
                    value={docForm.email}
                    onChange={handleDocChange}
                    className="w-full bg-light-green rounded-pill px-[15px] py-[13px] font-inter text-sm text-text placeholder:text-muted-gray outline-none border-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono ó Whatsapp"
                    required
                    value={docForm.phone}
                    onChange={handleDocChange}
                    className="w-full bg-light-green rounded-pill px-[15px] py-[13px] font-inter text-sm text-text placeholder:text-muted-gray outline-none border-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-montserrat text-sm font-bold rounded-pill py-[13px] hover:bg-dark-green transition-colors cursor-pointer border-none"
                  >
                    Enviar solicitud
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
