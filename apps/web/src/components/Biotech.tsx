import Image from "next/image";

export default function Biotech() {
  return (
    <section className="relative z-10 bg-dark-green pt-[122px] max-md:pt-[57px] pb-[220px] max-md:pb-[120px] px-4">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-[80px] max-md:h-[50px] block">
          <path className="fill-white" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-[80px] max-md:h-[50px] block scale-x-[-1]">
          <path className="fill-light-green" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
        </svg>
      </div>

      <div className="relative z-20 max-w-container mx-auto">
        <div className="flex max-md:flex-col gap-0 max-md:gap-1 mb-[54px] max-md:mb-6">
          <div className="w-[36%] max-md:w-full shrink-0">
            <h3 className="font-montserrat text-[40px] max-md:text-[24px] font-bold leading-[1.1] text-white uppercase max-md:text-center">
              nutre<br />
              protege<br />
              florece<br />
              naturalmente
            </h3>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-5 max-md:gap-1">
            <p className="font-montserrat text-[19px] max-lg:text-[25px] max-md:text-[13px] font-bold leading-[1.1] text-white pl-9 max-md:pl-0 max-md:text-center">
              Desarrollamos fertilizantes innovadores que cuidan el equilibrio
              natural de los ecosistemas, promoviendo soluciones responsables que
              impulsan una agricultura sostenible, próspera y certificada.
            </p>

            <div className="bg-light-green rounded-pill px-6 py-3 max-md:self-center ml-9 max-md:ml-0">
              <Image
                src="/images/icons/iconos-10.png"
                alt="Certificaciones"
                width={1696}
                height={172}
                className="w-full max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
