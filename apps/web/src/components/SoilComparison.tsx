import Image from "next/image";

const INERT_POINTS = [
  "Suelos dañados por agroquímicos",
  "Baja actividad biológica",
  "Pérdida de fertilidad natural",
];

const LIVING_POINTS = [
  "Promoción de crecimiento radicular y de la planta.",
  "Biocontrol por competencia, antibiosis y parasitismo.",
  "Solubilización y traslocación de nutrientes.",
  "Inducción de resistencia.",
];

export default function SoilComparison() {
  return (
    <section className="max-w-container mx-auto px-4 mt-5 max-md:mt-0">
      <h3 className="font-montserrat text-[22px] max-lg:text-[35px] max-md:text-[24px] font-bold leading-[1.1] text-dark-green text-center my-5 max-md:my-1">
        Recuperemos juntos la microflora y la fertilidad de tus suelos
      </h3>

      <div className="flex max-md:flex-col items-stretch mt-[25px] max-md:mt-0 -mb-[15px] max-md:mb-0">
        <div className="flex-1 flex flex-col">
          <h4 className="font-montserrat text-[30px] max-md:text-xl font-bold leading-[1.1] text-dark-green uppercase mb-5" style={{ color: "#6B5B12" }}>
            Suelo inerte
          </h4>
          <ul className="font-montserrat text-[16px] max-md:text-[15px] font-semibold leading-[1.5] text-text space-y-2 list-disc pl-5">
            {INERT_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex flex-col items-center relative">
          <span className="font-montserrat text-[11px] font-medium text-dark-green self-start max-md:self-center -mb-[35px] max-md:mb-0 max-md:mt-4">
            Suelo inerte
          </span>
          <Image
            src="/images/backgrounds/raiz-soldevilla.png"
            alt="Raíz - Simbiosis microbiana"
            width={1024}
            height={933}
            className="w-full max-w-[400px] h-auto"
          />
          <span className="font-montserrat text-[11px] font-medium text-dark-green self-end max-md:self-center -mt-10 max-md:-mt-2">
            Simbiosis microbiana
          </span>
        </div>

        <div className="flex-1 flex flex-col max-md:items-start">
          <h4 className="font-montserrat text-[30px] max-md:text-xl font-bold leading-[1.1] text-dark-green uppercase text-right max-md:text-left mb-5">
            Suelo vivo
          </h4>
          <ul className="font-montserrat text-[16px] max-md:text-[15px] font-semibold leading-[1.5] text-text space-y-4 list-disc pl-5">
            {LIVING_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
