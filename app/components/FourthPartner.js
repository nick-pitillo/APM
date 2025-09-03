// components/FourthPartner.jsx
"use client";
import Image from "next/image";

export default function FourthPartner() {
  return (
    <section className="w-full bg-white font-montserrat mt-4">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* RIGHT: Image (order-last on large screens) */}
          {/* This block is first in the code, so it will appear on top on mobile */}
          <div className="relative w-full lg:order-last">
            {/* preserve ~974x1130 ratio */}
            <div className="relative w-full" style={{ aspectRatio: "974 / 1130" }}>
              <Image
                src="/hiro2.webp"
                alt="Alvaro Perez Miranda"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* LEFT: Text (order-first on large screens) */}
          {/* This block is second, so it will appear below the image on mobile */}
          <div className="flex flex-col justify-start lg:order-first">
            <h2 className="text-[clamp(1.4rem,2.2vw,2.625rem)] font-medium text-black leading-tight">
            Hirokazu Asano
            </h2>
            <p className="mt-1 text-[clamp(1.1rem,1.8vw,2.125rem)] font-normal text-black">
            Corporate Chef
            </p>

            <div className="mt-4 space-y-6 text-black">
              <p className="text-[clamp(1rem,1.6vw,1.65rem)] font-light leading-snug">
                Born in Achiba, Japan, Chef Hirokazu graduated from Hattori Nutrition College 1984. Shortly after, he moved to New York to apprentice under the esteemed Hide-san within the same year. In 1988, he began training at a kaiseki sushi restaurant under the legendary Hiroshi Shimamura, where he dedicated six years to mastering traditional Japanese techniques and honing his craft as a sushi chef.
              </p>
              <p className="text-[clamp(1rem,1.6vw,1.65rem)] font-light leading-snug">
                Chef Hiro’s journey then took him to Miami, where he became the Executive Sushi Chef at Bond St. Miami. There, he broadened is culinary skills by incorporating French techniques, pastry, and hot dishes into his repertoire. His unwavering dedication to his craft shines through, no matter the level of experience.
              </p>
              <p className="text-[clamp(1rem,1.6vw,1.65rem)] font-light leading-snug">
                Chef Hiro later took on the role of Executive Sushi Chef at Katsuya Uechis ‘Katsuya’, leading his sushi concept at Katsuya SLS in South Beach, Baha Mar, and Brickell for 14 years.
              </p>
              <p className="text-[clamp(1rem,1.6vw,1.65rem)] font-light leading-snug">
                In his current role, Chef Hiro has joined the APM Restaurant Group as Corporate Chef, where he oversees the opening of Midorie concepts, while simultaneously managing concepts such as Wabi Sabi Miami and Hiyakawa Miami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}