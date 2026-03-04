import Image from "next/image";
import Getting from "./components/Getting";
import Trip from "./components/Trip";
import Youtube from "./components/Youtube";
import Experience from "./components/Experience";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen font-sans">
      {/* Top Banner */}
      <div className="bg-indigo-950 text-white text-center  px-6 mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Turn N10,000 into N300,000/Month with Importation</h2>
        <p className="mt-2 text-base sm:text-lg">Start your import business today even if you've never done it before.</p>
      </div>

      {/* Hero section */}
      <header className="flex flex-col items-center text-center  px-6">
        <Image
          src="/logo.jpeg"
          alt="Company Logo"
          width={520}
          height={120}
          className="mb-8 w-42 h-24 md:w-72 md:h-32"
        />
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
          Learn How to Import Profitable Goods from China Using Just Your Phone — No Travel Required
        </h1>
        <p className="mt-4 text-xl text-indigo-900 max-w-lg">
          Start and scale your importation business safely and confidently.
        </p>
        <a
          href="https://chat.whatsapp.com/HZEHASpVjCW6WEjxb8DxUV?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-colors"
        >
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={20}
            height={20}
            className="mr-2"
          />
          Join the WhatsApp Group
        </a>
      </header>

      {/* Reviews section */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-black">Reviews From My Students</h2>
        <Reviews />
      </section>

      {/* Training benefits heading */}
      <section className="pt-16 px-6">
        <h2 className="text-center text-2xl font-bold mb-12 text-black">
          Here&apos;s What You Will Get In This Training
        </h2>
      </section>

      <Trip/>
      <Getting/>
      <Youtube />
      <Experience />
    </div>
  );
}
