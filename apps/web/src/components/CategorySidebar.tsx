"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, PRODUCTS } from "@/data/products";

function SolutionsGrid() {
  return (
    <div className="bg-white rounded-[18px] p-6 shadow-[0_0_15px_rgba(0,0,0,0.08)]">
      <h4 className="font-montserrat text-lg font-bold text-dark-green mb-4">
        Nuestras soluciones
      </h4>
      <div className="grid grid-cols-2 gap-3">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/categoria-producto/${cat.slug}`}
            className="flex flex-col items-center gap-2 p-3 rounded-[12px] bg-light-green hover:bg-primary/10 transition-colors no-underline group"
          >
            <Image
              src={cat.imageUrl}
              alt={cat.name}
              width={80}
              height={80}
              className="w-[60px] h-auto"
            />
            <span className="font-montserrat text-[11px] font-semibold text-dark-green text-center leading-tight group-hover:text-primary transition-colors">
              {cat.name}
            </span>
            <span className="font-inter text-[10px] text-muted-gray">
              {cat.productCount} {cat.productCount === 1 ? "producto" : "productos"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <div className="bg-white rounded-[18px] p-6 shadow-[0_0_15px_rgba(0,0,0,0.08)]">
      <h4 className="font-montserrat text-lg font-bold text-dark-green mb-4">
        Destacados
      </h4>
      <div className="flex flex-col gap-4">
        {featured.map((product) => (
          <Link
            key={product.id}
            href={`/producto/${product.slug}`}
            className="flex items-center gap-3 no-underline group"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={60}
              height={60}
              className="w-[50px] h-auto rounded-[8px] border border-light-gray shrink-0"
            />
            <span className="font-montserrat text-sm font-semibold text-dark-green group-hover:text-primary transition-colors leading-tight">
              {product.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SidebarContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="bg-white rounded-[18px] p-6 shadow-[0_0_15px_rgba(0,0,0,0.08)]">
      <h4 className="font-montserrat text-lg font-bold text-dark-green mb-4">
        Contáctanos
      </h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-light-green rounded-pill px-[15px] py-[12px] font-inter text-sm text-text placeholder:text-muted-gray outline-none border-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-light-green rounded-pill px-[15px] py-[12px] font-inter text-sm text-text placeholder:text-muted-gray outline-none border-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-light-green rounded-pill px-[15px] py-[12px] font-inter text-sm text-text placeholder:text-muted-gray outline-none border-none"
        />
        <textarea
          name="message"
          rows={3}
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-light-green rounded-[20px] px-[15px] py-[12px] font-inter text-sm text-text placeholder:text-muted-gray outline-none border-none resize-none"
        />
        <button
          type="submit"
          className="w-full bg-accent text-white font-montserrat text-sm font-bold rounded-pill py-[12px] hover:bg-dark-green transition-colors cursor-pointer border-none"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}

export default function CategorySidebar() {
  return (
    <aside className="flex flex-col gap-6">
      <SolutionsGrid />
      <FeaturedProducts />
      <SidebarContactForm />
    </aside>
  );
}
