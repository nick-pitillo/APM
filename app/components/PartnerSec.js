// components/PartnerSec.jsx
"use client";
import Image from "next/image";

export default function PartnerSec() {
  return (
    <section className="w-full bg-white font-montserrat">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* RIGHT: Image (order-last on large screens) */}
          {/* This block is first in the code, so it will appear on top on mobile */}
          <div className="relative w-full lg:order-last">
            {/* preserve ~974x1130 ratio */}
            <div className="relative w-full" style={{ aspectRatio: "974 / 1130" }}>
              <Image
                src="/masa.webp"
                alt="Alvaro Perez Miranda"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* LEFT: Text (order-first on large screens) */}
          {/* This block is second, so it will appear below the image on mobile */}
          <div className="flex flex-col justify-start lg:order-first">
            <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black leading-tight">
            Masayuki Komatsu
            </h2>
            <p className="mt-1 text-[clamp(0.9rem,1.4vw,1.45rem)] font-normal text-black">
            Culinary Director
            </p>

            <div className="mt-12 space-y-6 text-black flex-1">
              <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-snug">
                Born in Osaka, Japan, Masayuki Komatsu has dedicated nearly two decades to perfecting the art of Edomae sushi. His culinary journey began at the renowned Sushiden in New York City before honing his skills as a Sushi Chef in Monaco. Later, he was handpicked by Chef Morimoto as Head Chef and relocated to Miami, where he remains steadfast in his commitment to Japanese tradition.
              </p>
              <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-snug">
                Chef Masa&apos;s philosophy revolves around showcasing ingredients at the peak of their seasonality, ensuring the highest quality and flavor profile in every dish. With an extensive network of relationships in Japan, he meticulously sources the finest ingredients from each prefecture year-round.
              </p>
              <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-snug">
                Chef Masa received his first Michelin Star in 2024 at Ogawa in Miami, Florida.
              </p>
            </div>

            {/* Bottom Left Images */}
            <div className="flex items-end justify-start ml-2 gap-4 mt-8 mb-4">
              <div className="relative w-40 h-32">
                <Image
                  src="/michelin.png"
                  alt="Michelin Star"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-40 h-32">
                <Image
                  src="/michelin25.png"
                  alt="Award 2"
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