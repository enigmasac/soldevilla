import Image from "next/image";

const PARTNERS = [
  { name: "UVICA", src: "/logos/uvica.png" },
  { name: "Don Luis", src: "/logos/don-luis.png" },
  { name: "Vanguard Perú", src: "/logos/vanguard-peru.png" },
  { name: "Camposol", src: "/logos/camposol.png" },
  { name: "Fall Creek", src: "/logos/fall-creek.png" },
  { name: "Agrícola Andrea", src: "/logos/agricola-andrea.png" },
  { name: "Global Agro", src: "/logos/global-agro.png" },
  { name: "Safco", src: "/logos/safco.png" },
  { name: "Chapi", src: "/logos/chapi.png" },
  { name: "Agro Direct", src: "/logos/agro-direct.png" },
  { name: "Interandina", src: "/logos/interandina.png" },
  { name: "Agrícola Santa Azul", src: "/logos/santa-azul.png" },
  { name: "San Ramón", src: "/logos/san-ramon.png" },
  { name: "Agrícola Copacabana", src: "/logos/copacabana.png" },
  { name: "AgriTac", src: "/logos/agritac.png" },
  { name: "AIB Agroindustrias", src: "/logos/aib.png" },
  { name: "Sunfruits", src: "/logos/sunfruits.png" },
  { name: "Valle y Pampa", src: "/logos/valle-y-pampa.png" },
];

function PartnerLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="w-[140px] h-[100px] max-md:w-[100px] max-md:h-[70px] shrink-0 flex items-center justify-center">
      <Image
        src={src}
        alt={name}
        width={300}
        height={300}
        className="max-w-full max-h-full w-auto h-auto object-contain"
      />
    </div>
  );
}

export default function AboutUs() {
  return (
    <section id="nosotros">
      <div className="max-w-container mx-auto px-4 mt-20 max-md:-mt-px mb-2">
        <div className="flex max-md:flex-col items-center gap-0">
          <div className="w-[55%] max-md:w-full max-md:mt-[25px] flex justify-center">
            <Image
              src="/images/brand/sol-de-villa-verde.png"
              alt="Sol de Villa Verde"
              width={1104}
              height={678}
              className="w-[399px] max-md:w-[177px] h-auto"
            />
          </div>

          <div className="w-[45%] max-md:w-full max-lg:ml-0 lg:ml-[70px] flex flex-col justify-center max-md:text-center">
            <h3 className="font-montserrat text-[33px] max-md:text-[24px] font-bold leading-[1.1] text-dark-green mb-5">
              Quiénes somos
            </h3>
            <div className="font-inter text-[15px] font-normal leading-[1.5] text-text max-md:text-center">
              <p className="mb-[15px]">
                Somos una empresa biotecnológica de vanguardia, especializada en
                el desarrollo y fabricación de soluciones biológicas y naturales
                para la agricultura moderna.
              </p>
              <p className="mb-[15px]">
                Nuestras líneas se distinguen por el uso de cepas patentadas de
                agentes de control biológico, que garantizan un control eficaz y
                sostenible de patógenos durante toda la campaña, asegurando la
                calidad y productividad de los cultivos.
              </p>
              <p className="mb-[15px]">
                Creemos que el futuro de la agricultura está en lo natural:
                mejoramos la productividad agrícola sin comprometer el medio
                ambiente, ayudando al productor a cosechar fruta de alta calidad,
                libre de residuos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h6 className="inline-block border-2 border-dotted border-[#41414180] rounded-pill px-[25px] py-3 font-montserrat text-sm font-semibold leading-[1.2] text-near-black mb-4 max-md:mb-6">
            Nuestros aliados
          </h6>
        </div>
      </div>

      <div className="relative overflow-hidden w-full py-2">
        <div
          className="absolute inset-y-0 left-0 w-[80px] z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-[80px] z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }}
        />

        <div className="flex animate-marquee">
          {[0, 1].map((set) => (
            <div key={set} className="flex shrink-0 items-center gap-6 max-md:gap-3 px-3">
              {PARTNERS.map((p) => (
                <PartnerLogo key={`${set}-${p.name}`} {...p} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
