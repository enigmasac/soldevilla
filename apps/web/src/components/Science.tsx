import Image from "next/image";

const COLUMNS = [
  {
    badge: "Investigación\nDesarrollo\nInnovación",
    icon: (
      <svg className="w-[60px] h-[60px] fill-primary" viewBox="0 0 460 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z" />
      </svg>
    ),
    description: "Apostamos de forma continua en I+D+I y, con el soporte de nuestra clínica de diagnóstico, brindamos asesoría internacional al agroexportador.",
    hiddenOnMobile: true,
  },
  {
    badge: "En productos de\norigen microbiano\nLa CEPA define",
    image: {
      src: "/images/backgrounds/cepas.png",
      alt: "Cepas seleccionadas",
      width: 912,
      height: 900,
    },
    description: "Selección de una cepa única a partir de más de 100 aislamientos de hongos endófitos y agentes de control biológico.",
  },
  {
    badge: "Más de 25 años\nde experiencia",
    icon: (
      <svg className="w-[60px] h-[60px] fill-primary" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M160 320h12v16c0 8.84 7.16 16 16 16h40c8.84 0 16-7.16 16-16v-16h12c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32V16c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v16c-17.67 0-32 14.33-32 32v224c0 17.67 14.33 32 32 32zm304 128h-1.29C493.24 413.99 512 369.2 512 320c0-105.88-86.12-192-192-192v64c70.58 0 128 57.42 128 128s-57.42 128-128 128H48c-26.51 0-48 21.49-48 48 0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48zm-360-32h208c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8z" />
      </svg>
    ),
    description: "En nuestro equipo tenemos químicos, bioquímicos, microbiólogos y agrónomos; por tanto, tenemos capacidad para desarrollar una amplia variedad de soluciones.",
    hiddenOnMobile: true,
  },
];

function WavyDivider() {
  return (
    <div className="flex justify-center mt-2">
      <svg width="70" height="8" viewBox="0 0 70 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,4 C4,4 4,8 8,8 S12,4 16,4 S20,8 24,8 S28,4 32,4 S36,8 40,8 S44,4 48,4 S52,8 56,8 S60,4 64,4 S68,8 70,8" stroke="#729F28" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}

export default function Science() {
  return (
    <section id="biotecnologia" className="max-w-container mx-auto px-4 mt-[100px] max-md:mt-[30px] mb-[100px] max-md:mb-[30px]">
      <h3 className="font-montserrat text-[40px] max-md:text-[24px] font-bold leading-[1.1] text-dark-green text-center mb-[50px]">
        La ciencia detrás de tus cultivos
      </h3>

      <div className="mt-[30px]">
        <div className="flex max-md:flex-col gap-10 max-md:gap-6">
          {COLUMNS.map((col) => (
            <div
              key={col.badge}
              className={`
                flex-1 flex flex-col items-center text-center
                ${col.hiddenOnMobile ? "max-lg:hidden" : ""}
              `}
            >
              <h6
                className="
                  font-montserrat text-sm font-semibold leading-[1.2]
                  mb-5
                  whitespace-pre-line text-dark-green
                "
              >
                {col.badge}
              </h6>

              {"icon" in col && col.icon && (
                <div className="w-[120px] h-[120px] rounded-full bg-light-green flex items-center justify-center mt-10 mb-[10px]">
                  {col.icon}
                </div>
              )}

              {"image" in col && col.image && (
                <Image
                  src={col.image.src}
                  alt={col.image.alt}
                  width={col.image.width}
                  height={col.image.height}
                  className="w-[180px] h-auto my-5"
                />
              )}

              <h5 className="font-montserrat text-xl max-md:text-[17px] font-bold leading-[1.1] text-dark-green text-center mb-3">
                {col.description}
              </h5>

              <WavyDivider />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
