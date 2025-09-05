// components/CultureOverlayGrid.jsx
"use client";
import React from "react";
import Image from "next/image";

const CultureOverlayGrid = () => {
  return (
    <section className="w-75vw bg-white py-[2.5vw] px-[6.7vw] hidden md:block lg:block">
      {/* Optional heading */}
      {/* <h2 className="text-center text-2xl font-semibold mb-10 text-black">The APM Culture</h2> */}

      {/* Grid: 2 cols on md+, stacked on mobile */}
      <div className="mx-auto max-w-none px-0 grid grid-cols-1 md:grid-cols-12 ">
        {/* Row 1: Text (left) / Image (right) */}
        <div className="md:col-span-6 flex items-center justify-center md:h-[23.3vw] h-[300px]">
          <div className="w-full max-w-[32vw] text-right">
            <h3 className="text-[clamp(0.9rem,1.4vw,1.45rem)]  font-normal leading-tight text-black">
              Growth &amp; Development
            </h3>
            <p className="mt-4 text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-snug text-black">
              Opportunities to advance across our diverse concepts, from vibrant
              neighborhood favorites to refined Michelin-starred dining.
            </p>
          </div>
        </div>

        <div className="md:col-span-6">
          {/* Top-right image (810×444 in the ref). Use real src when ready. */}
          <div className="relative w-full md:h-[23.3vw] h-[300px] ">
            <Image
              src="/about/Rectangle 63.png"
              alt="Growth & Development visual"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Row 2: Image (left) / Text (right) */}
        <div className="md:col-span-6 order-2 md:order-none">
          {/* Middle-left image (810×448 in the ref). */}
          <div className="relative w-full md:h-[23.55vw] h-[300px] ">
            <Image
              src="/about/image 33.png"
              alt="Immersive Training visual"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="md:col-span-6 flex items-center justify-center md:h-[23.55vw] h-[300px]">
          <div className="w-full max-w-[32vw] text-left">
            <h3 className="text-[clamp(0.9rem,1.4vw,1.45rem)] 
 font-normal leading-tight text-black">
              Immersive Training
            </h3>
            <p className="mt-4 text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-snug text-black">
              Annual all expenses-paid trips to Japan for select team members,
              connecting directly with the source of our traditions.
            </p>
          </div>
        </div>

        {/* Row 3: Text (left) / Image (right) */}
        <div className="md:col-span-6 flex items-center justify-center md:h-[23.55vw] h-[300px]">
          <div className="w-full max-w-[32vw] text-right">
            <h3 className="text-[clamp(0.9rem,1.4vw,1.45rem)]  font-normal leading-tight text-black">
              Exceptional Care &amp; Benefits
            </h3>
            <p className="mt-4 text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-snug text-black">
              At APM, we nurture our team’s well-being with limited hours,
              select days of operation, and controlled seating for a healthy
              work–life balance.
            </p>
          </div>
        </div>

        <div className="md:col-span-6">
          {/* Bottom-right image (810×448 in the ref). */}
          <div className="relative w-full md:h-[23.55vw] h-[300px] ">
            <Image
              src="/apm.jpeg"
              alt="Exceptional Care visual"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureOverlayGrid;
