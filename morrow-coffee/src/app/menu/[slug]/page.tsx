"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";

import Navbar from "@/src/components/Navbar";

import BeansIcon from "@/src/components/icons/BeansIcon";
import LeafIcon from "@/src/components/icons/LeafIcon";
import LoveIcon from "@/src/components/icons/LoveIcon";
import CoffeeIcon from "@/src/components/icons/CoffeeIcon";
import HeartIcon from "@/src/components/icons/HeartIcon";
import IngredientsIcon from "@/src/components/icons/IngredientsIcon";
import AllergensIcon from "@/src/components/icons/AllergensIcon";
import NutritionIcon from "@/src/components/icons/NutritionIcon";

type Product = {
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  thumbnails: string[];
};

const products: Product[] = [
  {
    name: "Morrow Latte",
    slug: "morrow-latte",
    description: "Smooth espresso with steamed milk.",
    price: 150,
    image: "/images/latte.jpg",
    thumbnails: [
      "/images/latte.jpg",
      "/images/latte-2.jpg",
      "/images/latte-3.jpg",
      "/images/coffee-beans.jpg",
    ],
  },

  {
    name: "Cappuccino",
    slug: "cappuccino",
    description: "Rich espresso topped with creamy milk foam.",
    price: 150,
    image: "/images/cappuccino.jpg",
    thumbnails: [
      "/images/cappuccino.jpg",
      "/images/latte.jpg",
      "/images/coffee-beans.jpg",
    ],
  },

  {
    name: "Spanish Latte",
    slug: "spanish-latte",
    description: "Smooth espresso blended with sweetened milk.",
    price: 160,
    image: "/images/spanish-latte.jpg",
    thumbnails: [
      "/images/spanish-latte.jpg",
      "/images/latte.jpg",
      "/images/coffee-beans.jpg",
    ],
  },

  {
    name: "Caramel Macchiato",
    slug: "caramel-macchiato",
    description: "Espresso with steamed milk and caramel sweetness.",
    price: 160,
    image: "/images/caramel-macchiato.jpg",
    thumbnails: [
      "/images/caramel-macchiato.jpg",
      "/images/latte.jpg",
      "/images/coffee-beans.jpg",
    ],
  },

  {
    name: "Cold Brew",
    slug: "cold-brew",
    description: "Slow-steeped coffee with a bold and smooth taste.",
    price: 145,
    image: "/images/cold-brew.jpg",
    thumbnails: [
      "/images/cold-brew.jpg",
      "/images/coffee-beans.jpg",
      "/images/latte.jpg",
    ],
  },

  {
    name: "Matcha Bliss",
    slug: "matcha-bliss",
    description: "Ceremonial grade matcha with creamy milk.",
    price: 160,
    image: "/images/matcha.jpg",
    thumbnails: [
      "/images/matcha.jpg",
      "/images/strawberry-matcha.jpg",
    ],
  },

  {
    name: "Chocolate",
    slug: "chocolate",
    description: "Rich and comforting chocolate drink.",
    price: 150,
    image: "/images/chocolate.jpg",
    thumbnails: ["/images/chocolate.jpg"],
  },

  {
    name: "Strawberry Matcha",
    slug: "strawberry-matcha",
    description: "Creamy matcha layered with sweet strawberry.",
    price: 170,
    image: "/images/strawberry-matcha.jpg",
    thumbnails: ["/images/strawberry-matcha.jpg"],
  },

  {
    name: "Croissant",
    slug: "croissant",
    description: "Buttery, flaky and freshly baked croissant.",
    price: 120,
    image: "/images/croissant.jpg",
    thumbnails: ["/images/croissant.jpg"],
  },

  {
    name: "Chocolate Croissant",
    slug: "chocolate-croissant",
    description: "Flaky croissant filled with rich chocolate.",
    price: 135,
    image: "/images/chocolate-croissant.jpg",
    thumbnails: ["/images/chocolate-croissant.jpg"],
  },

  {
    name: "Cinnamon Roll",
    slug: "cinnamon-roll",
    description: "Soft cinnamon roll with sweet glaze.",
    price: 130,
    image: "/images/cinnamon-roll.jpg",
    thumbnails: ["/images/cinnamon-roll.jpg"],
  },

  {
    name: "Blueberry Muffin",
    slug: "blueberry-muffin",
    description: "Soft muffin filled with juicy blueberries.",
    price: 110,
    image: "/images/blueberry-muffin.jpg",
    thumbnails: ["/images/blueberry-muffin.jpg"],
  },
];

