"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "@/src/components/Navbar";
import HeroCarousel from "@/src/components/HeroCarousel";

import BeansIcon from "@/src/components/icons/BeansIcon";
import LeafIcon from "@/src/components/icons/LeafIcon";
import HeartIcon from "@/src/components/icons/HeartIcon";
import CoffeeIcon from "@/src/components/icons/CoffeeIcon";

const signatures = [
  {
    name: "Morrow Latte",
    image: "/images/latte.jpg",
    description: (
      <>
        Smooth espresso
        <br />
        with steamed milk.
      </>
    ),
    price: "150",
  },
  {
    name: "Matcha Bliss",
    image: "/images/matcha.jpg",
    description: (
      <>
        Ceremonial grade matcha
        <br />
        with creamy milk.
      </>
    ),
    price: "160",
  },
  {
    name: "Cold Brew",
    image: "/images/cold-brew.jpg",
    description: (
      <>
        Slow-steeped for a
        <br />
        bold and smooth taste
      </>
    ),
    price: "145",
  },
];

const features = [
  {
    title: "Quality Beans",
    description: (
      <>
        Sourced ethically from
        <br />
        the best farmers
      </>
    ),
    icon: BeansIcon,
  },
  {
    title: "Expert Baristas",
    description: (
      <>
        Crafted with skill and
        <br />
        passion
      </>
    ),
    icon: CoffeeIcon,
  },
  {
    title: "Sustainable",
    description: (
      <>
        Eco-friendly practices
        <br />
        for a better future
      </>
    ),
    icon: LeafIcon,
  },
  {
    title: "Made with Love",
    description: (
      <>
        Every cup is made just
        <br />
        for you
      </>
    ),
    icon: HeartIcon,
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F7EEDF] text-[#38251A]">
      <Navbar />

      <HeroCarousel />

      <section className="mx-auto w-full max-w-[1500px] px-6 py-6 sm:px-8 lg:px-10 lg:py-7">
        <div className="grid gap-10 lg:grid-cols-[1fr_250px] lg:gap-12">
          <div>
            <h2 className="font-playfair mb-4 text-base font-semibold">
              OUR SIGNATURES
            </h2>

            <div className="grid gap-2 sm:grid-cols-3">
              {signatures.map((item) => (
                <Link
                  key={item.name}
                  href="/menu"
                  className="group overflow-hidden rounded-md border border-[#B99F84] bg-[#FFFDF8] transition hover:-translate-y-1 hover:shadow-md"
                >

                  <div className="relative h-[175px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex min-h-[105px] flex-col p-2.5">
                    <h3 className="font-playfair text-[18px] font-semibold">
                      {item.name}
                    </h3>

                    <p className="font-inter mt-0.5 text-[11px] font-medium leading-[1.2] text-[#6B4F3A]">
                      {item.description}
                    </p>

                    <div className="font-inter mt-auto flex items-center gap-0.5 pt-3 text-sm font-semibold">
                      <span>₱</span>
                      <span>{item.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex border-l border-[#8A6A50] pl-5 lg:mt-9 lg:min-h-[245px]">
            <div>
              <h2 className="font-playfair text-base font-semibold">
                OUR STORY
              </h2>

              <p className="font-inter mt-3 text-sm font-bold leading-[1.25] text-[#4A3324]">
                Morrow Coffee is more than a café- it is a daily ritual. We
                source finest beans, brew with care, and create a space for you
                to slow down and savor the moment
              </p>

              <Link
                href="/about"
                className="font-inter mt-5 inline-flex items-center gap-1 text-sm font-semibold transition hover:gap-2"
              >
                Learn More
                <ArrowRight size={15} strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-auto bg-[#38251A] px-6 py-7 text-[#FFFDF8] sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center"
              >
                
                <div className="mb-2 flex h-8 items-center justify-center">
                  <Icon className="h-7 w-7 text-[#FFFDF8]" />
                </div>

                <h3 className="font-playfair text-xs font-semibold sm:text-sm">
                  {feature.title}
                </h3>

                <p className="font-inter mt-1 text-[9px] font-medium leading-[1.2] text-[#FFFDF8] sm:text-[10px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </footer>
    </main>
  );
}