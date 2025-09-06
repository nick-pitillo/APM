// components/PartnerSec.jsx
"use client";
import Image from "next/image";

export default function PartnerSec() {
  return (
    <section className="w-full bg-white font-montserrat mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 lg:justify-center lg:max-w-4xl lg:mx-auto gap-8 lg:gap-10">
          {/* RIGHT: Image (order-last on large screens) */}
          {/* This block is first in the code, so it will appear on top on mobile */}
          {/* Image only shows on mobile (hidden on lg and above) */}
          <div className="relative w-full lg:order-last lg:hidden">
            {/* preserve ~974x1130 ratio */}
            <div className="relative w-full" style={{ aspectRatio: "974 / 1130" }}>
              <Image
                src="/jov.webp"
                alt="Alvaro Perez Miranda"
                fill
                sizes="100vw"
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* LEFT: Text (order-first on large screens) */}
          {/* This block is second, so it will appear below the image on mobile */}
          <div className="flex flex-col justify-start lg:order-first lg:justify-center lg:items-center lg:text-center">
            <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black leading-tight">
            More Than a Handout
            </h2>

            {/* Pull Quote */}
            <div className="mt-8 p-6 border-l-4 border-gray-300 bg-gray-50 rounded-r-lg">
              <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-normal text-black italic leading-snug">
                "Give a man a fish and you feed him for a day. Teach him how to fish and you feed him for a lifetime."
              </p>
            </div>

            <div className="mt-8 space-y-6 text-black flex-1">
              <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-snug">
                Álvaro's goal was not to simply give resources, but to empower these young men with lasting skills. Through mentorship, discipline, and education, they began to transform their dream into something real.
              </p>
            </div>

            {/* Bottom Left Images */}
            <div className="flex items-end justify-center md:justify-start lg:justify-center gap-4 mt-5 mb-5">
              <div className="relative w-40 h-32">
                <Image
                  src="/fey.png"
                  alt="Michelin Star"
                  fill
                  className="object-contain"
                />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}