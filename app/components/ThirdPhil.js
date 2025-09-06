// components/PartnerSec.jsx
"use client";
import Image from "next/image";

export default function PartnerSec() {
  return (
    <section className="w-full bg-white font-montserrat mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-16 xl:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Book Image */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative w-full max-w-[300px] lg:max-w-[350px]">
              {/* Better aspect ratio for desktop viewing */}
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: "2 / 3" }}>
                <Image
                  src="/book.webp"
                  alt="Mi Camino a Japón book cover"
                  fill
                  sizes="(min-width: 1024px) 350px, 300px"
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-2 text-center lg:text-left">
            <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black mb-6">Mi Camino a Japón</h2>
            
            <div className="space-y-6 text-black">
              <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-relaxed">
                The personal memoir of Álvaro Pérez Miranda, a Venezuelan who left his country at 17 to pursue a new life abroad. The book traces his journey of resilience and reinvention, from overcoming early struggles and societal rejection to becoming a successful restaurateur, art dealer, and Goodwill Ambassador for Japanese Cuisine.
              </p>
              <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-relaxed">
                More than a professional story, it is a testimony of growth, discipline, and respect for Japanese culture — written to inspire anyone who believes their dreams are out of reach.
              </p>
              
              {/* Fe y Alegría Logo/Badge */}
              <div className="flex justify-center lg:justify-start mt-8">
                <div className="relative w-32 h-24">
                  <Image
                    src="/feyt.webp"
                    alt="Fe y Alegría"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}