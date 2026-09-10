"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown, Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

import Navbar from "@/src/components/Navbar";

import CardIcon from "@/src/components/icons/CardIcon";
import MobileIcon from "@/src/components/icons/MobileIcon";
import CashIcon from "@/src/components/icons/CashIcon";

import VisaIcon from "@/src/components/icons/VisaIcon";
import MastercardIcon from "@/src/components/icons/MastercardIcon";
import JcbIcon from "@/src/components/icons/JcbIcon";
import AmericanExpressIcon from "@/src/components/icons/AmericanExpressIcon";

import GcashIcon from "@/src/components/icons/GcashIcon";
import CashOnDeliveryIcon from "@/src/components/icons/CashOnDeliveryIcon";

type PaymentMethod = "card" | "gcash" | "cod";

type CartItem = {
  id: number;
  name: string;
  size: string;
  price: number;
  image: string;
  quantity: number;
};

const initialItems: CartItem[] = [
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

export default function CheckoutPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("card");

  const deliveryFee = 50;

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

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const finalDeliveryFee =
    subtotal >= 1000 ? 0 : deliveryFee;

  const total = subtotal + finalDeliveryFee;

  return (
    <main className="min-h-screen bg-[#F7EEDF] text-[#38251A]">
      <Navbar />

      <section className="mx-auto w-full max-w-[1500px] px-5 py-9 sm:px-8 lg:px-10 lg:py-10">

        {/* HEADER */}
        <div>
          <h1 className="font-playfair text-[30px] font-semibold leading-none sm:text-[34px]">
            Checkout
          </h1>

          <p className="font-inter mt-2 text-[12px] text-[#6B4F3A]">
            Complete your order and enjoy your coffee
          </p>
        </div>

        <div className="mt-5 flex max-w-[440px] items-center">

          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#38251A] text-[10px] text-white">
              1
            </div>

            <span className="font-inter text-[9px] font-semibold">
              Shipping
            </span>
          </div>

          <div className="mx-2 h-px w-12 bg-[#D8C5AF] sm:w-20" />

          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#D8C5AF] text-[10px] text-[#D8C5AF]">
              2
            </div>

            <span className="font-inter text-[9px] text-[#D8C5AF]">
              Payment
            </span>
          </div>

          <div className="mx-2 h-px w-12 bg-[#D8C5AF] sm:w-20" />

          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#D8C5AF] text-[10px] text-[#D8C5AF]">
              3
            </div>

            <span className="font-inter text-[9px] text-[#D8C5AF]">
              Confirmation
            </span>
          </div>

        </div>


        <div className="mt-4 grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_280px]">

        
          <section className="rounded-[5px] border border-[#D8C5AF] bg-[#F7EEDF] p-4 sm:p-5">

            <div>
              <h2 className="font-playfair text-[16px] font-semibold">
                Shipping Information
              </h2>

              <p className="font-inter mt-0.5 text-[9px]">
                Enter your delivery details
              </p>
            </div>


            <div className="mt-5 space-y-3">

              <div>
                <label
                  htmlFor="fullName"
                  className="font-inter mb-1 block text-[9px] font-semibold"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Juan Dela Cruz"
                  className="font-inter h-8 w-full rounded-[5px] border border-[#D8C5AF] bg-transparent px-3 text-[9px] outline-none placeholder:text-[#6B4F3A] focus:border-[#6B4F3A]"
                />
              </div>


              <div className="grid gap-2 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="email"
                    className="font-inter mb-1 block text-[9px] font-semibold"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="font-inter h-8 w-full rounded-[5px] border border-[#D8C5AF] bg-transparent px-3 text-[9px] outline-none placeholder:text-[#6B4F3A] focus:border-[#6B4F3A]"
                  />
                </div>


                <div>
                  <label
                    htmlFor="phone"
                    className="font-inter mb-1 block text-[9px] font-semibold"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="09123456789"
                    className="font-inter h-8 w-full rounded-[5px] border border-[#D8C5AF] bg-transparent px-3 text-[9px] outline-none placeholder:text-[#6B4F3A] focus:border-[#6B4F3A]"
                  />
                </div>

              </div>

              <div>
                <label
                  htmlFor="address"
                  className="font-inter mb-1 block text-[9px] font-semibold"
                >
                  Delivery Address
                </label>

                <input
                  id="address"
                  type="text"
                  placeholder="Juan Dela Cruz"
                  className="font-inter h-8 w-full rounded-[5px] border border-[#D8C5AF] bg-transparent px-3 text-[9px] outline-none placeholder:text-[#6B4F3A] focus:border-[#6B4F3A]"
                />
              </div>


              <div className="grid gap-2 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="barangay"
                    className="font-inter mb-1 block text-[9px] font-semibold"
                  >
                    Barangay
                  </label>

                  <input
                    id="barangay"
                    type="text"
                    placeholder="Barangay"
                    className="font-inter h-8 w-full rounded-[5px] border border-[#D8C5AF] bg-transparent px-3 text-[9px] outline-none placeholder:text-[#6B4F3A] focus:border-[#6B4F3A]"
                  />
                </div>


                <div>
                  <label
                    htmlFor="city"
                    className="font-inter mb-1 block text-[9px] font-semibold"
                  >
                    City
                  </label>

                  <div className="relative">

                    <select
                      id="city"
                      defaultValue=""
                      className="font-inter h-8 w-full appearance-none rounded-[5px] border border-[#D8C5AF] bg-transparent px-3 pr-7 text-[9px] text-[#6B4F3A] outline-none focus:border-[#6B4F3A]"
                    >
                      <option value="" disabled>
                        Select City
                      </option>

                      <option value="pasay">Pasay</option>
                      <option value="paranaque">Parañaque</option>
                      <option value="makati">Makati</option>
                      <option value="taguig">Taguig</option>
                      <option value="manila">Manila</option>
                    </select>

                    <ChevronDown
                      size={12}
                      className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
                    />

                  </div>
                </div>

              </div>


              <div className="grid gap-2 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="province"
                    className="font-inter mb-1 block text-[9px] font-semibold"
                  >
                    Province
                  </label>

                  <div className="relative">

                    <select
                      id="province"
                      defaultValue=""
                      className="font-inter h-8 w-full appearance-none rounded-[5px] border border-[#D8C5AF] bg-transparent px-3 pr-7 text-[9px] text-[#6B4F3A] outline-none focus:border-[#6B4F3A]"
                    >
                      <option value="" disabled>
                        Select Province
                      </option>

                      <option value="metro-manila">
                        Metro Manila
                      </option>

                      <option value="cavite">
                        Cavite
                      </option>

                      <option value="laguna">
                        Laguna
                      </option>

                      <option value="rizal">
                        Rizal
                      </option>
                    </select>

                    <ChevronDown
                      size={12}
                      className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
                    />

                  </div>
                </div>


                <div>
                  <label
                    htmlFor="postal"
                    className="font-inter mb-1 block text-[9px] font-semibold"
                  >
                    Postal Code
                  </label>

                  <input
                    id="postal"
                    type="text"
                    placeholder="Ex. 1000"
                    className="font-inter h-8 w-full rounded-[5px] border border-[#D8C5AF] bg-transparent px-3 text-[9px] outline-none placeholder:text-[#6B4F3A] focus:border-[#6B4F3A]"
                  />
                </div>

              </div>


              <div>

                <label
                  htmlFor="instructions"
                  className="font-inter mb-1 block text-[9px] font-semibold"
                >
                  Delivery Instructions (Optional)
                </label>

                <textarea
                  id="instructions"
                  rows={4}
                  placeholder="eg. Near the main gate, call when you arrive etc."
                  className="font-inter min-h-[80px] w-full resize-none rounded-[5px] border border-[#D8C5AF] bg-transparent px-3 py-2 text-[9px] outline-none placeholder:text-[#6B4F3A] focus:border-[#6B4F3A]"
                />

              </div>



              <div className="flex justify-center pt-2">

                <button
                  type="button"
                  className="font-inter flex h-[30px] w-[195px] items-center justify-center gap-2 rounded-[5px] bg-[#38251A] text-[9px] font-semibold text-white transition hover:bg-[#4A3324]"
                >
                  Continue to Payment

                  <ArrowRight
                    size={13}
                    strokeWidth={1.8}
                  />
                </button>

              </div>

            </div>
          </section>


          <div className="space-y-3">


            <section className="rounded-[5px] border border-[#D8C5AF] bg-[#F7EEDF] p-3">

              <h2 className="font-playfair text-[14px] font-semibold">
                Order Summary
              </h2>


              <div className="mt-3">

                {items.map((item, index) => (

                  <div
                    key={item.id}
                    className={`py-2 ${
                      index !== items.length - 1
                        ? "border-b border-[#D8C5AF]"
                        : ""
                    }`}
                  >

                    <div className="flex gap-2">

                      <div className="relative h-[60px] w-[64px] shrink-0 overflow-hidden rounded-[4px]">

                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />

                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="flex items-start justify-between gap-2">

                          <div className="min-w-0">

                            <h3 className="font-playfair truncate text-[10px] font-semibold">
                              {item.name}
                            </h3>

                            <p className="font-inter mt-0.5 text-[8px]">
                              {item.size}
                            </p>

                          </div>


                          <span className="font-inter whitespace-nowrap text-[10px] font-semibold">
                            ₱{item.price}
                          </span>

                        </div>


                      
                        <div className="mt-3 flex items-center justify-end gap-2">

                          <div className="flex h-[25px] items-center rounded-[5px] border border-[#D8C5AF]">

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, -1)
                              }
                              className="flex h-full w-7 items-center justify-center transition hover:bg-[#E9D8C2]"
                              aria-label={`Decrease ${item.name}`}
                            >
                              <Minus size={11} />
                            </button>


                            <span className="font-inter flex h-full w-6 items-center justify-center border-x border-[#D8C5AF] text-[9px]">
                              {item.quantity}
                            </span>


                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, 1)
                              }
                              className="flex h-full w-7 items-center justify-center transition hover:bg-[#E9D8C2]"
                              aria-label={`Increase ${item.name}`}
                            >
                              <Plus size={11} />
                            </button>

                          </div>


                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="flex h-6 w-5 items-center justify-center text-[#6B4F3A] transition hover:text-[#38251A]"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2
                              size={12}
                              strokeWidth={1.6}
                            />
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>


              <div className="border-t border-[#D8C5AF] pt-2">

                <div className="flex items-center justify-between">

                  <span className="font-inter text-[9px]">
                    Subtotal ({totalItems} items)
                  </span>

                  <span className="font-inter text-[9px]">
                    ₱{subtotal.toFixed(2)}
                  </span>

                </div>


                <div className="mt-2 flex items-center justify-between">

                  <span className="font-inter text-[9px]">
                    Delivery Fee
                  </span>

                  <span className="font-inter text-[9px]">
                    ₱{finalDeliveryFee.toFixed(2)}
                  </span>

                </div>


                <div className="mt-2 border-t border-[#D8C5AF] pt-2">

                  <div className="flex items-center justify-between">

                    <span className="font-playfair text-[15px] font-semibold">
                      Total
                    </span>

                    <span className="font-inter text-[12px] font-bold">
                      ₱{total.toFixed(2)}
                    </span>

                  </div>

                </div>

              </div>

            </section>



            <section className="rounded-[5px] border border-[#D8C5AF] bg-[#F7EEDF] p-3">

              <h2 className="font-playfair text-[14px] font-semibold">
                Payment Method
              </h2>

              <p className="font-inter mt-0.5 text-[8px] text-[#38251A]">
                Choose your payment method
              </p>


              <div className="mt-3 space-y-1.5">

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`flex min-h-[58px] w-full items-center overflow-hidden rounded-[5px] border px-2 text-left transition ${
                    paymentMethod === "card"
                      ? "border-[#D8C5AF] bg-[#F1E4D0]"
                      : "border-[#D8C5AF] bg-transparent hover:bg-[#F4E8D7]"
                  }`}
                >

                  <span
                    className={`flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border ${
                      paymentMethod === "card"
                        ? "border-[#6B4F3A]"
                        : "border-[#D8C5AF]"
                    }`}
                  >
                    {paymentMethod === "card" && (
                      <span className="h-[9px] w-[9px] rounded-full bg-[#6B4F3A]" />
                    )}
                  </span>


                  <div className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center">
                    <CardIcon className="h-[23px] w-[23px]" />
                  </div>


                  <div className="ml-2 w-[62px] shrink-0">

                    <p
                      className="font-inter font-semibold text-[#38251A]"
                      style={{
                        fontSize: "8px",
                        lineHeight: "1.2",
                      }}
                    >
                      Credit/Debit
                      <br />
                      Card
                    </p>

                  </div>


                  <div className="ml-auto flex min-w-0 flex-1 items-center justify-end gap-[2px] overflow-hidden">

                    {/* VISA */}
                    <div className="flex h-5 min-w-0 flex-1 items-center justify-center overflow-hidden">
                      <VisaIcon
                        className="!h-auto !w-[23px]"
                      />
                    </div>


                    <div className="flex h-5 min-w-0 flex-1 items-center justify-center overflow-hidden">
                      <MastercardIcon
                        className="!h-auto !w-[23px]"
                      />
                    </div>


                    <div className="flex h-5 min-w-0 flex-1 items-center justify-center overflow-hidden">
                      <JcbIcon
                        className="!h-auto !w-[23px]"
                      />
                    </div>

                    <div className="flex h-5 min-w-0 flex-1 items-center justify-center overflow-hidden">
                      <AmericanExpressIcon
                        className="!h-auto !w-[25px]"
                      />
                    </div>

                  </div>

                </button>


                <button
                  type="button"
                  onClick={() => setPaymentMethod("gcash")}
                  className={`flex min-h-[51px] w-full items-center rounded-[5px] border px-2 py-2 text-left transition ${
                    paymentMethod === "gcash"
                      ? "border-[#D8C5AF] bg-[#F1E4D0]"
                      : "border-[#D8C5AF] bg-transparent hover:bg-[#F4E8D7]"
                  }`}
                >

                  
                  <span
                    className={`flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border ${
                      paymentMethod === "gcash"
                        ? "border-[#6B4F3A]"
                        : "border-[#D8C5AF]"
                    }`}
                  >
                    {paymentMethod === "gcash" && (
                      <span className="h-[9px] w-[9px] rounded-full bg-[#6B4F3A]" />
                    )}
                  </span>



                  <div className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center">
                    <MobileIcon className="h-[22px] w-[22px]" />
                  </div>


                  <div className="ml-2 min-w-0 flex-1">

                    <p className="font-inter text-[8px] font-semibold">
                      GCash
                    </p>

                    <p className="font-inter mt-0.5 text-[7px] leading-tight text-[#6B4F3A]">
                      Pay using your GCash account
                    </p>

                  </div>


                  <div className="flex h-7 w-9 shrink-0 items-center justify-center overflow-hidden">
                    <GcashIcon className="!h-auto !w-[24px]" />
                  </div>

                </button>


                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex min-h-[51px] w-full items-center rounded-[5px] border px-2 py-2 text-left transition ${
                    paymentMethod === "cod"
                      ? "border-[#D8C5AF] bg-[#F1E4D0]"
                      : "border-[#D8C5AF] bg-transparent hover:bg-[#F4E8D7]"
                  }`}
                >

                  <span
                    className={`flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border ${
                      paymentMethod === "cod"
                        ? "border-[#6B4F3A]"
                        : "border-[#D8C5AF]"
                    }`}
                  >
                    {paymentMethod === "cod" && (
                      <span className="h-[9px] w-[9px] rounded-full bg-[#6B4F3A]" />
                    )}
                  </span>


                  <div className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center">
                    <CashIcon className="h-[22px] w-[22px]" />
                  </div>


                  {/* TEXT */}
                  <div className="ml-2 min-w-0 flex-1">

                    <p className="font-inter text-[8px] font-semibold">
                      Cash on Delivery
                    </p>

                    <p className="font-inter mt-0.5 text-[7px] leading-tight text-[#6B4F3A]">
                      Pay when you receive your order
                    </p>

                  </div>


                  <div className="flex h-7 w-9 shrink-0 items-center justify-center overflow-hidden">
                    <CashOnDeliveryIcon
                      className="!h-auto !w-[25px]"
                    />
                  </div>

                </button>

              </div>


              <div className="mt-2 flex min-h-[52px] items-center gap-2 rounded-[5px] bg-[#E4CEB0] px-2.5 py-2.5">

                <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#6B4F3A]">

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 7h11v10H3z" />
                    <path d="M14 10h4l3 3v4h-7z" />
                    <circle cx="7" cy="19" r="2" />
                    <circle cx="18" cy="19" r="2" />
                  </svg>

                </div>

                <div>

                  <p className="font-inter text-[8px] font-semibold">
                    Free Delivery
                  </p>

                  <p className="font-inter mt-0.5 text-[7px] text-[#6B4F3A]">
                    For orders over ₱1000.00
                  </p>

                </div>

              </div>

            </section>

          </div>

        </div>

      </section>
    </main>
  );
}