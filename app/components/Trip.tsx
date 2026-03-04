"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Trip() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = Array.from({ length: 6 }, (_, i) => `/r${i + 1}.jpg`);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className=" pb-7 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="w-full relative">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={images[currentIndex]}
              alt="Importation training images"
              width={600}
              height={400}
              className="w-full rounded-lg object-cover"
            />
          </div>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-white hover:bg-opacity-75 rounded-full p-2"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-white hover:bg-opacity-75 rounded-full p-2"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
            Learn Direct Importation from Industry Experts
          </p>
        </div>

        <div className="text-gray-800 dark:text-gray-200">
          <h3 className="text-2xl font-normal mb-4">
            We discovered how most beginners get overcharged by suppliers and middlemen.
          </h3>
          <p className="mb-8">
            In this training, I’ll be exposing these tricks and teaching you how to buy at the right price.
          </p>

          <h4 className="text-xl font-bold mb-3">WHO THIS TRAINING IS FOR:</h4>
          <ul className="space-y-2 list-none">
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> New to importation and want to start the right way</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> A vendor or shop owner looking to increase profit</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> A stay-at-home mom who wants to earn from home</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> A 9–5 worker seeking an extra source of income</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> Tired of buying from middlemen and paying high prices</li>
          </ul>

          <div className="mt-8">
            <a
              href="https://chat.whatsapp.com/HZEHASpVjCW6WEjxb8DxUV?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-colors"
            >
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={20}
                height={20}
                className="mr-2 inline"
              />
              Join the WhatsApp Group
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
