import React, { useState } from "react";
import Image from "next/image";

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = "My name is Ezinne Vivian Chinwendu, Lead Facilitator at Vista Express Logistics Academy. Vista Express Logistics Academy, a registered brand under CAC, was recently launched as a subsidiary of Vista Express Logistics to equip individuals with the skills and confidence to begin their journey in importation and e-commerce, with focus on sourcing from China, Vietnam, and other international markets.";
  const fullText = [
    "My name is Ezinne Vivian Chinwendu, Lead Facilitator at Vista Express Logistics Academy. Vista Express Logistics Academy, a registered brand under CAC, was recently launched as a subsidiary of Vista Express Logistics to equip individuals with the skills and confidence to begin their journey in importation and e-commerce, with focus on sourcing from China, Vietnam, and other international markets.",
    "This is our first official training batch that's why we're providing a startup capital funding of ₦20,000 for the 20 participants to register for the training as an incentive to help them start Importing immediately after their training.",
    "Over the past years, Vista Express Logistics has successfully assisted over 1,000 clients in sourcing quality products directly from China, providing them with verified suppliers and seamless delivery processes. We have also completed over 1,000 orders of different shipments of items and directly delivered to customers' doorstep. This strong background is what powers our academy today.",
    "I am an importer, consultant, and entrepreneur with vast experience in international trade, product sourcing, and digital business growth. Over the years, I have also mentored thousands of individuals, helping them turn importation and e-commerce into profitable businesses."
  ];

  return (
    <section className="py-1 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-bold text-amber-600 mt-10 mb-4">MEET OUR LEAD FACILATOR</h2>
        <Image
          src="/ceo2.jpg"
          alt="Photo taken during my sourcing trip to China"
          width={400}
          height={300}
          className="mx-auto rounded-lg mb-6"
        />
        <p className="text-indigo-950 font-semibold mb-2">
          Ezinne Vivian Chinwendu
        </p>
        {isExpanded ? (
          fullText.map((para, idx) => (
            <p key={idx} className="text-indigo-950 mb-4 text-left">
              {para}
            </p>
          ))
        ) : (
          <p className="text-indigo-950 mb-4 text-left">
            {shortText}
          </p>
        )}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="border border-amber-600 text-amber-600 bg-white hover:bg-amber-600 hover:text-white font-semibold mb-4 px-4 py-2 rounded transition-colors"
        >
          {isExpanded ? (
            <>Read Less <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg></>
          ) : (
            <>Read More <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></>
          )}
        </button>
        <a
          href="https://chat.whatsapp.com/HZEHASpVjCW6WEjxb8DxUV?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-colors w-fit mx-auto"
        >
         
          Start your Journey now
        </a>
      </div>
      
    </section>
  );
}
