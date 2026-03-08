"use client";

import Image from "next/image";

import Getting from "./components/Getting";
import Trip from "./components/Trip";
import Youtube from "./components/Youtube";
import Experience from "./components/Experience";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Logo */}
      <div className="flex justify-start px-6 mt-1">
        <Image
          src="/logo.jpeg"
          alt="Company Logo"
          width={520}
          height={120}
          className="mb-8 w-40 h-12 md:w-48 md:h-16"
        />
      </div>

      {/* Top Banner */}
      <div className="bg-indigo-950 text-white text-center  px-6 mt-0">
        <h2 className="text-2xl sm:text-3xl font-bold">Turn ₦10,000 into ₦300,000/Month with Importation</h2>
        <p className="mt-2 text-base sm:text-lg">Start your import business today even if you've never done it before.</p>
      </div>

      <header className="flex flex-col items-center text-center  px-6">
        <Image
          src="/banner.jpeg"
          alt="Banner"
          width={1200}
          height={400}
          className="w-full max-w-[1200px] h-auto mb-8 md:w-auto md:h-auto"
        />
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-2xl text-indigo-900">
          Learn How to Import Profitable Goods from China Using Just Your Phone — No Travel Required
        </h1>
        <p className="mt-4 text-xl text-indigo-900 max-w-lg">
          Start and scale your importation business safely and confidently.
        </p>
    
      </header>
      <Trip/>
      <Getting/>
      {/* Reviews section */}
      <section className="py-0 px-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-amber-600">TESTIMONIALS</h2>
        <Reviews />
      </section>

      {/* Training benefits heading */}
      <section className="pt-16 px-6">
      
      </section>

     
     
      <Youtube />
      <Experience />
      <FAQ />
    </div>
  );
}
