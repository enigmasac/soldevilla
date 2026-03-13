import Image from "next/image";

const FEATURES = [
  {
    icon: "/images/icons/icono-5.png",
    title: "Cepas seleccionadas",
    description: "Control de hongos y nematodos",
  },
  {
    icon: "/images/icons/icono-7.png",
    title: "Soporte científico y técnico",
    description: "Acompañamiento en campo",
  },
  {
    icon: "/images/icons/icono-8.png",
    title: "Nutre, protege naturalmente",
    description: "Más frutos, mejor calidad",
  },
];

function PlusIcon() {
  return (
    <div className="flex justify-center mt-5">
      <div
        className="
          w-[52px] h-[52px] rounded-full
          bg-accent border-[5px] border-white
          flex items-center justify-center
          shadow-[0_-10px_20px_5px_rgba(0,0,0,0.1)]
          hover:bg-dark-green transition-colors duration-200
          cursor-pointer
        "
      >
        <svg
          className="w-[14px] h-[14px] fill-white block"
          viewBox="0 0 448 448"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M416 176H272V32c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V272h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="relative z-30 -mt-[140px] hidden lg:block px-4">
      <div className="max-w-container mx-auto">
        <div className="bg-white rounded-[30px] shadow-[0_10px_25px_-10px_rgba(0,0,0,0.25)] px-[50px] py-10">
          <div className="flex items-stretch justify-center">
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className={`
                  flex-1 flex flex-col
                  ${i < FEATURES.length - 1 ? "border-r border-dotted border-[#729F2857] pr-[30px]" : ""}
                  ${i > 0 ? "pl-5" : ""}
                `}
              >
                <div className="flex items-center gap-0 flex-1">
                  <div className="shrink-0">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={519}
                      height={519}
                      className="w-[100px] h-auto"
                    />
                  </div>
                  <div className="pl-[6px]">
                    <h5 className="font-montserrat text-xl font-bold leading-[1.1] text-dark-green mb-[10px]">
                      {feature.title}
                    </h5>
                    <p className="border-t border-dotted border-[#729F2857] pt-[10px] font-inter text-[13px] leading-[1.5] text-text">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <PlusIcon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
