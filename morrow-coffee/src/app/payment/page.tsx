"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  CreditCard,
  Lock,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { useState } from "react";

import Navbar from "@/src/components/Navbar";

import VisaIcon from "@/src/components/icons/VisaIcon";
import MastercardIcon from "@/src/components/icons/MastercardIcon";
import JcbIcon from "@/src/components/icons/JcbIcon";
import AmericanExpressIcon from "@/src/components/icons/AmericanExpressIcon";
import GcashIcon from "@/src/components/icons/GcashIcon";
import CashIcon from "@/src/components/icons/CashIcon";
import CashOnDeliveryIcon from "@/src/components/icons/CashOnDeliveryIcon";
import MobileIcon from "@/src/components/icons/MobileIcon";
import PaymentSecureIcon from "@/src/components/icons/PaymentSecureIcon";
import InfoIcon from "@/src/components/icons/InfoIcon";

type PaymentMethod = "card" | "gcash" | "cod";

type CardType =
  | "Visa"
  | "Mastercard"
  | "JCB"
  | "American Express";

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

export default function PaymentPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("card");

  const [cardType, setCardType] =
    useState<CardType>("Visa");

  const [isProcessing, setIsProcessing] =
    useState(false);

  const deliveryFee = 50;

  const updateQuantity = (
    id: number,
    amount: number
  ) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(
                1,
                item.quantity + amount
              ),
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== id
      )
    );
  };

  const subtotal = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const finalDeliveryFee =
    subtotal >= 1000 ? 0 : deliveryFee;

  const total = subtotal + finalDeliveryFee;

  const handlePayNow = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);

      alert(
        "Payment successful! Your Morrow Coffee order has been confirmed."
      );
    }, 900);
  };

  return (
    <main className="min-h-screen bg-[#F7EEDF] text-[#38251A]">
      <Navbar />

      <section className="mx-auto w-full max-w-[1500px] px-5 py-9 sm:px-8 lg:px-10 lg:py-11">
        <Link
          href="/checkout"
          className="font-inter mb-6 inline-flex items-center gap-2 text-[12px] font-medium text-[#6B4F3A] transition hover:text-[#38251A]"
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.8}
          />
          Back to Checkout
        </Link>

        <div>
          <h1 className="font-playfair text-[34px] font-semibold leading-none sm:text-[40px]">
            Payment
          </h1>

          <p className="font-inter mt-2 text-[13px] text-[#6B4F3A]">
            Choose your preferred payment method and
            complete your order
          </p>
        </div>

        {/* STEPPER */}
        <div className="mt-7 flex max-w-[560px] items-center">
          {/* SHIPPING */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#38251A] text-white">
              <Check
                size={15}
                strokeWidth={2}
              />
            </div>

            <span className="font-inter text-[11px] font-semibold">
              Shipping
            </span>
          </div>

          <div className="mx-3 h-px flex-1 bg-[#D8C5AF]" />

          {/* PAYMENT */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#38251A] text-[11px] text-white">
              2
            </div>

            <span className="font-inter text-[11px] font-semibold">
              Payment
            </span>
          </div>

          <div className="mx-3 h-px flex-1 bg-[#D8C5AF]" />

          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D8C5AF] text-[11px] text-[#D8C5AF]">
              3
            </div>

            <span className="font-inter text-[11px] text-[#D8C5AF]">
              Confirmation
            </span>
          </div>
        </div>

        <div className="mt-6 grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_400px]">
          <div className="space-y-6">
            <section className="rounded-[6px] border border-[#D8C5AF] bg-[#F7EEDF] p-6 sm:p-7">
              <div>
                <h2 className="font-playfair text-[21px] font-semibold">
                  Payment Method
                </h2>

                <p className="font-inter mt-1 text-[11px] text-[#38251A]">
                  Choose your payment method
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  onClick={() =>
                    setPaymentMethod("card")
                  }
                  className={`flex min-h-[82px] w-full items-center overflow-hidden rounded-[6px] border px-4 py-3 text-left transition ${
                    paymentMethod === "card"
                      ? "border-[#B99F84] bg-[#F1E4D0]"
                      : "border-[#D8C5AF] bg-transparent hover:bg-[#F4E8D7]"
                  }`}
                >
                  <span
                    className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border ${
                      paymentMethod === "card"
                        ? "border-[#6B4F3A]"
                        : "border-[#D8C5AF]"
                    }`}
                  >
                    {paymentMethod === "card" && (
                      <span className="h-[10px] w-[10px] rounded-full bg-[#6B4F3A]" />
                    )}
                  </span>

                  <div className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center">
                    <CreditCard
                      size={27}
                      strokeWidth={1.7}
                      className="text-[#6B4F3A]"
                    />
                  </div>

                  <div className="ml-4 w-[130px] shrink-0">
                    <p className="font-inter text-[11px] font-semibold leading-[1.3] text-[#38251A]">
                      Credit/Debit Card
                    </p>

                    <p className="font-inter mt-1 text-[9px] leading-tight text-[#6B4F3A]">
                      Visa, Mastercard, JCB, AMEX
                    </p>
                  </div>

                  <div className="ml-auto flex items-center gap-1.5">
                    <div className="flex h-8 w-8 items-center justify-center">
                      <VisaIcon className="!h-auto !w-[31px]" />
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center">
                      <MastercardIcon className="!h-auto !w-[31px]" />
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center">
                      <JcbIcon className="!h-auto !w-[31px]" />
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center">
                      <AmericanExpressIcon className="!h-auto !w-[33px]" />
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setPaymentMethod("gcash")
                  }
                  className={`flex min-h-[72px] w-full items-center rounded-[6px] border px-4 py-3 text-left transition ${
                    paymentMethod === "gcash"
                      ? "border-[#B99F84] bg-[#F1E4D0]"
                      : "border-[#D8C5AF] bg-transparent hover:bg-[#F4E8D7]"
                  }`}
                >
                  <span
                    className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border ${
                      paymentMethod === "gcash"
                        ? "border-[#6B4F3A]"
                        : "border-[#D8C5AF]"
                    }`}
                  >
                    {paymentMethod === "gcash" && (
                      <span className="h-[10px] w-[10px] rounded-full bg-[#6B4F3A]" />
                    )}
                  </span>

                  <div className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center">
                    <MobileIcon className="!h-[22px] !w-[22px] text-[#6B4F3A]" />
                  </div>

                  <div className="ml-4 flex-1">
                    <p className="font-inter text-[11px] font-semibold">
                      GCash
                    </p>

                    <p className="font-inter mt-1 text-[9px] leading-tight text-[#6B4F3A]">
                      Pay using your GCash account
                    </p>
                  </div>

                  <div className="flex h-9 w-14 shrink-0 items-center justify-center">
                    <GcashIcon className="!h-auto !w-[34px]" />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setPaymentMethod("cod")
                  }
                  className={`flex min-h-[72px] w-full items-center rounded-[6px] border px-4 py-3 text-left transition ${
                    paymentMethod === "cod"
                      ? "border-[#B99F84] bg-[#F1E4D0]"
                      : "border-[#D8C5AF] bg-transparent hover:bg-[#F4E8D7]"
                  }`}
                >
                  <span
                    className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border ${
                      paymentMethod === "cod"
                        ? "border-[#6B4F3A]"
                        : "border-[#D8C5AF]"
                    }`}
                  >
                    {paymentMethod === "cod" && (
                      <span className="h-[10px] w-[10px] rounded-full bg-[#6B4F3A]" />
                    )}
                  </span>

                  <div className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center">
                    <CashIcon className="!h-auto !w-[27px]" />
                  </div>

                  <div className="ml-4 flex-1">
                    <p className="font-inter text-[11px] font-semibold">
                      Cash on Delivery
                    </p>

                    <p className="font-inter mt-1 text-[9px] leading-tight text-[#6B4F3A]">
                      Pay when you receive your order
                    </p>
                  </div>

                  {/* RIGHT ICON */}
                  <div className="flex h-9 w-14 shrink-0 items-center justify-center">
                    <CashOnDeliveryIcon className="!h-auto !w-[27px]" />
                  </div>
                </button>
              </div>
            </section>

            {paymentMethod === "card" && (
              <section className="rounded-[6px] border border-[#D8C5AF] bg-[#F7EEDF] p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-playfair text-[21px] font-semibold">
                      Card Details
                    </h2>

                    <p className="font-inter mt-1 text-[11px] text-[#6B4F3A]">
                      Enter your card information
                    </p>
                  </div>

                  <Lock
                    size={20}
                    strokeWidth={1.6}
                    className="text-[#6B4F3A]"
                  />
                </div>

                <div className="mt-6">
                  <label className="font-inter mb-2 block text-[11px] font-semibold">
                    Card Type
                  </label>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setCardType("Visa")
                      }
                      className={`flex h-[48px] w-[78px] items-center justify-center rounded-[5px] border transition ${
                        cardType === "Visa"
                          ? "border-[#6B4F3A] bg-[#FFFDF8]"
                          : "border-[#D8C5AF] bg-transparent"
                      }`}
                    >
                      <VisaIcon className="!h-auto !w-[35px]" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setCardType("Mastercard")
                      }
                      className={`flex h-[48px] w-[78px] items-center justify-center rounded-[5px] border transition ${
                        cardType === "Mastercard"
                          ? "border-[#6B4F3A] bg-[#FFFDF8]"
                          : "border-[#D8C5AF] bg-transparent"
                      }`}
                    >
                      <MastercardIcon className="!h-auto !w-[35px]" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setCardType("JCB")
                      }
                      className={`flex h-[48px] w-[78px] items-center justify-center rounded-[5px] border transition ${
                        cardType === "JCB"
                          ? "border-[#6B4F3A] bg-[#FFFDF8]"
                          : "border-[#D8C5AF] bg-transparent"
                      }`}
                    >
                      <JcbIcon className="!h-auto !w-[35px]" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setCardType("American Express")
                      }
                      className={`flex h-[48px] w-[78px] items-center justify-center rounded-[5px] border transition ${
                        cardType === "American Express"
                          ? "border-[#6B4F3A] bg-[#FFFDF8]"
                          : "border-[#D8C5AF] bg-transparent"
                      }`}
                    >
                      <AmericanExpressIcon className="!h-auto !w-[36px]" />
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="cardNumber"
                    className="font-inter mb-2 block text-[11px] font-semibold"
                  >
                    Card Number
                  </label>

                  <div className="relative">
                    <input
                      id="cardNumber"
                      type="text"
                      inputMode="numeric"
                      autoComplete="cc-number"
                      placeholder="1234 5678 9012 3456"
                      className="font-inter h-[48px] w-full rounded-[5px] border border-[#D8C5AF] bg-transparent px-3 pr-12 text-[11px] outline-none placeholder:text-[#8A6A50] focus:border-[#6B4F3A]"
                    />

                    <CreditCard
                      size={19}
                      strokeWidth={1.5}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6B4F3A]"
                    />
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="expiration"
                      className="font-inter mb-2 block text-[11px] font-semibold"
                    >
                      Expiration Date
                    </label>

                    <input
                      id="expiration"
                      type="text"
                      inputMode="numeric"
                      autoComplete="cc-exp"
                      placeholder="MM / YY"
                      className="font-inter h-[48px] w-full rounded-[5px] border border-[#D8C5AF] bg-transparent px-3 text-[11px] outline-none placeholder:text-[#8A6A50] focus:border-[#6B4F3A]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cvv"
                      className="font-inter mb-2 block text-[11px] font-semibold"
                    >
                      CVV
                    </label>

                    <div className="relative">
                      <input
                        id="cvv"
                        type="password"
                        inputMode="numeric"
                        autoComplete="cc-csc"
                        maxLength={4}
                        placeholder="123"
                        className="font-inter h-[48px] w-full rounded-[5px] border border-[#D8C5AF] bg-transparent px-3 pr-11 text-[11px] outline-none placeholder:text-[#8A6A50] focus:border-[#6B4F3A]"
                      />

                      <InfoIcon
                        className="pointer-events-none absolute right-3 top-1/2 h-[19px] w-[19px] -translate-y-1/2"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="cardholder"
                    className="font-inter mb-2 block text-[11px] font-semibold"
                  >
                    Cardholder Name
                  </label>

                  <input
                    id="cardholder"
                    type="text"
                    autoComplete="cc-name"
                    placeholder="Juan Dela Cruz"
                    className="font-inter h-[48px] w-full rounded-[5px] border border-[#D8C5AF] bg-transparent px-3 text-[11px] outline-none placeholder:text-[#8A6A50] focus:border-[#6B4F3A]"
                  />
                </div>

                <div className="mt-7 flex justify-center">
                  <button
                    type="button"
                    onClick={handlePayNow}
                    disabled={isProcessing}
                    className="font-inter flex h-[44px] w-full max-w-[260px] items-center justify-center gap-2 rounded-[5px] bg-[#38251A] text-[11px] font-semibold text-white transition hover:bg-[#4A3324] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <Lock
                      size={14}
                      strokeWidth={1.8}
                    />

                    {isProcessing
                      ? "Processing..."
                      : "Pay Now"}
                  </button>
                </div>
              </section>
            )}

            {paymentMethod === "gcash" && (
              <section className="rounded-[6px] border border-[#D8C5AF] bg-[#F7EEDF] p-6 sm:p-7">
                <h2 className="font-playfair text-[21px] font-semibold">
                  GCash Payment
                </h2>

                <p className="font-inter mt-1 text-[11px] text-[#6B4F3A]">
                  Enter your GCash information to continue
                </p>

                <div className="mt-6 flex items-center gap-4 rounded-[6px] bg-[#E9D8C2] p-5">
                  <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-[5px] bg-[#FFFDF8]">
                    <GcashIcon className="!h-auto !w-[40px]" />
                  </div>

                  <div>
                    <h3 className="font-playfair text-[16px] font-semibold">
                      Pay with GCash
                    </h3>

                    <p className="font-inter mt-1 text-[10px] leading-relaxed text-[#6B4F3A]">
                      You&apos;ll receive payment
                      instructions after confirming your
                      order.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="gcashNumber"
                    className="font-inter mb-2 block text-[11px] font-semibold"
                  >
                    GCash Mobile Number
                  </label>

                  <input
                    id="gcashNumber"
                    type="tel"
                    inputMode="numeric"
                    placeholder="09123456789"
                    className="font-inter h-[48px] w-full rounded-[5px] border border-[#D8C5AF] bg-transparent px-3 text-[11px] outline-none placeholder:text-[#8A6A50] focus:border-[#6B4F3A]"
                  />
                </div>

                <div className="mt-7 flex justify-center">
                  <button
                    type="button"
                    onClick={handlePayNow}
                    disabled={isProcessing}
                    className="font-inter flex h-[44px] w-full max-w-[260px] items-center justify-center rounded-[5px] bg-[#38251A] text-[11px] font-semibold text-white transition hover:bg-[#4A3324] disabled:opacity-70"
                  >
                    {isProcessing
                      ? "Processing..."
                      : "Continue with GCash"}
                  </button>
                </div>
              </section>
            )}

            {paymentMethod === "cod" && (
              <section className="rounded-[6px] border border-[#D8C5AF] bg-[#F7EEDF] p-6 sm:p-7">
                <h2 className="font-playfair text-[21px] font-semibold">
                  Cash on Delivery
                </h2>

                <p className="font-inter mt-1 text-[11px] text-[#6B4F3A]">
                  Review your order and pay when it arrives.
                </p>

                <div className="mt-6 flex items-center gap-4 rounded-[6px] bg-[#E9D8C2] p-5">
                  <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-[5px] bg-[#FFFDF8]">
                    <CashOnDeliveryIcon className="!h-auto !w-[38px]" />
                  </div>

                  <div>
                    <h3 className="font-playfair text-[16px] font-semibold">
                      Pay when you receive
                    </h3>

                    <p className="font-inter mt-1 text-[10px] leading-relaxed text-[#6B4F3A]">
                      Please prepare the exact amount of
                      ₱{total.toFixed(2)} when your order
                      arrives.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex justify-center">
                  <button
                    type="button"
                    onClick={handlePayNow}
                    disabled={isProcessing}
                    className="font-inter flex h-[44px] w-full max-w-[260px] items-center justify-center rounded-[5px] bg-[#38251A] text-[11px] font-semibold text-white transition hover:bg-[#4A3324] disabled:opacity-70"
                  >
                    {isProcessing
                      ? "Processing..."
                      : "Place Order"}
                  </button>
                </div>
              </section>
            )}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-[95px]">
            <section className="rounded-[6px] border border-[#D8C5AF] bg-[#F7EEDF] p-5 sm:p-6">
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
                      {/* IMAGE */}
                      <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[5px]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="72px"
                          className="object-cover"
                        />
                      </div>

                      {/* ITEM INFO */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="font-playfair truncate text-[12px] font-semibold">
                              {item.name}
                            </h3>

                            <p className="font-inter mt-1 text-[9px] text-[#6B4F3A]">
                              {item.size}
                            </p>
                          </div>

                          <span className="font-inter whitespace-nowrap text-[12px] font-semibold">
                            ₱{item.price}
                          </span>
                        </div>

                        {/* QUANTITY */}
                        <div className="mt-3 flex items-center justify-end gap-2">
                          <div className="flex h-[30px] items-center rounded-[5px] border border-[#D8C5AF]">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  -1
                                )
                              }
                              className="flex h-full w-8 items-center justify-center transition hover:bg-[#E9D8C2]"
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
                                updateQuantity(
                                  item.id,
                                  1
                                )
                              }
                              className="flex h-full w-8 items-center justify-center transition hover:bg-[#E9D8C2]"
                              aria-label={`Increase ${item.name}`}
                            >
                              <Plus size={13} />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeItem(item.id)
                            }
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
                    <span className="font-playfair text-[18px] font-semibold">
                      Total
                    </span>

                    <span className="font-inter text-[15px] font-bold">
                      ₱{total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex min-h-[78px] items-center gap-4 rounded-[6px] bg-[#E4CEB0] px-4 py-4">
              <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center">
                <PaymentSecureIcon
                  className="h-[30px] w-[35px]"
                />
              </div>

              <div>
                <p className="font-inter text-[11px] font-semibold">
                  Your payment is secure
                </p>

                <p className="font-inter mt-1 max-w-[260px] text-[9px] leading-[1.35] text-[#38251A]">
                  We use industry-standard encryption to
                  protect your information.
                </p>
              </div>
            </section>
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