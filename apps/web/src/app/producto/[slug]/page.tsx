import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";
import {
  PRODUCTS,
  CATEGORIES,
  getProductBySlug,
  getCategoryBySlug,
} from "@/data/products";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  return {
    title: `${product.name} | Soldevilla`,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const category = getCategoryBySlug(
    CATEGORIES.find((c) => c.id === product.categoryId)?.slug ?? ""
  );

  return (
    <>
      <Header />

      <section className="relative bg-dark-green pt-[200px] max-md:pt-[140px] pb-[100px] max-md:pb-[60px]">
        <WaveDivider position="bottom" />
        <div className="max-w-container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-[46px] max-md:text-[32px] font-bold leading-[1.1] text-white">
            {product.name}
          </h1>
          {category && (
            <Link
              href={`/categoria-producto/${category.slug}`}
              className="inline-block mt-4 font-montserrat text-sm text-white/70 hover:text-white transition-colors no-underline"
            >
              ← {category.name}
            </Link>
          )}
        </div>
      </section>

      <section className="max-w-container mx-auto px-4 py-16 max-md:py-10">
        <div className="flex max-lg:flex-col gap-12">
          <div className="w-[45%] max-lg:w-full flex flex-col items-center gap-6">
            <div className="border border-light-gray rounded-2xl shadow-md overflow-hidden bg-white p-4">
              <Image
                src={product.detailImageUrl}
                alt={product.name}
                width={526}
                height={708}
                className="w-full max-w-[400px] h-auto"
                priority
              />
            </div>

            <p className="font-montserrat text-sm font-bold uppercase tracking-wider text-primary text-center">
              {product.subtitle}
            </p>

            {product.scientificName && (
              <p className="font-inter text-sm italic text-muted-dark text-center">
                {product.scientificName}
              </p>
            )}

            {product.ingredients.length > 0 && (
              <div className="w-full">
                <h3 className="font-montserrat text-lg font-bold text-dark-green mb-3">
                  Composición
                </h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-dark-green text-white">
                      <th className="font-montserrat text-sm font-semibold text-left px-4 py-2.5">
                        Componente
                      </th>
                      <th className="font-montserrat text-sm font-semibold text-right px-4 py-2.5">
                        %, m/m
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.ingredients.map((ing, i) => (
                      <tr
                        key={ing.name}
                        className={
                          i % 2 === 0 ? "bg-light-green" : "bg-white"
                        }
                      >
                        <td className="font-inter text-sm text-text px-4 py-2.5">
                          {ing.name}
                        </td>
                        <td className="font-inter text-sm text-text text-right px-4 py-2.5 font-medium">
                          {ing.value}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-dark-green text-white">
                      <td className="font-montserrat text-sm font-semibold px-4 py-2.5">
                        TOTAL
                      </td>
                      <td className="font-montserrat text-sm font-semibold text-right px-4 py-2.5">
                        100.00%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="w-[55%] max-lg:w-full flex flex-col gap-8">
            <div>
              <h2 className="font-montserrat text-[28px] max-md:text-[22px] font-bold text-primary leading-tight mb-4">
                {product.name}
              </h2>
              <p className="font-inter text-base text-text leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.concentration && (
              <p className="font-inter text-sm text-muted-dark bg-light-green rounded-lg px-4 py-3">
                {product.concentration}
              </p>
            )}

            {product.benefitsImageUrl && (
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={product.benefitsImageUrl}
                  alt={`Beneficios de ${product.name}`}
                  width={758}
                  height={328}
                  className="w-full max-w-[380px] h-auto"
                />
              </div>
            )}

            <div>
              <h3 className="font-montserrat text-lg font-bold text-dark-green mb-3">
                Características
              </h3>
              <ul className="flex flex-col gap-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className="w-5 h-5 mt-0.5 shrink-0 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-inter text-sm text-text">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-montserrat text-lg font-bold text-dark-green mb-2">
                Aplicación
              </h3>
              <p className="font-inter text-sm text-text">
                {product.application}
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div>
                <h3 className="font-montserrat text-lg font-bold text-dark-green mb-2">
                  Presentación
                </h3>
                <p className="font-inter text-sm text-text">
                  {product.presentation}
                </p>
              </div>
              <div>
                <h3 className="font-montserrat text-lg font-bold text-dark-green mb-2">
                  Contenido neto
                </h3>
                <p className="font-inter text-sm text-text">
                  {product.contentNeto}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
