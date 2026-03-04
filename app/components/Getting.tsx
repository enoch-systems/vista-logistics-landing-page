import React from "react";
import Image from "next/image";

export default function Getting() {
  return (
    <section className="bg-indigo-950 text-white py-16 px-6">

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* China Importation */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-amber-600">BENEFITS OF MINI-IMPORTATION BUSINESS</h3>
          <ul className="space-y-2 list-none">
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> Importation is one of the fastest paths to profit if you know how: buying cheap internationally + selling locally.</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> Being an importer can serve as a side hustle for you while you maintain your full time job.</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> You will start making money right from your first order within 2 weeks.</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> You will have no need to buy at higher rates from wholesalers here in Nigeria.</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> This gives you multiple streams of income.</li>
          </ul>
        </div>

        {/* Hair Importation */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-amber-600">BENEFITS OF JOINING OUR FIRST OFFICIAL TRAINING BATCH</h3>
          <ul className="space-y-2 list-none">
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> Step-by-step importation business launch guide</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> 100+ contacts: China, Vietnam & international suppliers</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> ₦20,000 startup funding for first 20 participants</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> Start profiting from first order within 2 weeks</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> Customer attraction & consistent sales strategies</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> Build business system generating ₦300K-500K monthly</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> Create financially independent entrepreneurs globally</li>
          </ul>
        </div>

        {/* Vietnam Kiddies Importation */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-amber-600">COURSE OVERVIEW FOR ADVANCED CLASS</h3>
          <ul className="space-y-2 list-none text-sm">
            <li className="font-bold text-amber-50">CHINA IMPORTATION</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> 1688/Alibaba sourcing, Alipay, supplier verification</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> 150+ contacts, tracking, quality checks, fast products</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> Sea/air shipping, exchange contacts</li>
            
            <li className="font-bold text-amber-50 mt-3">HAIR IMPORTATION</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> Hair types, import from Asia</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> 20+ suppliers, shipping contacts</li>
            
            <li className="font-bold text-amber-50 mt-3">OKRIKA BUSINESS</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> 100+ wholesalers, manufacturers, payment methods</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> Bale grades knowledge</li>
            
            <li className="font-bold text-amber-50 mt-3">VIETNAM IMPORTATION</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> Vietnam basics, currency, quality checks</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> 20+ agents, 100+ suppliers, shipping fees</li>
            
            <li className="font-bold text-amber-50 mt-3">DUBAI & TURKEY</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> Business benefits, 100+ suppliers, manufacturers</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> 20+ exchangers, 10+ agents</li>
            
            <li className="font-bold text-amber-50 mt-3">BANGLADESH</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> Import basics, products, currency</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> 10+ suppliers, shipping, FOMO strategy</li>
            
            <li className="font-bold text-amber-50 mt-3">SHEIN & PAT PAT</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> Shein basics, products, currency</li>
            <li><Image src="/tick.png" alt="tick" width={16} height={16} className="inline mr-2" /> 10+ suppliers, shipping to Africa</li>
          </ul>
        </div>

              </div>

      <div className="text-center mt-12">
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
    </section>
  );
}
