import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vista Express Logistics - Importation Business Training",
  description: "Learn how to start and scale your profitable importation business with Vista Express Logistics Academy. Expert training on China, Vietnam, Dubai, Bangladesh importation with direct supplier contacts and proven strategies.",
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <a
          href="https://wa.me/2349121195283?text=Good%20day.%0A%0AI%27m%20interested%20in%20enrolling%20for%20the%20mini-importation%20business%20training"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-white rounded-full p-1 transition-colors"
        >
          <Image
            src="/whato.png"
            alt="WhatsApp"
            width={50}
            height={50}
            className="w-18 h-18"
          />
        </a>
      </body>
    </html>
  );
}
