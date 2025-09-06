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
                src="/barberia.webp"
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
            A Dream Realized
            </h2>

            <div className="mt-8 space-y-6 text-black flex-1">
              <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-snug">
                This August, their vision comes to life with the opening of &ldquo;Jóvenes Barberos de La Vega.&rdquo; More than a barbershop, it is a symbol of empowerment, community, and the impact of mentorship.
              </p>
            </div>

            {/* Bottom Left Images */}
     
          </div>
        </div>
      </div>
    </section>
  );
}