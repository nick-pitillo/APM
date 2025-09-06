// components/PartnerSec.jsx
"use client";
import Image from "next/image";

export default function PartnerSec() {
  return (
    <section className="w-full bg-white font-montserrat mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20 block md:hidden lg:hidden xl:hidden">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 lg:justify-center lg:max-w-4xl lg:mx-auto gap-8 lg:gap-10">

          {/* Centered Content */}
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black leading-tight">
            Why This Matters
            </h2>

            <div className="mt-8 space-y-6 text-black flex-1 max-w-2xl">
              <div className="space-y-4">
                <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-snug text-center">
                  <strong>5 young men trained</strong> in barbering and business skills
                </p>
                <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-snug text-center">
                  <strong>100+ hours of business education</strong> covering entrepreneurship and financial literacy
                </p>
                <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-snug text-center">
                  <strong>First community-owned barbershop</strong> in La Vega, creating lasting economic impact
                </p>
              </div>
              
              <div className="mt-8 flex justify-center">
                <a
                  href="mailto:info@apmrestaurantgroup.com?subject=Support Future Projects"
                  className="inline-block bg-[#16469D] text-white px-6 py-3 rounded-lg text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium hover:bg-blue-700 transition-colors"
                >
                  Support Future Projects
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}