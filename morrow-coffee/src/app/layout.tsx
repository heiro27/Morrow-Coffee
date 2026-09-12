import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Inspiration,
} from "next/font/google";

import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const inspiration = Inspiration({
  variable: "--font-inspiration",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});



export const metadata: Metadata = {
  title: "Morrow Coffee",
  description: "Slow mornings. Better coffee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${inspiration.variable}`}
      >
        {children}
      </body>
    </html>
  );
}