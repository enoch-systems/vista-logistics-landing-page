"use client";

import Image from "next/image";

const Reviews = () => {
  const images = Array.from({ length: 7 }, (_, i) => `/t${i + 1}.jpg`).filter(img => img !== '/t1.jpg');

  return (
    <div className="grid grid-cols-1 gap-4 max-w-6xl mx-auto">
      {images.map((src, idx) => (
        <div key={idx} className="relative">
          <Image
            src={src}
            alt={`Review ${idx + 2}`}
            width={300}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default Reviews;
