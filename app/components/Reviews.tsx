"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Reviews = () => {
  const images = Array.from({ length: 7 }, (_, i) => `/t${i + 1}.jpg`).filter(img => img !== '/t1.jpg');
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Create slides based on screen size
  const slides = isMobile 
    ? images.map(img => [img]) // One image per slide for mobile
    : (() => {
        const desktopSlides = [] as string[][];
        for (let i = 0; i < images.length; i += 3) {
          desktopSlides.push(images.slice(i, i + 3)); // Three images per slide for desktop
        }
        return desktopSlides;
      })();

  // Reset current slide when screen size changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

  const prev = () =>
    setCurrentSlide((s) => (s === 0 ? slides.length - 1 : s - 1));
  const next = () =>
    setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1));

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-lg bg-gray-50">
        <div className="flex transition-transform duration-500"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((group, si) => (
            <div key={si} className="flex-shrink-0 w-full flex justify-center items-center gap-4 py-6 px-4">
              {group.map((src, idx) => (
                <div key={idx} className={`relative ${group.length === 1 ? 'w-full max-w-md' : 'w-1/3'}`}>
                  <Image
                    src={src}
                    alt={`Review ${si * group.length + idx + 1}`}
                    width={300}
                    height={400}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-white/80 hover:bg-white shadow-md"
        aria-label="Previous reviews"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-white/80 hover:bg-white shadow-md"
        aria-label="Next reviews"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="flex justify-center mt-2 space-x-1">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === currentSlide ? "bg-black" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
