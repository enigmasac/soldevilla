import Image from "next/image";
import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";

const SOLUTIONS = [
  {
    image: "/images/products/biotor.png",
    title: "Biológicos",
    href: "/categoria-producto/biologicos",
  },
  {
    image: "/images/products/nutre.png",
    title: "Abonos naturales",
    href: "/categoria-producto/abonos-naturales",
  },
  {
    image: "/images/products/vigore.png",
    title: "Fertilizantes ecológicos",
    href: "/categoria-producto/fertilizantes-ecologicos",
    hiddenOnMobile: true,
  },
  {
    image: "/images/products/fuline.png",
    title: "Control de plagas",
    href: "/categoria-producto/control-de-plagas",
  },
  {
    image: "/images/products/biopro.png",
    title: "Tratamientos con microorganismos",
    href: "/categoria-producto/tratamientos-con-microorganismos",
  },
];

function ProductCard({
  image,
  title,
  href,
  hiddenOnMobile,
}: {
  image: string;
  title: string;
  href: string;
  hiddenOnMobile?: boolean;
}) {
  return (
    <div
      className={`
        bg-white rounded-[18px] flex flex-col justify-between items-center
        w-[25%] max-md:w-[49%]
        pt-[10px] pb-5 px-0
        max-md:px-[5px]
        ${hiddenOnMobile ? "max-lg:hidden" : ""}
      `}
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="w-[130px] h-auto border border-accent rounded-[18px] mx-[15px] my-[15px]"
      />
      <h5 className="font-montserrat text-xl max-md:text-xs font-bold leading-[1.1] text-dark-green text-center mb-5 px-2">
        {title}
      </h5>
      <Link
        href={href}
        className="
          bg-accent text-white
          font-montserrat text-xs font-semibold leading-[1.2]
          px-[10px] py-[10px] rounded-pill
          hover:bg-dark-green
          transition-colors duration-200
          no-underline
        "
      >
        Leer más
      </Link>
    </div>
  );
}

export default function Solutions() {
  const row1 = SOLUTIONS.slice(0, 3);
  const row2 = SOLUTIONS.slice(3);

  return (
    <section
      id="productos"
      className="relative bg-dark-green mt-[60px] max-md:mt-[30px] mb-[100px] max-md:mb-[30px] pt-[50px] max-md:pt-[50px] pb-[200px] max-md:pb-20 px-[15px]"
      style={{
        backgroundImage:
          "url(/images/backgrounds/image08.png)",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <WaveDivider position="top" />
      <WaveDivider position="bottom" />

      <div className="relative max-w-container mx-auto pt-20 max-md:pt-10">
        <div
          className="absolute inset-0 bg-no-repeat opacity-80 pointer-events-none"
          style={{
            backgroundImage:
              "url(/images/backgrounds/image09.png)",
            backgroundPosition: "top left",
          }}
        />
        <div
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundImage:
              "url(/images/backgrounds/image010.png)",
            backgroundPosition: "top right",
          }}
        />

        <h3 className="font-montserrat text-[46px] max-md:text-[28px] font-bold leading-[1.1] text-white text-center mb-5">
          Nuestras soluciones
        </h3>

        <div className="flex justify-center -mt-3 max-md:-mt-[13px] mb-5 max-md:-mb-[13px]">
          <Image
            src="/images/products/captura-soluciones.png"
            alt="Línea de productos Soldevilla"
            width={2460}
            height={552}
            className="w-[368px] max-md:w-[260px] h-auto"
          />
        </div>

        <div className="flex justify-center gap-[5px] flex-wrap pb-[2px]">
          {row1.map((solution) => (
            <ProductCard key={solution.title} {...solution} />
          ))}
        </div>

        <div className="flex justify-center gap-[5px] flex-wrap pt-[2px]">
          {row2.map((solution) => (
            <ProductCard key={solution.title} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
