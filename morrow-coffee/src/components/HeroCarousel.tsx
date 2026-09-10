"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const heroSlides = [
  {
    image: "/images/hero-coffee.jpg",
    eyebrow: "SLOW MORNINGS, BETTER COFFEE",
    title: "Start your morning differently.",
    description:
      "Handcrafted coffee made with passion, served with purpose.",
  },
  {
    image: "/images/hero-coffee-2.jpg",
    eyebrow: "BREWED WITH CARE",
    title: "A better cup for better moments.",
    description:
      "Thoughtfully brewed coffee for slow mornings and meaningful moments.",
  },
  {
    image: "/images/hero-coffee-3.jpg",
    eyebrow: "YOUR DAILY RITUAL",
    title: "Take a moment. Enjoy the coffee.",
    description:
      "Simple, comforting coffee made to become part of your everyday.",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === heroSlides.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const hero = heroSlides[currentSlide];

  return (
    <section className="relative h-[420px] overflow-hidden sm:h-[460px] lg:h-[500px]">
      {/* Background */}
      <Image
        key={hero.image}
        src={hero.image}
        alt="Morrow Coffee"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-center px-6 sm:px-8 lg:px-10">
        <div className="max-w-[360px] text-white">
          <p className="font-inter mb-3 text-[10px] font-bold tracking-wide sm:text-xs">
            {hero.eyebrow}
          </p>

          <h1 className="font-inter max-w-[360px] text-[34px] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[40px] lg:text-[42px]">
            {hero.title}
          </h1>

          <p className="font-inter mt-3 max-w-[310px] text-[10px] leading-[1.4] text-white/95 sm:text-xs">
            {hero.description}
          </p>

          <Link
            href="/menu"
            className="mt-6 inline-flex items-center gap-4 rounded-md bg-[#DCC3A5] px-5 py-3 text-[10px] font-medium text-[#38251A] transition hover:bg-[#E9D8C2]"
          >
            Explore Menu

            <ArrowRight size={15} strokeWidth={1.8} />
          </Link>
        </div>
      </div>

      {/* Previous */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#E9D8C2] text-[#38251A] transition hover:bg-[#F7EEDF]"
      >
        <ArrowLeft size={20} strokeWidth={1.8} />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#E9D8C2] text-[#38251A] transition hover:bg-[#F7EEDF]"
      >
        <ArrowRight size={20} strokeWidth={1.8} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-3 rounded-full border border-white transition ${
              currentSlide === index
                ? "bg-white"
                : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}