import Image from "next/image";

import {
  Coffee,
  Heart,
  ShoppingBag,
} from "lucide-react";

import Navbar from "@/src/components/Navbar";
import BeansIcon from "@/src/components/icons/BeansIcon";
import LeafIcon from "@/src/components/icons/LeafIcon";
import LoveIcon from "@/src/components/icons/LoveIcon";
import CommunityIcon from "@/src/components/icons/CommunityIcon";
import CarefullySelectedBeansIcon from "@/src/components/icons/CarefullySelectedBeansIcon";
import ExpertlyBrewedIcon from "@/src/components/icons/ExpertlyBrewedIcon";
import HeartIcon from "@/src/components/icons/HeartIcon";

const values = [
  {
    title: "Quality First",
    description:
      "We source the finest beans and ingredients to bring out exceptional flavor in every cup.",
    icon: BeansIcon,
  },
  {
    title: "Sustainability",
    description:
      "We care for the planet and the people behind every bean we serve.",
    icon: LeafIcon,
  },
  {
    title: "Made with Love",
    description:
      "Every cup is crafted with passion and attention to detail.",
    icon: LoveIcon,
  },
  {
    title: "Community",
    description:
      "We create a welcoming space where meaningful connections happen.",
    icon: CommunityIcon,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7EEDF] text-[#38251A]">

      <Navbar />

      <div className="mx-auto max-w-[1500px] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">

        <section>

          <h1 className="font-playfair mb-8 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Our Story
          </h1>

          <div className="grid gap-8 lg:grid-cols-[320px_1fr] xl:grid-cols-[420px_1fr]">

            <div className="relative h-[390px] overflow-hidden rounded-lg sm:h-[480px] lg:h-[500px]">
              <Image
                src="/images/about-coffee.jpg"
                alt="Freshly brewed Morrow Coffee"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">

              <div className="max-w-[650px]">

                <h2 className="font-playfair text-3xl font-semibold leading-tight sm:text-4xl lg:text-[38px]">
                  More than just coffee.
                </h2>

                <div className="font-inter mt-4 space-y-5 text-sm font-semibold leading-[1.45] text-[#4A3324] sm:text-base">

                  <p>
                    We believe coffee is more than a drink. It&apos;s an
                    experience that connects people and creates moments.
                  </p>

                  <p>
                    We carefully select our beans, support local farmers,
                    and brew every cup with heart.
                  </p>

                </div>

              </div>

              <div className="mt-10">

                <div className="mb-4 flex items-center gap-4">

                  <div className="h-px flex-1 bg-[#DCC3A5]" />

                  <h3 className="font-playfair whitespace-nowrap text-sm font-semibold">
                    Our Values
                  </h3>

                  <div className="h-px flex-1 bg-[#DCC3A5]" />

                </div>

                <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">

                  {values.map((value) => {
                    const Icon = value.icon;

                    return (
                      <div
                        key={value.title}
                        className="min-h-[155px] rounded-md border border-[#DCC3A5] bg-[#F7EEDF] p-4 transition-colors hover:bg-[#F2E4D0]"
                      >

                        <div className="mb-3 flex justify-center">
                          <Icon className="h-7 w-7 text-[#6B4F3A]" />
                        </div>

                        <h4 className="font-playfair text-center text-xs font-semibold sm:text-sm">
                          {value.title}
                        </h4>
                        
                        <p className="font-inter mt-3 text-center text-[10px] leading-[1.3] text-[#38251A] sm:text-[11px]">
                          {value.description}
                        </p>

                      </div>
                    );
                  })}

                </div>

              </div>

            </div>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-lg border border-[#DCC3A5] bg-[#F7EEDF]">

          <div className="grid lg:grid-cols-[35%_65%]">

            <div className="relative h-[250px] sm:h-[320px] lg:h-[300px]">

              <Image
                src="/images/about-promise.jpg"
                alt="Coffee beans and freshly brewed coffee"
                fill
                className="object-cover"
              />

            </div>

            <div className="grid lg:grid-cols-[35%_65%]">

              <div className="flex flex-col justify-center p-6 sm:p-8">

                <h2 className="font-playfair text-lg font-semibold text-[#6B4F3A]">
                  Our Promise
                </h2>

                <p className="font-inter mt-4 text-[11px] font-semibold leading-[1.45] text-[#38251A] sm:text-xs">
                  We promise to deliver more than coffee. We promise moments
                  of comfort, inspiration, and joy one cup at a time.
                </p>

                <div className="font-inspiration mt-6 text-4xl text-[#38251A]">
                  Morrow Coffee
                  <span className="ml-2 text-[#C9A98D]">
                    ♡
                  </span>
                </div>

              </div>

              <div className="m-2 overflow-hidden rounded-md bg-[#E9D8C2]">

                <div className="m-4 flex gap-4 border-b border-[#DCC3A5] p-4">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                    <CarefullySelectedBeansIcon className="h-[32px] w-[32px] text-[#6B4F3A]" />
                  </div>

                  <div>
                    <h3 className="font-inter text-xs font-bold">
                      Carefully Selected Beans
                    </h3>

                    <p className="font-inter mt-1 text-[11px] text-[#38251A]">
                      From trusted farms around the world.
                    </p>
                  </div>

                </div>

                <div className=" m-4 flex gap-4 border-b border-[#DCC3A5] p-4">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                    <ExpertlyBrewedIcon className="h-[32px] w-[32px] text-[#6B4F3A]" />
                  </div>

                  <div>
                    <h3 className="font-inter text-xs font-bold">
                      Expertly Brewed
                    </h3>

                    <p className="font-inter mt-1 text-[11px] text-[#38251A]">
                      By skilled baristas who love what they do.
                    </p>
                  </div>

                </div>

                <div className=" m-4 flex gap-4 p-4">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                   <HeartIcon className="h-[32px] w-[32px] text-[#6B4F3A]" />
                  </div>

                  <div>
                    <h3 className="font-inter text-xs font-bold">
                      Memorable Experience
                    </h3>

                    <p className="font-inter mt-1 text-[11px] text-[#38251A]">
                      Because every moment matters.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>

      </div>

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