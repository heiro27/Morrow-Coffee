"use client";

import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#DCC3A5] bg-[#FFFDF8]/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between px-6 sm:px-8 lg:px-10">

        <Link href="/" className="leading-none">
          <div className="font-playfair text-xl font-bold tracking-wide">
            MORROW
          </div>

          <div className="font-inter mt-1 text-[10px] font-semibold tracking-[0.35em]">
            COFFEE
          </div>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <Link
            href="/"
            className="font-inter text-sm transition-colors hover:text-[#6B4F3A]"
          >
            Home
          </Link>

          <Link
            href="/menu"
            className="font-inter text-sm transition-colors hover:text-[#6B4F3A]"
          >
            Menu
          </Link>

          <Link
            href="/about"
            className="font-inter text-sm transition-colors hover:text-[#6B4F3A]"
          >
            About
          </Link>

          <Link
            href="/locations"
            className="font-inter text-sm transition-colors hover:text-[#6B4F3A]"
          >
            Locations
          </Link>

          <Link
            href="/contact"
            className="font-inter text-sm transition-colors hover:text-[#6B4F3A]"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">

          <button
            className="font-inter hidden rounded-md bg-[#38251A] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4A3324] sm:block"
          >
            Order Now
          </button>

          <Link
            href="/shopping-bag"
            aria-label="Shopping bag"
            className="rounded-full p-2 transition-colors hover:bg-[#F7EEDF]"
          >
            <ShoppingBag
              size={21}
              strokeWidth={1.7}
            />
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 transition-colors hover:bg-[#F7EEDF] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Menu size={23} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#DCC3A5] bg-[#FFFDF8] px-6 py-5 sm:px-8 md:hidden">
          <nav className="flex flex-col gap-5">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-inter text-sm"
            >
              Home
            </Link>

            <Link
              href="/menu"
              onClick={() => setOpen(false)}
              className="font-inter text-sm"
            >
              Menu
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="font-inter text-sm"
            >
              About
            </Link>

            <Link
              href="/locations"
              onClick={() => setOpen(false)}
              className="font-inter text-sm"
            >
              Locations
            </Link>

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="font-inter text-sm"
            >
              Contact
            </Link>

            <button className="font-inter w-full rounded-md bg-[#38251A] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4A3324]">
              Order Now
            </button>

          </nav>
        </div>
      )}
    </header>
  );
}