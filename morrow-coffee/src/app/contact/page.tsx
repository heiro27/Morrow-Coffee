"use client";

import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ShoppingBag
} from "lucide-react";

import Navbar from "@/src/components/Navbar";

import FacebookIcon from "@/src/components/icons/FacebookIcon";
import InstagramIcon from "@/src/components/icons/InstagramIcon";
import TikTokIcon from "@/src/components/icons/TiktokIcon";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7EEDF] text-[#38251A]">
      <Navbar />

      <section className="mx-auto w-full max-w-[1500px] px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid items-start gap-10 lg:grid-cols-[360px_1fr] xl:grid-cols-[390px_1fr] xl:gap-14">

          <div className="w-full">

            <h1 className="font-playfair text-[38px] font-semibold leading-tight tracking-[-0.035em] sm:text-[42px]">
              Get in Touch
            </h1>

            <div className="mt-8 space-y-6">

              <div className="flex items-center gap-5">
                <Mail
                  size={29}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#6B4F3A]"
                />

                <p className="font-inter text-[14px] font-semibold leading-none sm:text-[15px]">
                  morrowcoffee@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-5">
                <Phone
                  size={29}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#6B4F3A]"
                />

                <p className="font-inter text-[14px] font-semibold leading-none sm:text-[15px]">
                  +63 092 546 8790
                </p>
              </div>

              <div className="flex items-center gap-5">
                <MapPin
                  size={30}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#6B4F3A]"
                />

                <p className="font-inter text-[14px] font-semibold leading-tight sm:text-[15px]">
                  BGC, Taguig City, Philippines
                </p>
              </div>
            </div>

            <div className="mt-9 flex items-center gap-5">

              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#6B4F3A] transition duration-200 hover:bg-[#38251A]"
              >
                <FacebookIcon className="h-[35px] w-[32px] text-white" />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#6B4F3A] transition duration-200 hover:bg-[#38251A]"
              >
                <InstagramIcon className="h-[35px] w-[32px] text-white" />
              </Link>

              <Link
                href="#"
                aria-label="TikTok"
                className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#6B4F3A] transition duration-200 hover:bg-[#38251A]"
              >
                <TikTokIcon className="h-[35px] w-[32px] text-white" />
              </Link>
            </div>

            <form className="mt-8 space-y-2.5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="
                  font-inter
                  h-[50px]
                  w-full
                  rounded-sm
                  border
                  border-[#DCC3A5]
                  bg-transparent
                  px-3
                  text-[13px]
                  font-medium
                  text-[#38251A]
                  outline-none
                  placeholder:text-[#C9B394]
                  focus:border-[#6B4F3A]
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="
                  font-inter
                  h-[50px]
                  w-full
                  rounded-sm
                  border
                  border-[#DCC3A5]
                  bg-transparent
                  px-3
                  text-[13px]
                  font-medium
                  text-[#38251A]
                  outline-none
                  placeholder:text-[#C9B394]
                  focus:border-[#6B4F3A]
                "
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                className="
                  font-inter
                  h-[115px]
                  w-full
                  resize-none
                  rounded-sm
                  border
                  border-[#DCC3A5]
                  bg-transparent
                  px-3
                  py-3
                  text-[13px]
                  font-medium
                  text-[#38251A]
                  outline-none
                  placeholder:text-[#C9B394]
                  focus:border-[#6B4F3A]
                "
              />

              <button
                type="submit"
                className="
                  font-inter
                  h-[48px]
                  w-full
                  rounded-sm
                  bg-[#6B4F3A]
                  text-[13px]
                  font-semibold
                  text-white
                  transition
                  duration-200
                  hover:bg-[#38251A]
                "
              >
                Send Message
              </button>
            </form>
          </div>

          <div
            className="
              relative
              h-[800px]
              w-full
              overflow-hidden
              rounded-md
              sm:h-[850px]
              lg:h-[800px]
              xl:h-[850px]
            "
          >
            <img
              src="/images/contact-coffee.jpg"
              alt="Freshly brewed Morrow Coffee"
              className="
                h-full
                w-full
                object-cover
                object-center
              "
            />
          </div>
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