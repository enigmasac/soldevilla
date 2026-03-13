import Image from "next/image";

const PRODUCT_ICONS = [
  {
    src: "/images/icons/icono01.png",
    label: "Bioestimulantes",
  },
  {
    src: "/images/icons/icono-02.png",
    label: "Fungicidas",
  },
  {
    src: "/images/icons/icono-3.png",
    label: "Bionematicidas",
  },
  {
    src: "/images/icons/icono-4.png",
    label: "Bioinsecticidas",
  },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex overflow-hidden">
      <Image
        src="/images/backgrounds/strawberry-field.jpg"
        alt="Campo de cultivo"
        fill
        className="object-cover object-bottom"
        priority
      />

      <div className="absolute inset-0 bg-dark-green/75" />

      <div className="relative z-10 w-full flex justify-center items-center px-4">
        <div className="w-full max-w-[900px] flex flex-col items-center text-center mt-[25px] max-md:mt-[100px]">
          <h1 className="font-montserrat text-[70px] max-md:text-[39px] font-extrabold leading-[1.2] text-white">
            Cultivos sanos, <br />desde la raíz
          </h1>

          <p className="font-montserrat text-[28px] max-md:text-[15px] font-bold uppercase leading-[1] text-light-gray mt-0 mb-[30px] max-md:mb-8 mx-[100px] max-md:mx-0">
            sustainable growth starts here!
          </p>

          <div className="flex items-center justify-center gap-0 w-[80%] max-md:w-full mt-2 max-md:mt-0 mb-6">
            {PRODUCT_ICONS.map((icon) => (
              <div
                key={icon.label}
                className="flex flex-col items-center gap-[7px] max-md:w-[24%] px-2"
              >
                <Image
                  src={icon.src}
                  alt={icon.label}
                  width={519}
                  height={519}
                  className="w-[60px] max-md:w-10 h-auto"
                />
                <span className="font-montserrat text-[16px] max-md:text-[8px] font-semibold leading-[1.1] text-white">
                  {icon.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex max-md:flex-col items-center justify-center gap-[10px] max-md:gap-[11px] w-full max-md:w-full">
            <a
              href="#productos"
              className="
                bg-accent text-white
                font-montserrat text-sm font-semibold leading-[1.2]
                px-6 py-[15px] rounded-pill
                hover:bg-dark-green hover:text-white
                transition-colors duration-200
                no-underline
                max-md:w-full max-md:text-center
              "
            >
              Conoce nuestra línea de productos
            </a>
            <a
              href="#contacto"
              className="
                bg-secondary text-dark-green
                font-montserrat text-sm font-semibold leading-[1.2]
                px-6 py-[15px] rounded-pill
                hover:bg-secondary/80 hover:text-dark-green
                transition-colors duration-200
                no-underline
                max-md:w-full max-md:text-center
              "
            >
              Solicita un ensayo
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-[100px] max-md:h-[54px] block"
        >
          <path
            className="fill-white"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
            c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
            c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          />
        </svg>
      </div>
    </section>
  );
}
