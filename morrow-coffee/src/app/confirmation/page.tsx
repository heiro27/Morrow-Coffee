"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Home,
  Minus,
  Plus,
  Trash2,
  Mail,
  Lock,
  ShoppingBag
} from "lucide-react";

import Navbar from "@/src/components/Navbar";
import OrderDateIcon from "@/src/components/icons/OrderDateIcon";
import CardIcon from "@/src/components/icons/CardIcon";
import CoffeeIcon from "@/src/components/icons/CoffeeIcon";

type CartItem = {
  id: number;
  name: string;
  size: string;
  price: number;
  image: string;
  quantity: number;
};

const items: CartItem[] = [
  {
    id: 1,
    name: "Spanish Latte",
    size: "Large",
    price: 150,
    image: "/images/spanish-latte.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Hot Caramel Macchiato",
    size: "Regular",
    price: 140,
    image: "/images/caramel-macchiato.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Cold Brew",
    size: "Large",
    price: 140,
    image: "/images/cold-brew.jpg",
    quantity: 1,
  },
];

const subtotal = items.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

const deliveryFee = 50;
const total = subtotal + deliveryFee;

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-[#F7EEDF] text-[#38251A]">
      <Navbar />

      <section className="mx-auto w-full max-w-[1500px] px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-16">

          <div className="flex flex-col items-center">

            <div className="flex h-[170px] w-[170px] items-center justify-center rounded-full bg-[#38251A]">
              <Check
                size={90}
                strokeWidth={2}
                className="text-[#FFFDF8]"
              />
            </div>

            <h1 className="font-playfair mt-6 text-center text-[42px] font-semibold tracking-[-0.035em] sm:text-[46px]">
              Order Confirmed!
            </h1>

            <p className="font-inter mt-3 text-center text-[18px] font-semibold text-[#6B4F3A]">
              Thank you for choosing Morrow Coffee.
            </p>

            <p className="font-inter mt-4 text-center text-[13px] text-[#38251A]">
              Your order has been successfully placed and is now being prepared.
            </p>

            <p className="font-inter mt-1.5 text-center text-[13px] text-[#38251A]">
              We&apos;ll send you a confirmation email shortly.
            </p>

            <div className="mt-10 w-full max-w-[700px] rounded-md border border-[#B99F84] bg-[#F7EEDF]">
              <div className="grid grid-cols-2">

                <div className="border-r border-[#DCC3A5] px-9 py-6">
                  <p className="font-inter text-[11px] font-medium">
                    Order Number
                  </p>

                  <p className="font-inter mt-1.5 text-[18px] font-semibold">
                    #MC-2026-0487
                  </p>
                </div>

                <div className="flex items-center gap-4 px-8 py-6">
                  <Mail
                    size={31}
                    strokeWidth={1.7}
                    className="shrink-0 text-[#6B4F3A]"
                  />

                  <div>
                    <p className="font-inter text-[11px] font-medium">
                      Email Address
                    </p>

                    <p className="font-inter mt-1.5 text-[11px] text-[#38251A]">
                      juancruz@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-r border-[#DCC3A5] px-8 py-6">
                  <OrderDateIcon className="h-[34px] w-[37px] shrink-0" />

                  <div>
                    <p className="font-inter text-[11px] font-medium">
                      Order Date
                    </p>

                    <p className="font-inter mt-1.5 text-[11px] text-[#38251A]">
                      Sept 10, 2026, 11:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 px-8 py-6">
                  <CardIcon className="h-[34px] w-[35px] shrink-0" />

                  <div>
                    <p className="font-inter text-[11px] font-medium">
                      Payment Method
                    </p>

                    <p className="font-inter mt-1.5 text-[11px] leading-tight text-[#38251A]">
                      Credit/Debit Card
                      <br />
                      ••••3456
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <Link
              href="/"
              className="mt-5 flex h-[42px] w-full max-w-[420px] items-center justify-center gap-2 rounded-md bg-[#38251A] font-inter text-[11px] font-semibold text-[#FFFDF8] transition hover:bg-[#4A3324]"
            >
              <Home size={15} strokeWidth={2} />
              Back to Home
            </Link>

            <div className="mt-14 flex w-full max-w-[360px] items-center gap-4">
              <div className="h-px flex-1 bg-[#DCC3A5]" />

              <CoffeeIcon className="h-[32px] w-[35px]" />

              <div className="h-px flex-1 bg-[#DCC3A5]" />
            </div>

            <p className="font-inter mt-3 text-center text-[11px] font-medium">
              GOOD COFFEE BRINGS PEOPLE TOGETHER
            </p>

          </div>

          <aside className="rounded-md border border-[#DCC3A5] bg-[#F7EEDF] p-6">

            <h2 className="font-playfair text-[20px] font-semibold">
              Order Summary
            </h2>

            <div className="mt-5 space-y-4">

              {items.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-[#DCC3A5] pb-4"
                >
                  <div className="flex gap-4">

                    <div className="relative h-[90px] w-[96px] shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">

                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-playfair text-[13px] font-semibold leading-tight">
                            {item.name}
                          </p>

                          <p className="font-inter mt-1.5 text-[10px]">
                            {item.size}
                          </p>
                        </div>

                        <p className="font-inter whitespace-nowrap text-[14px] font-semibold">
                          ₱{item.price}
                        </p>
                      </div>

                      <div className="mt-4 flex justify-end">

                        <div className="flex h-[34px] items-center rounded-md border border-[#DCC3A5]">

                          <button
                            type="button"
                            className="flex h-full w-[34px] items-center justify-center"
                          >
                            <Minus
                              size={14}
                              strokeWidth={1.8}
                            />
                          </button>

                          <span className="font-inter flex h-full w-[30px] items-center justify-center border-x border-[#DCC3A5] text-[12px]">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            className="flex h-full w-[34px] items-center justify-center"
                          >
                            <Plus
                              size={14}
                              strokeWidth={1.8}
                            />
                          </button>

                        </div>

                        <button
                          type="button"
                          className="ml-2 flex h-[34px] w-[28px] items-center justify-center"
                        >
                          <Trash2
                            size={16}
                            strokeWidth={1.6}
                            className="text-[#6B4F3A]"
                          />
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>

            <div className="font-inter mt-5 flex items-center justify-between text-[11px]">
              <span>Subtotal ({items.length} items)</span>

              <span>
                ₱{subtotal.toFixed(2)}
              </span>
            </div>

            <div className="font-inter mt-4 flex items-center justify-between border-b border-[#DCC3A5] pb-4 text-[11px]">
              <span>Delivery Fee</span>

              <span>
                ₱{deliveryFee.toFixed(2)}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <h3 className="font-playfair text-[20px] font-semibold">
                Total
              </h3>

              <p className="font-inter text-[17px] font-semibold">
                ₱{total.toFixed(2)}
              </p>
            </div>

            <div className="mt-5 flex gap-3 rounded-md bg-[#E9D8C2] px-5 py-5">

              <Lock
                size={23}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0"
              />

              <div>
                <p className="font-inter text-[11px] font-semibold">
                  Your payment is secure
                </p>

                <p className="font-inter mt-1.5 text-[10px] leading-[1.35]">
                  We use industry-standard encryption to protect your
                  information.
                </p>
              </div>

            </div>

          </aside>
        </div>
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