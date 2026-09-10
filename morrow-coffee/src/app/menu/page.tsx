"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Navbar from "@/src/components/Navbar";
import { categories, products, type Category } from "@/src/data/products";
import {
  ShoppingBag,
} from "lucide-react";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <main className="min-h-screen bg-[#F7EEDF] text-[#38251A]">
      <Navbar />

      <section className="mx-auto w-full max-w-[1500px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">

        <h1 className="font-playfair text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Our Menu
        </h1>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`font-inter rounded-md px-5 py-2 text-[10px] font-medium transition sm:text-[11px] ${
                  isActive
                    ? "bg-[#38251A] text-[#FFFDF8]"
                    : "bg-[#E9D8C2] text-[#38251A] hover:bg-[#DCC3A5]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/menu/${product.slug}`}
              className="group overflow-hidden rounded-md border border-[#B99F84] bg-[#FFFDF8] transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[1.45/1] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex min-h-[72px] flex-col p-2.5">
                <h2 className="font-playfair text-[11px] font-semibold leading-tight sm:text-[12px]">
                  {product.name}
                </h2>

                {product.price ? (
                  <div className="font-inter mt-auto flex items-center gap-0.5 pt-4 text-xs font-semibold">
                    <span>₱</span>
                    <span>{product.price}</span>
                  </div>
                ) : (
                  <div className="mt-auto pt-4" />
                )}
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="font-inter text-sm text-[#6B4F3A]">
              No products available in this category.
            </p>
          </div>
        )}
      </section>

      <footer className="mt-10 bg-[#38251A] px-6 py-8 text-[#FFFDF8]">

        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h2 className="font-playfair text-xl font-semibold">
              MORROW
            </h2>

            <p className="font-inter text-xs tracking-[0.25em]">
              COFFEE
            </p>
          </div>

          <p className="font-inter text-xs text-[#DCC3A5]">
            Slow mornings. Better coffee.
          </p>

          <div className="font-inter flex items-center gap-2 text-xs text-[#DCC3A5]">
            <ShoppingBag size={15} />
            Order Online
          </div>

        </div>

      </footer>
    </main>
  );
}