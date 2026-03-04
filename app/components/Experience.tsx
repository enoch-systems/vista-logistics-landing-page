import React from "react";
import Image from "next/image";

export default function Experience() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <Image
          src="/ceo2.jpg"
          alt="Photo taken during my sourcing trip to China"
          width={400}
          height={300}
          className="mx-auto rounded-lg mb-6"
        />
        <p className="text-gray-800 font-semibold mb-2">
          Ezinne Vivian Chinwendu
        </p>
        <p className="text-gray-600 mb-4">
          Ezinne Vivian Chinwendu is the founder of Vista Express Logistics Academy. With years of experience in importation and logistics, she has helped countless individuals start and grow their mini-importation businesses. Her practical approach and industry insights make her the perfect guide for anyone looking to enter the profitable world of international trade.
        </p>
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
      <footer className="mt-16 text-center text-sm text-blue-400">
        © 2026 Vista Express Logistics
      </footer>
    </section>
  );
}
