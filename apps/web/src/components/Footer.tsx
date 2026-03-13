"use client";

import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Productos", href: "/#productos" },
  { label: "Biotecnología", href: "/#biotecnologia" },
  { label: "Contacto", href: "/#contacto" },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/SolDeVillaPeru",
    icon: (
      <svg className="w-[13px] h-[13px] fill-white" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/soldevillaperu/",
    icon: (
      <svg className="w-[13px] h-[13px] fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/75473124/",
    icon: (
      <svg className="w-[13px] h-[13px] fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-green -mt-[50px] pt-[140px] max-md:pt-[100px] pb-0 px-[15px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-[70px] max-md:h-[40px] block">
          <path className="fill-light-green" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-[url('/images/backgrounds/image08.png')] bg-right-bottom bg-no-repeat bg-contain opacity-50 pointer-events-none" />

      <div className="relative z-20 max-w-container mx-auto">
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-0 pb-[60px] max-md:pb-[50px]">
          <div className="pr-10 max-md:pr-0 max-md:mb-[50px] max-md:text-center">
            <Link href="/">
              <Image
                src="/images/brand/logo.png"
                alt="Sol de Villa"
                width={1104}
                height={678}
                className="w-[200px] h-auto max-md:mx-auto"
              />
            </Link>
            <p className="font-montserrat text-sm leading-[1.4] text-white mt-2 -mb-[15px] max-md:mb-2">
              Tu raiz, tu mejor inversión. Tu salud, nuestro futuro.
            </p>
            <h6 className="font-montserrat text-[13px] font-semibold text-white mt-6 mb-2 max-md:mt-4">
              Síguenos en nuestras redes sociales:
            </h6>
            <div className="flex gap-[6px] max-md:justify-center -mt-[10px] max-md:mt-0">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-[30px] h-[30px] rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="pl-[15px] pr-10 pt-[15px] max-md:hidden">
            <h6 className="font-montserrat text-base font-bold text-secondary mb-4">
              Enlaces
            </h6>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-montserrat text-sm text-white hover:text-primary transition-colors no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pl-[15px] pr-10 pt-[15px] max-md:hidden">
            <h6 className="font-montserrat text-base font-bold text-secondary mb-4">
              Horario
            </h6>
            <p className="font-montserrat text-sm text-white leading-[1.4] mb-1">
              Lunes - Viernes :
            </p>
            <p className="font-montserrat text-sm font-bold text-primary leading-[1.1] mb-5">
              08:00 am : 06:00 pm
            </p>

            <div className="flex items-start gap-[15px] mb-4">
              <svg className="w-[20px] h-[20px] fill-primary shrink-0 mt-0.5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
              </svg>
              <div>
                <h6 className="font-montserrat text-sm text-light-gray mb-1">Llámanos</h6>
                <p className="font-montserrat text-sm font-bold text-white leading-[1.1]">
                  +51 977 867 347
                </p>
              </div>
            </div>

            <div className="border-t-2 border-dotted border-white/10 pt-[10px] flex items-start gap-[15px]">
              <svg className="w-[20px] h-[20px] fill-primary shrink-0 mt-0.5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
              </svg>
              <div>
                <h6 className="font-montserrat text-sm text-light-gray mb-1">Lunes - Sabado</h6>
                <p className="font-montserrat text-sm font-bold text-white leading-[1.1]">
                  info@soldevilla.pe
                </p>
              </div>
            </div>
          </div>

          <div className="pl-[15px] pt-[15px] max-md:hidden">
            <h6 className="font-montserrat text-base font-bold text-secondary mb-4">
              Suscríbete
            </h6>
            <p className="font-montserrat text-sm text-white leading-[1.4] -mb-[10px]">
              Suscríbete a nosotros y recibe nuestras ofertas y actualizaciones directamente en tu bandeja de entrada.
            </p>
            <form className="mt-6 flex flex-col gap-[10px]" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Correo electrónico"
                required
                className="w-full bg-white rounded-[4px] px-3 py-2 font-inter text-sm text-text placeholder:text-muted-gray outline-none border-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white font-montserrat text-sm font-semibold rounded-[4px] py-2 hover:bg-secondary hover:text-dark-green transition-colors cursor-pointer border-none"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="border-t-2 border-dotted border-white/10 py-5 max-md:py-[10px] flex max-md:flex-col items-center justify-between gap-4">
          <p className="font-montserrat text-[13px] font-medium text-white text-center">
            © 2021 – 2026 Sol de Villa | Desarrollado por{" "}
            <a
              href="https://enigmasac.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors no-underline"
            >
              Enigma Developers SAC
            </a>
          </p>
          <div className="flex items-center gap-[15px] max-md:justify-center flex-wrap">
            <Link href="/politica-de-privacidad" className="font-montserrat text-sm text-white hover:text-primary transition-colors no-underline">
              Términos y condiciones
            </Link>
            <span className="w-px h-3 bg-white/20" />
            <Link href="/politica-de-privacidad" className="font-montserrat text-sm text-white hover:text-primary transition-colors no-underline">
              Políticas de privacidad
            </Link>
            <span className="w-px h-3 bg-white/20" />
            <Link href="/politica-de-cookies" className="font-montserrat text-sm text-white hover:text-primary transition-colors no-underline">
              Política de cookies
            </Link>
            <span className="w-px h-3 bg-white/20" />
            <Link href="/libro-de-reclamaciones" className="font-montserrat text-sm text-white hover:text-primary transition-colors no-underline">
              Libro de reclamaciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