const addOns = [
  {
    name: "Extra Espresso",
    price: 25,
  },
  {
    name: "Oat Milk",
    price: 20,
  },
  {
    name: "Vanilla Syrup",
    price: 15,
  },
  {
    name: "Caramel Syrup",
    price: 15,
  },
];

const accordionData = [
  {
    id: "details",
    title: "Product Details",
    icon: CoffeeIcon,
  },
  {
    id: "ingredients",
    title: "Ingredients",
    icon: IngredientsIcon,
  },
  {
    id: "allergens",
    title: "Allergens",
    icon: AllergensIcon,
  },
  {
    id: "nutrition",
    title: "Nutrition Facts",
    icon: NutritionIcon,
  },
];

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [selectedSize, setSelectedSize] = useState("Hot");
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState("details");

  const [resolvedSlug, setResolvedSlug] = useState<string | null>(null);

  params.then((value) => {
    if (resolvedSlug !== value.slug) {
      setResolvedSlug(value.slug);
    }
  });

  const product =
    products.find((item) => item.slug === resolvedSlug) ?? products[0];

  const toggleAccordion = (id: string) => {
    setOpenAccordion((current) => (current === id ? "" : id));
  };

  const toggleAddOn = (name: string) => {
    setSelectedAddOns((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    );
  };

  const addOnsTotal = selectedAddOns.reduce((total, name) => {
    const addOn = addOns.find((item) => item.name === name);
    return total + (addOn?.price ?? 0);
  }, 0);

  const total = product.price + addOnsTotal;

  return (
    <main className="min-h-screen bg-[#F7EEDF] text-[#38251A]">
      <Navbar />

      <div className="mx-auto max-w-[1500px] px-5 py-5 sm:px-8 lg:px-10">
        {/* BREADCRUMBS */}
        <div className="font-inter mb-4 flex items-center gap-2 text-[10px]">
          <Link href="/" className="hover:underline">
            Home
          </Link>

          <span>›</span>

          <Link href="/menu" className="hover:underline">
            Menu
          </Link>

          <span>›</span>

          <span>{product.name}</span>
        </div>

        <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="relative h-[350px] overflow-hidden rounded-lg sm:h-[430px] lg:h-[500px]">
              <Image
                src={
                  product.thumbnails[activeImage] ??
                  product.image
                }
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />

              <button
                type="button"
                onClick={() =>
                  setActiveImage((current) =>
                    current === 0
                      ? product.thumbnails.length - 1
                      : current - 1
                  )
                }
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFFDF8] shadow-sm transition hover:scale-105"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveImage(
                    (current) =>
                      (current + 1) %
                      product.thumbnails.length
                  )
                }
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFFDF8] shadow-sm transition hover:scale-105"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto">
              {product.thumbnails.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`relative h-[75px] w-[82px] shrink-0 overflow-hidden rounded-md border-2 ${
                    activeImage === index
                      ? "border-[#6B4F3A]"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    sizes="82px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="font-playfair text-3xl font-semibold">
                  {product.name}
                </h1>

                <p className="font-inter mt-1 text-xs text-[#6B4F3A]">
                  {product.description}
                </p>
              </div>

              <button
                type="button"
                className="text-lg transition hover:scale-110"
              >
                ♡
              </button>
            </div>

            <div className="font-inter mt-5 flex items-center gap-1 text-xl font-semibold">
              <span>₱</span>
              <span>{product.price}</span>
            </div>

            <div className="mt-5">
              <h2 className="font-inter text-xs font-semibold">
                Size
              </h2>

              <div className="mt-2 flex gap-2">
                {["Hot", "Iced"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-md border px-5 py-2 text-xs transition ${
                      selectedSize === size
                        ? "border-[#6B4F3A] bg-[#6B4F3A] text-[#FFFDF8]"
                        : "border-[#DCC3A5] bg-[#F7EEDF]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <h2 className="font-inter text-xs font-semibold">
                Add-ons
              </h2>

              <div className="mt-2 space-y-2">
                {addOns.map((addOn) => {
                  const checked = selectedAddOns.includes(
                    addOn.name
                  );

                  return (
                    <button
                      key={addOn.name}
                      type="button"
                      onClick={() => toggleAddOn(addOn.name)}
                      className="flex w-full items-center justify-between text-left text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`flex h-4 w-4 items-center justify-center rounded-sm border ${
                            checked
                              ? "border-[#6B4F3A] bg-[#6B4F3A]"
                              : "border-[#8A6A50]"
                          }`}
                        >
                          {checked && (
                            <span className="text-[10px] text-white">
                              ✓
                            </span>
                          )}
                        </div>

                        <span>{addOn.name}</span>
                      </div>

                      <span>+₱{addOn.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="flex h-9 items-center rounded-md border border-[#DCC3A5]">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                  className="flex h-full w-9 items-center justify-center"
                >
                  <Minus size={13} />
                </button>

                <span className="w-8 text-center text-xs">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  className="flex h-full w-9 items-center justify-center"
                >
                  <Plus size={13} />
                </button>
              </div>

              <button
                type="button"
                className="flex h-9 flex-1 items-center justify-center gap-2 rounded-md bg-[#6B4F3A] px-4 text-xs text-white transition hover:bg-[#4A3324]"
              >
                <ShoppingBag size={14} />

                Add to Order
              </button>
            </div>

            <div className="font-inter mt-2 text-right text-[10px] text-[#6B4F3A]">
              Estimated total:{" "}
              <span className="font-semibold">
                ₱{total * quantity}
              </span>
            </div>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-2 overflow-hidden rounded-md border border-[#DCC3A5] sm:grid-cols-4">
          <div className="flex flex-col items-center justify-center border-b border-[#DCC3A5] p-5 text-center sm:border-b-0 sm:border-r">
            <BeansIcon className="h-7 w-7 text-[#6B4F3A]" />

            <h3 className="font-playfair mt-3 text-xs font-semibold">
              Premium Beans
            </h3>

            <p className="font-inter mt-1 text-[9px] leading-tight">
              Sourced ethically from
              <br />
              the best farms
            </p>
          </div>

          <div className="flex flex-col items-center justify-center border-b border-[#DCC3A5] p-5 text-center sm:border-b-0 sm:border-r">
            <CoffeeIcon className="h-7 w-7 text-[#6B4F3A]" />

            <h3 className="font-playfair mt-3 text-xs font-semibold">
              Expertly Brewed
            </h3>

            <p className="font-inter mt-1 text-[9px] leading-tight">
              Crafted by skilled
              <br />
              baristas
            </p>
          </div>

          <div className="flex flex-col items-center justify-center border-r border-[#DCC3A5] p-5 text-center">
            <LeafIcon className="h-7 w-7 text-[#6B4F3A]" />

            <h3 className="font-playfair mt-3 text-xs font-semibold">
              Fresh & Quality
            </h3>

            <p className="font-inter mt-1 text-[9px] leading-tight">
              Made with fresh milk
              <br />
              and quality ingredients
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-5 text-center">
            <HeartIcon className="h-7 w-7 text-[#6B4F3A]" />

            <h3 className="font-playfair mt-3 text-xs font-semibold">
              Made with Love
            </h3>

            <p className="font-inter mt-1 text-[9px] leading-tight">
              Every cup is made just
              <br />
              for you
            </p>
          </div>
        </section>

        <section className="mt-4 overflow-hidden rounded-md border border-[#DCC3A5]">
          <div className="grid lg:grid-cols-[32%_68%]">
            <div className="border-b border-[#DCC3A5] lg:border-b-0 lg:border-r">
              {accordionData.map((item) => {
                const Icon = item.icon;
                const isOpen = openAccordion === item.id;

                return (
                  <div
                    key={item.id}
                    className="border-b border-[#DCC3A5] last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        toggleAccordion(item.id)
                      }
                      className="flex w-full items-center justify-between px-4 py-4 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-6 w-6 shrink-0 text-[#6B4F3A]" />

                        <span className="font-inter text-xs">
                          {item.title}
                        </span>
                      </div>

                      {isOpen ? (
                        <ChevronUp
                          size={15}
                          strokeWidth={1.7}
                        />
                      ) : (
                        <ChevronDown
                          size={15}
                          strokeWidth={1.7}
                        />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 lg:hidden">
                        <AccordionContent id={item.id} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="hidden min-h-[250px] p-6 lg:block">
              <AccordionContent
                id={openAccordion || "details"}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function AccordionContent({ id }: { id: string }) {
  if (id === "details") {
    return (
      <div>
        <p className="font-inter text-xs leading-[1.5] text-[#38251A]">
          Our signature Morrow Latte is made with carefully
          selected ingredients and thoughtfully prepared by
          our baristas. A smooth, comforting choice for your
          everyday coffee ritual.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div>
            <p className="font-inter text-[10px] font-semibold">
              Caffeine Level
            </p>

            <p className="font-inter text-[9px] text-[#6B4F3A]">
              Medium
            </p>
          </div>

          <div>
            <p className="font-inter text-[10px] font-semibold">
              Best For
            </p>

            <p className="font-inter text-[9px] text-[#6B4F3A]">
              Focus, Energy
            </p>
          </div>

          <div>
            <p className="font-inter text-[10px] font-semibold">
              Serving Size
            </p>

            <p className="font-inter text-[9px] text-[#6B4F3A]">
              12 oz
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (id === "ingredients") {
    return (
      <div>
        <h3 className="font-playfair text-base font-semibold">
          Ingredients
        </h3>

        <p className="font-inter mt-3 text-xs leading-[1.5]">
          Espresso, steamed milk, and lightly textured milk
          foam.
        </p>

        <ul className="font-inter mt-4 space-y-2 text-xs">
          <li>• Freshly ground espresso beans</li>
          <li>• Fresh milk</li>
          <li>• Filtered water</li>
        </ul>
      </div>
    );
  }

  if (id === "allergens") {
    return (
      <div>
        <h3 className="font-playfair text-base font-semibold">
          Allergens
        </h3>

        <p className="font-inter mt-3 text-xs leading-[1.5]">
          Contains milk and milk-derived ingredients.
        </p>

        <div className="mt-4 rounded-md bg-[#E9D8C2] p-3">
          <p className="font-inter text-[10px] font-semibold">
            Allergen Notice
          </p>

          <p className="font-inter mt-1 text-[10px] leading-[1.4]">
            Please inform our staff of any allergies or dietary
            restrictions before ordering.
          </p>
        </div>
      </div>
    );
  }

  if (id === "nutrition") {
    return (
      <div>
        <h3 className="font-playfair text-base font-semibold">
          Nutrition Facts
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3">
          <div>
            <p className="font-inter text-[10px] font-semibold">
              Calories
            </p>
            <p className="font-inter text-[10px] text-[#6B4F3A]">
              180 kcal
            </p>
          </div>

          <div>
            <p className="font-inter text-[10px] font-semibold">
              Protein
            </p>
            <p className="font-inter text-[10px] text-[#6B4F3A]">
              7 g
            </p>
          </div>

          <div>
            <p className="font-inter text-[10px] font-semibold">
              Carbohydrates
            </p>
            <p className="font-inter text-[10px] text-[#6B4F3A]">
              18 g
            </p>
          </div>

          <div>
            <p className="font-inter text-[10px] font-semibold">
              Fat
            </p>
            <p className="font-inter text-[10px] text-[#6B4F3A]">
              8 g
            </p>
          </div>

          <div>
            <p className="font-inter text-[10px] font-semibold">
              Sugar
            </p>
            <p className="font-inter text-[10px] text-[#6B4F3A]">
              12 g
            </p>
          </div>

          <div>
            <p className="font-inter text-[10px] font-semibold">
              Serving
            </p>
            <p className="font-inter text-[10px] text-[#6B4F3A]">
              12 oz
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}