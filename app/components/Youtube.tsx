import React from "react";
import Image from "next/image";

export default function Youtube() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-center text-2xl font-semibold mb-12 text-black">
       Product Unboxing Videos
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="aspect-w-16 aspect-h-16">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/C6vS5ifMyWg"
            title="School bag factory direct contact"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="aspect-w-16 aspect-h-16">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Bl_U6iTjzig"
            title="Shein and Pat Pat factory direct contacts"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

       
      </div>
    </section>
  );
}
