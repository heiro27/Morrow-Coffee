"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Map,
  MapPin,
  ShoppingBag
} from "lucide-react";

import Navbar from "@/src/components/Navbar";

const locations = [
  {
    name: "Morrow Coffee - BGC",
    address: "3rd Ave, Bonifacio Global City, Taguig City",
    hours: "Mon - Sun 7:00AM - 10:00PM",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Morrow+Coffee+BGC",
  },
  {
    name: "Morrow Coffee - Makati",
    address: "Poblacion, Makati City",
    hours: "Mon - Sun 7:00AM - 10:00PM",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Morrow+Coffee+Makati",
  },
  {
    name: "Morrow Coffee - Quezon City",
    address: "Maginhawa St, Quezon City",
    hours: "Mon - Sun 7:00AM - 10:00PM",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Morrow+Coffee+Maginhawa+Quezon+City",
  },
];

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#F7EEDF] text-[#38251A]">
      <Navbar />

      <section className="mx-auto w-full max-w-[1500px] px-6 py-10 sm:px-8 lg:px-10 lg:py-11">
        <h1 className="font-playfair mb-7 text-[40px] font-semibold leading-none tracking-[-0.035em] sm:text-[44px]">
          Our Locations
        </h1>

        <div className="grid items-stretch gap-8 lg:grid-cols-[390px_1fr] xl:grid-cols-[400px_1fr]">
          
          <div className="overflow-hidden rounded-md border border-[#DCC3A5]">
            {locations.map((location, index) => (
              <div
                key={location.name}
                className={`bg-[#F7EEDF] px-5 py-6 sm:px-6 sm:py-7 ${
                  index !== locations.length - 1
                    ? "border-b border-[#DCC3A5]"
                    : ""
                }`}
              >
                <h2 className="font-playfair text-[18px] font-semibold leading-tight sm:text-[19px]">
                  {location.name}
                </h2>

                <div className="mt-5 flex items-start gap-2.5">
                  <MapPin
                    size={19}
                    strokeWidth={1.8}
                    className="mt-[1px] shrink-0 text-[#6B4F3A]"
                  />

                  <p className="font-inter text-[12px] font-medium leading-[1.4] text-[#38251A] sm:text-[13px]">
                    {location.address}
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-2.5">
                  <Clock3
                    size={19}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#6B4F3A]"
                  />

                  <p className="font-inter text-[12px] font-medium leading-none text-[#38251A] sm:text-[13px]">
                    {location.hours}
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-2.5">
                  <span className="h-3.5 w-3.5 rounded-full bg-[#39C866]" />

                  <p className="font-inter text-[12px] font-medium leading-none text-[#38251A] sm:text-[13px]">
                    Open Now
                  </p>
                </div>

                <Link
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter mt-6 inline-flex items-center gap-2.5 text-[12px] font-semibold transition-all hover:gap-3.5 sm:text-[13px]"
                >
                  Get Directions

                  <ArrowRight
                    size={18}
                    strokeWidth={1.7}
                  />
                </Link>
              </div>
            ))}
          </div>

          <div className="relative h-[600px] overflow-hidden rounded-none sm:h-[620px] lg:h-[600px]">
            
            <div
              className="absolute inset-0 bg-[#DDD2BE]"
              style={{
                backgroundImage: "url('/images/map.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="absolute inset-0 bg-[#E9D8C2]/15" />

            <Link
              href="https://www.google.com/maps/search/?api=1&query=Metro+Manila"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4 rounded-lg bg-[#38251A] px-9 py-6 text-[#FFFDF8] shadow-lg transition duration-200 hover:bg-[#4A3324]"
            >
              <Map
                size={34}
                strokeWidth={1.7}
              />

              <span className="font-inter text-[17px] font-semibold">
                View Map
              </span>
            </Link>
          </div>
        </div>
      </section>
      <footer className="mt-32 bg-[#38251A] px-6 py-8 text-[#FFFDF8]">

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