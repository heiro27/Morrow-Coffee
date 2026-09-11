"use client";

import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from "lucide-react";
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

      <section className="mx-auto w-full max-w-[1500px] px-5 py-10 sm:px-8 lg:px-10 lg:py-12">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div>
          <h1 className="font-playfair text-[36px] font-semibold leading-none tracking-[-0.02em] sm:text-[40px]">
            Checkout
          </h1>

          <p className="font-inter mt-3 text-[14px] text-[#6B4F3A]">
            Complete your order and enjoy your coffee
          </p>
        </div>

        {/* =====================================================
            CHECKOUT STEPS
        ====================================================== */}

        <div className="mt-7 flex max-w-[520px] items-center">

          {/* STEP 1 */}

          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#38251A] text-[12px] text-white">
              1
            </div>

            <span className="font-inter text-[11px] font-semibold">
              Shipping
            </span>
          </div>

          <div className="mx-3 h-px w-12 bg-[#D8C5AF] sm:w-24" />

          {/* STEP 2 */}

          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D8C5AF] text-[12px] text-[#D8C5AF]">
              2
            </div>

            <span className="font-inter text-[11px] text-[#D8C5AF]">
              Payment
            </span>
          </div>

          <div className="mx-3 h-px w-12 bg-[#D8C5AF] sm:w-24" />

          {/* STEP 3 */}

          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D8C5AF] text-[12px] text-[#D8C5AF]">
              3
            </div>

            <span className="font-inter text-[11px] text-[#D8C5AF]">
              Confirmation
            </span>
          </div>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="mt-6 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_390px]">

          {/* ===================================================
              SHIPPING INFORMATION
          ==================================================== */}

          <section className="rounded-[7px] border border-[#D8C5AF] bg-[#F7EEDF] p-6 sm:p-7">

            <div>
              <h2 className="font-playfair text-[21px] font-semibold">
                Shipping Information
              </h2>

              <p className="font-inter mt-1.5 text-[12px] text-[#6B4F3A]">
                Enter your delivery details
              </p>
            </div>

            <div className="mt-7 space-y-5">

              {/* FULL NAME */}

              <div>
                <label
                  htmlFor="fullName"
                  className="font-inter mb-2 block text-[12px] font-semibold"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Juan Dela Cruz"
                  className="font-inter h-12 w-full rounded-[6px] border border-[#D8C5AF] bg-transparent px-4 text-[12px] outline-none placeholder:text-[#6B4F3A] focus:border-[#6B4F3A]"
                />
              </div>

              {/* EMAIL + PHONE */}

              <div className="grid gap-4 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="email"
                    className="font-inter mb-2 block text-[12px] font-semibold"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="font-inter h-12 w-full rounded-[6px] border border-[#D8C5AF] bg-transparent px-4 text-[12px] outline-none placeholder:text-[#6B4F3A] focus:border-[#6B4F3A]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="font-inter mb-2 block text-[12px] font-semibold"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="09123456789"
                    className="font-inter h-12 w-full rounded-[6px] border border-[#D8C5AF] bg-transparent px-4 text-[12px] outline-none placeholder:text-[#6B4F3A] focus:border-[#6B4F3A]"
                  />
                </div>

              </div>

              {/* ADDRESS */}

              <div>
                <label
                  htmlFor="address"
                  className="font-inter mb-2 block text-[12px] font-semibold"
                >
                  Delivery Address
                </label>

                <input
                  id="address"
                  type="text"
                  placeholder="House / Unit No., Street"
                  className="font-inter h-12 w-full rounded-[6px] border border-[#D8C5AF] bg-transparent px-4 text-[12px] outline-none placeholder:text-[#6B4F3A] focus:border-[#6B4F3A]"
                />
              </div>

              {/* BARANGAY + CITY */}

              <div className="grid gap-4 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="barangay"
                    className="font-inter mb-2 block text-[12px] font-semibold"
                  >
                    Barangay
                  </label>

                  <input
                    id="barangay"
                    type="text"
                    placeholder="Barangay"
                    className="font-inter h-12 w-full rounded-[6px] border border-[#D8C5AF] bg-transparent px-4 text-[12px] outline-none placeholder:text-[#6B4F3A] focus:border-[#6B4F3A]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="font-inter mb-2 block text-[12px] font-semibold"
                  >
                    City
                  </label>

                  <div className="relative">

                    <select
                      id="city"
                      defaultValue=""
                      className="font-inter h-12 w-full appearance-none rounded-[6px] border border-[#D8C5AF] bg-transparent px-4 pr-10 text-[12px] text-[#6B4F3A] outline-none focus:border-[#6B4F3A]"
                    >
                      <option value="" disabled>
                        Select City
                      </option>

                      <option value="pasay">
                        Pasay
                      </option>

                      <option value="paranaque">
                        Parañaque
                      </option>

                      <option value="makati">
                        Makati
                      </option>

                      <option value="taguig">
                        Taguig
                      </option>

                      <option value="manila">
                        Manila
                      </option>
                    </select>

                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                    />

                  </div>
                </div>

              </div>

              {/* PROVINCE + POSTAL */}

              <div className="grid gap-4 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="province"
                    className="font-inter mb-2 block text-[12px] font-semibold"
                  >
                    Province
                  </label>

                  <div className="relative">

                    <select
                      id="province"
                      defaultValue=""
                      className="font-inter h-12 w-full appearance-none rounded-[6px] border border-[#D8C5AF] bg-transparent px-4 pr-10 text-[12px] text-[#6B4F3A] outline-none focus:border-[#6B4F3A]"
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
                      size={16}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                    />

                  </div>
                </div>

                <div>
                  <label
                    htmlFor="postal"
                    className="font-inter mb-2 block text-[12px] font-semibold"
                  >
                    Postal Code
                  </label>

                  <input
                    id="postal"
                    type="text"
                    placeholder="Ex. 1000"
                    className="font-inter h-12 w-full rounded-[6px] border border-[#D8C5AF] bg-transparent px-4 text-[12px] outline-none placeholder:text-[#6B4F3A] focus:border-[#6B4F3A]"
                  />
                </div>

              </div>

              {/* INSTRUCTIONS */}

              <div>
                <label
                  htmlFor="instructions"
                  className="font-inter mb-2 block text-[12px] font-semibold"
                >
                  Delivery Instructions (Optional)
                </label>

                <textarea
                  id="instructions"
                  rows={4}
                  placeholder="e.g. Near the main gate, call when you arrive, etc."
                  className="font-inter min-h-[110px] w-full resize-none rounded-[6px] border border-[#D8C5AF] bg-transparent px-4 py-3 text-[12px] outline-none placeholder:text-[#6B4F3A] focus:border-[#6B4F3A]"
                />
              </div>

              {/* CONTINUE BUTTON */}

              <div className="flex justify-center pt-3">

                <button
                  type="button"
                  className="font-inter flex h-[44px] w-[235px] items-center justify-center gap-2 rounded-[6px] bg-[#38251A] text-[12px] font-semibold text-white transition hover:bg-[#4A3324]"
                >
                  Continue to Payment

                  <ArrowRight
                    size={16}
                    strokeWidth={1.8}
                  />
                </button>

              </div>

            </div>
          </section>

          {/* ===================================================
              RIGHT COLUMN
          ==================================================== */}

          <div className="space-y-5">

            {/* =================================================
                ORDER SUMMARY
            ================================================== */}

            <section className="rounded-[7px] border border-[#D8C5AF] bg-[#F7EEDF] p-5">

              <h2 className="font-playfair text-[19px] font-semibold">
                Order Summary
              </h2>

              <div className="mt-5">

                {items.map((item, index) => (

                  <div
                    key={item.id}
                    className={`py-4 ${
                      index !== items.length - 1
                        ? "border-b border-[#D8C5AF]"
                        : ""
                    }`}
                  >

                    <div className="flex gap-4">

                      {/* PRODUCT IMAGE */}

                      <div className="relative h-[82px] w-[82px] shrink-0 overflow-hidden rounded-[6px]">

                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="82px"
                          className="object-cover"
                        />

                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="flex items-start justify-between gap-3">

                          <div className="min-w-0">

                            <h3 className="font-playfair truncate text-[13px] font-semibold">
                              {item.name}
                            </h3>

                            <p className="font-inter mt-1 text-[11px] text-[#6B4F3A]">
                              {item.size}
                            </p>

                          </div>

                          <span className="font-inter whitespace-nowrap text-[12px] font-semibold">
                            ₱{item.price}
                          </span>

                        </div>

                        {/* QUANTITY */}

                        <div className="mt-4 flex items-center justify-end gap-3">

                          <div className="flex h-[32px] items-center rounded-[6px] border border-[#D8C5AF]">

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, -1)
                              }
                              className="flex h-full w-9 items-center justify-center transition hover:bg-[#E9D8C2]"
                              aria-label={`Decrease ${item.name}`}
                            >
                              <Minus size={13} />
                            </button>

                            <span className="font-inter flex h-full w-8 items-center justify-center border-x border-[#D8C5AF] text-[11px]">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, 1)
                              }
                              className="flex h-full w-9 items-center justify-center transition hover:bg-[#E9D8C2]"
                              aria-label={`Increase ${item.name}`}
                            >
                              <Plus size={13} />
                            </button>

                          </div>

                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="flex h-8 w-7 items-center justify-center text-[#6B4F3A] transition hover:text-[#38251A]"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2
                              size={15}
                              strokeWidth={1.6}
                            />
                          </button>

                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* TOTALS */}

              <div className="border-t border-[#D8C5AF] pt-4">

                <div className="flex items-center justify-between">

                  <span className="font-inter text-[11px]">
                    Subtotal ({totalItems} items)
                  </span>

                  <span className="font-inter text-[11px]">
                    ₱{subtotal.toFixed(2)}
                  </span>

                </div>

                <div className="mt-3 flex items-center justify-between">

                  <span className="font-inter text-[11px]">
                    Delivery Fee
                  </span>

                  <span className="font-inter text-[11px]">
                    ₱{finalDeliveryFee.toFixed(2)}
                  </span>

                </div>

                <div className="mt-4 border-t border-[#D8C5AF] pt-4">

                  <div className="flex items-center justify-between">

                    <span className="font-playfair text-[20px] font-semibold">
                      Total
                    </span>

                    <span className="font-inter text-[16px] font-bold">
                      ₱{total.toFixed(2)}
                    </span>

                  </div>

                </div>

              </div>

            </section>

            {/* =================================================
                PAYMENT METHOD
            ================================================== */}

            <section className="rounded-[7px] border border-[#D8C5AF] bg-[#F7EEDF] p-5">

              <h2 className="font-playfair text-[19px] font-semibold">
                Payment Method
              </h2>

              <p className="font-inter mt-1.5 text-[11px] text-[#38251A]">
                Choose your payment method
              </p>

              <div className="mt-5 space-y-3">

                {/* =================================================
                    CARD
                ================================================== */}

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`flex min-h-[78px] w-full items-center overflow-hidden rounded-[7px] border px-3.5 text-left transition ${
                    paymentMethod === "card"
                      ? "border-[#D8C5AF] bg-[#F1E4D0]"
                      : "border-[#D8C5AF] bg-transparent hover:bg-[#F4E8D7]"
                  }`}
                >

                  {/* RADIO */}

                  <span
                    className={`flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full border ${
                      paymentMethod === "card"
                        ? "border-[#6B4F3A]"
                        : "border-[#D8C5AF]"
                    }`}
                  >
                    {paymentMethod === "card" && (
                      <span className="h-[11px] w-[11px] rounded-full bg-[#6B4F3A]" />
                    )}
                  </span>

                  {/* CARD ICON */}

                  <div className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center">
                    <CardIcon className="h-[31px] w-[31px]" />
                  </div>

                  {/* TEXT */}

                  <div className="ml-3 w-[75px] shrink-0">

                    <p className="font-inter text-[11px] font-semibold leading-[1.2] text-[#38251A]">
                      Credit/Debit
                      <br />
                      Card
                    </p>

                  </div>

                  {/* CARD LOGOS */}

                  <div className="ml-auto flex min-w-0 flex-1 items-center justify-end gap-1.5 overflow-hidden">

                    <div className="flex h-8 min-w-0 flex-1 items-center justify-center">
                      <VisaIcon className="!h-auto !w-[34px]" />
                    </div>

                    <div className="flex h-8 min-w-0 flex-1 items-center justify-center">
                      <MastercardIcon className="!h-auto !w-[34px]" />
                    </div>

                    <div className="flex h-8 min-w-0 flex-1 items-center justify-center">
                      <JcbIcon className="!h-auto !w-[34px]" />
                    </div>

                    <div className="flex h-8 min-w-0 flex-1 items-center justify-center">
                      <AmericanExpressIcon className="!h-auto !w-[37px]" />
                    </div>

                  </div>

                </button>

                {/* =================================================
                    GCASH
                ================================================== */}

                <button
                  type="button"
                  onClick={() => setPaymentMethod("gcash")}
                  className={`flex min-h-[68px] w-full items-center rounded-[7px] border px-3.5 py-2.5 text-left transition ${
                    paymentMethod === "gcash"
                      ? "border-[#D8C5AF] bg-[#F1E4D0]"
                      : "border-[#D8C5AF] bg-transparent hover:bg-[#F4E8D7]"
                  }`}
                >

                  {/* RADIO */}

                  <span
                    className={`flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full border ${
                      paymentMethod === "gcash"
                        ? "border-[#6B4F3A]"
                        : "border-[#D8C5AF]"
                    }`}
                  >
                    {paymentMethod === "gcash" && (
                      <span className="h-[11px] w-[11px] rounded-full bg-[#6B4F3A]" />
                    )}
                  </span>

                  {/* MOBILE ICON */}

                  <div className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center">
                    <MobileIcon className="h-[28px] w-[28px]" />
                  </div>

                  {/* TEXT */}

                  <div className="ml-3 min-w-0 flex-1">

                    <p className="font-inter text-[11px] font-semibold">
                      GCash
                    </p>

                    <p className="font-inter mt-1 text-[9px] leading-tight text-[#6B4F3A]">
                      Pay using your GCash account
                    </p>

                  </div>

                  {/* GCASH LOGO */}

                  <div className="flex h-9 w-12 shrink-0 items-center justify-center">

                    <GcashIcon className="!h-auto !w-[32px]" />

                  </div>

                </button>

                {/* =================================================
                    CASH ON DELIVERY
                ================================================== */}

                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex min-h-[68px] w-full items-center rounded-[7px] border px-3.5 py-2.5 text-left transition ${
                    paymentMethod === "cod"
                      ? "border-[#D8C5AF] bg-[#F1E4D0]"
                      : "border-[#D8C5AF] bg-transparent hover:bg-[#F4E8D7]"
                  }`}
                >

                  {/* RADIO */}

                  <span
                    className={`flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full border ${
                      paymentMethod === "cod"
                        ? "border-[#6B4F3A]"
                        : "border-[#D8C5AF]"
                    }`}
                  >
                    {paymentMethod === "cod" && (
                      <span className="h-[11px] w-[11px] rounded-full bg-[#6B4F3A]" />
                    )}
                  </span>

                  {/* CASH ICON */}

                  <div className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center">
                    <CashIcon className="h-[28px] w-[28px]" />
                  </div>

                  {/* TEXT */}

                  <div className="ml-3 min-w-0 flex-1">

                    <p className="font-inter text-[11px] font-semibold">
                      Cash on Delivery
                    </p>

                    <p className="font-inter mt-1 text-[9px] leading-tight text-[#6B4F3A]">
                      Pay when you receive your order
                    </p>

                  </div>

                  {/* COD LOGO */}

                  <div className="flex h-9 w-12 shrink-0 items-center justify-center">

                    <CashOnDeliveryIcon
                      className="!h-auto !w-[32px]"
                    />

                  </div>

                </button>

              </div>

              {/* =================================================
                  FREE DELIVERY
              ================================================== */}

              <div className="mt-4 flex min-h-[65px] items-center gap-3 rounded-[7px] bg-[#E4CEB0] px-3.5 py-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center text-[#6B4F3A]">

                  <svg
                    width="25"
                    height="25"
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

                  <p className="font-inter text-[11px] font-semibold">
                    Free Delivery
                  </p>

                  <p className="font-inter mt-1 text-[9px] text-[#6B4F3A]">
                    For orders over ₱1000.00
                  </p>

                </div>

              </div>

            </section>

          </div>
        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}

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