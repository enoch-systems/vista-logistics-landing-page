import React from "react";
import Image from "next/image";

export default function Youtube() {
  return (
    <section className="py-2 px-6 bg-white">
      <h2 className="text-center text-2xl font-semibold mb-6 text-amber-600">
       REVIEWS
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="w-full h-96 md:h-96">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/C6vS5ifMyWg"
            title="School bag factory direct contact"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full h-96 md:h-96">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Bl_U6iTjzig"
            title="Shein and Pat Pat factory direct contacts"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full h-96 md:h-96">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/8pRjhAbyb78"
            title="Product Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
