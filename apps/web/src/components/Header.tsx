"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Inicio", href: "#" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
  { label: "Biotecnología", href: "#biotecnologia" },
  { label: "Contacto", href: "#contacto" },
];

const CONTACT_INFO = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    title: "Escríbenos",
    detail: "info@soldevilla.pe",
    href: "mailto:info@soldevilla.pe",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Llámanos",
    detail: "(51) 962 240 404",
    href: "tel:+51962240404",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Ubicación",
    detail: "Centro de Operaciones, Ica",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const resolveHref = useCallback(
    (href: string) => {
      if (!href.startsWith("#")) return href;
      if (isHome) return href;
      return href === "#" ? "/" : `/${href}`;
    },
    [isHome]
  );

  const handleNavClick = useCallback(() => {}, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[999]">
      <div
        className={`
          w-full transition-all duration-300 ease-in-out
          ${scrolled
            ? "bg-dark-green/75 backdrop-blur-md backdrop-saturate-[1.6] shadow-[0_6px_18px_rgba(0,0,0,0.2)]"
            : "bg-transparent"
          }
        `}
      >
        <div className="max-w-container mx-auto px-4">
          <div className="flex items-center">
            <div className="w-[16%] max-lg:w-full max-lg:max-w-[120px] max-lg:mx-auto shrink-0 py-5 max-lg:py-3">
              <Link href="/" className="block">
                <Image
                  src="/images/brand/logo.png"
                  alt="Sol de Villa"
                  width={1104}
                  height={678}
                  className="w-full max-lg:w-full h-auto"
                  priority
                />
              </Link>
            </div>

            <div className="flex-1 max-lg:hidden ml-[70px]">
              <div className="flex items-center border-b border-dotted border-white/[0.17] pt-4 pb-[18px]">
                <div className="flex-1 flex">
                  {CONTACT_INFO.map((item, i) => (
                    <div
                      key={item.title}
                      className={`
                        flex items-center gap-[10px] px-5 first:pl-0
                        ${i < CONTACT_INFO.length - 1 ? "border-r border-dotted border-white/[0.17]" : ""}
                      `}
                    >
                      <span className="text-[#F0F0F0] shrink-0">{item.icon}</span>
                      <div>
                        {item.href ? (
                          <a href={item.href} className="block font-inter text-xs font-bold leading-[1.2] text-[#F0F0F0] hover:text-secondary no-underline">
                            {item.title}
                          </a>
                        ) : (
                          <span className="block font-inter text-xs font-bold leading-[1.2] text-[#F0F0F0]">
                            {item.title}
                          </span>
                        )}
                        <p className="font-montserrat text-[13px] font-normal leading-[1.2] text-white">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={resolveHref("#contacto")}
                  onClick={handleNavClick}
                  className="
                    ml-auto shrink-0
                    bg-accent text-white font-inter text-[15px] font-bold uppercase leading-[1.2] tracking-wide
                    px-8 py-[16px] rounded-pill
                    hover:bg-dark-green hover:text-white
                    transition-colors duration-200
                    no-underline
                  "
                >
                  Cotizar
                </a>
              </div>

              <nav className="pt-[18px] pb-[18px]">
                <ul className="flex items-center gap-10">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.label}>
                      <a
                        href={resolveHref(item.href)}
                        onClick={handleNavClick}
                        className={`
                          font-montserrat text-sm font-semibold uppercase leading-[1.2]
                          transition-colors duration-200
                          no-underline
                          ${item.label === "Inicio" ? "text-secondary hover:text-secondary" : "text-white hover:text-secondary"}
                        `}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

          </div>
        </div>
      </div>

    </header>
  );
}
