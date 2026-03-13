import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";
import CategoryProductCard from "@/components/CategoryProductCard";
import CategorySidebar from "@/components/CategorySidebar";
import { CATEGORIES, getCategoryBySlug, getProductsByCategory } from "@/data/products";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) return {};

  return {
    title: `${category.name} | Soldevilla`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: PageProps) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.id);

  return (
    <>
      <Header />

      <section className="relative bg-dark-green pt-[200px] max-md:pt-[140px] pb-[100px] max-md:pb-[60px]">
        <WaveDivider position="bottom" />
        <div className="max-w-container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-[40px] max-lg:text-[32px] max-md:text-[26px] font-bold leading-[1.1] text-white max-w-[700px] mx-auto">
            {category.name}
          </h1>
        </div>
      </section>

      <section className="max-w-container mx-auto px-4 py-16 max-md:py-10">
        <div className="flex max-lg:flex-col gap-10">
          <div className="w-1/2 max-lg:w-full">
            {products.length > 0 ? (
              <div className="grid grid-cols-3 max-md:grid-cols-2 gap-4">
                {products.map((product) => (
                  <CategoryProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="font-montserrat text-lg text-muted-gray">
                  No hay productos todavía en esta categoría.
                </p>
              </div>
            )}
          </div>

          <div className="w-1/2 max-lg:w-full">
            <CategorySidebar />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
