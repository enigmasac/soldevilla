import Image from "next/image";
import Link from "next/link";
import type { ProductDetail } from "@/data/products";

export default function CategoryProductCard({ product }: { product: ProductDetail }) {
  return (
    <div className="bg-white rounded-[18px] flex flex-col items-center pt-[10px] pb-5 px-0 border border-light-gray">
      <Image
        src={product.detailImageUrl}
        alt={product.name}
        width={300}
        height={400}
        className="w-[130px] h-auto border border-accent rounded-[18px] mx-[15px] my-[15px] object-contain"
      />
      <h5 className="font-montserrat text-xl max-md:text-xs font-bold leading-[1.1] text-dark-green text-center mb-5 px-2">
        {product.name}
      </h5>
      <Link
        href={`/producto/${product.slug}`}
        className="bg-accent text-white font-montserrat text-xs font-semibold leading-[1.2] px-[10px] py-[10px] rounded-pill hover:bg-dark-green transition-colors duration-200 no-underline"
      >
        Leer más
      </Link>
    </div>
  );
}
