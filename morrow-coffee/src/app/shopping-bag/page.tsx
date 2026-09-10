"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { useMemo, useState } from "react";

import Navbar from "@/src/components/Navbar";
import DeleteIcon from "@/src/components/icons/DeleteIcon";
import FreeDeliveryIcon from "@/src/components/icons/FreeDeliveryIcon";
import {
  ShoppingBag,
} from "lucide-react";


type CartItem = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  size: string;
  quantity: number;
};

const initialItems: CartItem[] = [
  {
    id: 1,
    name: "Spanish Latte",
    description:
      "A creamy, espresso-based coffee drink made with regular milk and sweetened condensed milk.",
    image: "/images/spanish-latte.jpg",
    price: 150,
    size: "Large",
    quantity: 1,
  },
  {
    id: 2,
    name: "Hot Caramel Macchiato",
    description:
      "Espresso, steamed milk, caramel, and a hint of vanilla.",
    image: "/images/caramel-macchiato.jpg",
    price: 140,
    size: "Regular",
    quantity: 1,
  },
  {
    id: 3,
    name: "Cold Brew",
    description:
      "Smooth, bold, and refreshing.",
    image: "/images/cold-brew.jpg",
    price: 130,
    size: "Regular",
    quantity: 1,
  },
];

export default function ShoppingBagPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const updateQuantity = (id: number, amount: number) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + amount),
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const subtotal = useMemo(() => {
    return items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [items]);

  const deliveryFee =
    subtotal >= 1000 || subtotal === 0 ? 0 : 50;

  const total = subtotal + deliveryFee;

  return (
    <main className="min-h-screen bg-[#F7EEDF] text-[#38251A]">
      <Navbar />

      <section className="mx-auto w-full max-w-[1500px] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">

        <div className="mb-8">
          <h1 className="font-playfair text-[40px] font-semibold leading-tight tracking-[-0.035em] sm:text-[44px]">
            Shopping Bag
          </h1>

          <p className="font-inter mt-2 text-[14px] text-[#6B4F3A] sm:text-[15px]">
            Review your items before checkout
          </p>
        </div>

        {items.length === 0 ? (
          <div className="flex min-h-[450px] flex-col items-center justify-center rounded-lg border border-[#DCC3A5]">
            <div className="text-center">

              <h2 className="font-playfair text-[28px] font-semibold">
                Your bag is empty
              </h2>

              <p className="font-inter mt-3 text-[15px] text-[#6B4F3A]">
                Add something delicious from our menu.
              </p>

              <Link
                href="/menu"
                className="font-inter mt-7 inline-flex items-center gap-2 rounded-md bg-[#38251A] px-8 py-3.5 text-[14px] font-semibold text-white transition hover:bg-[#4A3324]"
              >
                Browse Menu
                <ArrowRight size={18} />
              </Link>

            </div>
          </div>
        ) : (
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_380px]">

            <div className="overflow-hidden rounded-lg border border-[#DCC3A5]">

              <div className="hidden grid-cols-[1fr_90px_125px_90px_32px] items-center border-b border-[#DCC3A5] px-4 py-4 sm:grid">

                <span className="font-inter text-[12px] font-medium uppercase tracking-wide">
                  Item
                </span>

                <span className="font-inter text-center text-[12px] font-medium uppercase tracking-wide">
                  Price
                </span>

                <span className="font-inter text-center text-[12px] font-medium uppercase tracking-wide">
                  Quantity
                </span>

                <span className="font-inter text-center text-[12px] font-medium uppercase tracking-wide">
                  Total
                </span>

                <span />
              </div>

              {items.map((item) => (
                <div
                  key={item.id}
                  className="
                    grid
                    grid-cols-1
                    gap-5
                    border-b
                    border-[#DCC3A5]
                    px-4
                    py-5
                    last:border-b-0
                    sm:grid-cols-[1fr_90px_125px_90px_32px]
                    sm:items-center
                    sm:gap-0
                  "
                >

                  <div className="flex gap-4">

                    {/* IMAGE */}
                    <div className="relative h-[105px] w-[105px] shrink-0 overflow-hidden rounded-md sm:h-[108px] sm:w-[108px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="108px"
                        className="object-cover"
                      />
                    </div>

                    {/* PRODUCT INFO */}
                    <div className="min-w-0 pr-2">

                      <h2 className="font-playfair text-[15px] font-semibold leading-tight sm:text-[16px]">
                        {item.name}
                      </h2>

                      <p className="font-inter mt-1.5 max-w-[230px] text-[10.5px] font-medium leading-[1.35] text-[#38251A] sm:text-[11px]">
                        {item.description}
                      </p>

                      <span className="font-inter mt-3 inline-flex rounded-md bg-[#E9D8C2] px-3 py-1.5 text-[10px] font-semibold text-[#6B4F3A]">
                        {item.size}
                      </span>

                    </div>
                  </div>

                  <div className="hidden items-center justify-center sm:flex">
                    <span className="font-inter text-[14px] font-semibold">
                      ₱{item.price}
                    </span>
                  </div>

                  <div className="flex items-center justify-between sm:justify-center">

                    <span className="font-inter text-[12px] font-medium sm:hidden">
                      Quantity
                    </span>

                    <div className="flex h-[36px] items-center overflow-hidden rounded-md border border-[#DCC3A5]">

                      <button
                        type="button"
                        aria-label={`Decrease ${item.name}`}
                        onClick={() =>
                          updateQuantity(item.id, -1)
                        }
                        className="flex h-full w-[36px] items-center justify-center transition hover:bg-[#E9D8C2]"
                      >
                        <Minus
                          size={15}
                          strokeWidth={1.8}
                        />
                      </button>

                      <span className="flex h-full w-[38px] items-center justify-center border-x border-[#DCC3A5] font-inter text-[13px] font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        aria-label={`Increase ${item.name}`}
                        onClick={() =>
                          updateQuantity(item.id, 1)
                        }
                        className="flex h-full w-[36px] items-center justify-center transition hover:bg-[#E9D8C2]"
                      >
                        <Plus
                          size={15}
                          strokeWidth={1.8}
                        />
                      </button>

                    </div>
                  </div>

                  <div className="hidden items-center justify-center sm:flex">
                    <span className="font-inter text-[14px] font-semibold">
                      ₱{item.price * item.quantity}
                    </span>
                  </div>
                  <div className="flex items-center justify-end sm:justify-center">

                    <button
                      type="button"
                      aria-label={`Remove ${item.name}`}
                      onClick={() =>
                        removeItem(item.id)
                      }
                      className="rounded-md p-1.5 transition hover:bg-[#E9D8C2]"
                    >
                      <DeleteIcon className="h-[22px] w-[22px] text-[#6B4F3A]" />
                    </button>

                  </div>

                </div>
              ))}
            </div>

            <aside className="rounded-lg border border-[#DCC3A5] p-6 sm:p-7">

              <h2 className="font-playfair text-[21px] font-semibold">
                Order Summary
              </h2>

              <div className="font-inter mt-7 flex items-center justify-between text-[13px]">
                <span>
                  Subtotal ({items.length} items)
                </span>

                <span className="font-semibold">
                  ₱{subtotal.toFixed(2)}
                </span>
              </div>

              <div className="font-inter mt-6 flex items-center justify-between text-[13px]">
                <span>
                  Delivery Fee
                </span>

                <span className="font-semibold">
                  {deliveryFee === 0
                    ? "FREE"
                    : `₱${deliveryFee.toFixed(2)}`}
                </span>
              </div>

              <div className="my-6 h-px bg-[#DCC3A5]" />
              
              <div className="flex items-center justify-between">

                <span className="font-playfair text-[18px] font-semibold">
                  Total
                </span>

                <span className="font-inter text-[19px] font-bold">
                  ₱{total.toFixed(2)}
                </span>

              </div>

              <Link
                href="/checkout"
                className="
                  font-inter
                  mt-6
                  flex
                  h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  bg-[#38251A]
                  text-[14px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#4A3324]
                "
              >
                Proceed to Checkout
                <ArrowRight
                  size={17}
                  strokeWidth={1.8}
                />
              </Link>

              <div className="mt-5 flex items-center gap-4 rounded-md bg-[#E9D8C2] px-4 py-4">

                <FreeDeliveryIcon
                  className="h-[32px] w-[32px] shrink-0 text-[#6B4F3A]"
                />

                <div>

                  <h3 className="font-inter text-[12px] font-bold">
                    Free Delivery
                  </h3>

                  <p className="font-inter mt-1 text-[10px] leading-[1.3] text-[#6B4F3A]">
                    For orders over ₱1,000.00
                  </p>

                </div>
              </div>

            </aside>
          </div>
        )}
      </section>
       <footer className="mt-60 bg-[#38251A] px-6 py-8 text-[#FFFDF8]">

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