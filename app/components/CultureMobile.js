// components/CultureMobile.jsx
"use client";
import Image from "next/image";

export default function CultureMobile() {
  return (
    <section className="block md:hidden w-full bg-white font-montserrat mt-3">
      <div className="mx-auto max-w-[812px] px-4">
        {/* Heading */}
        <h2 className="text-center text-[clamp(0.9rem,1.4vw,1.45rem)]   font-medium text-black mb-6">
          The APM Culture
        </h2>

        {/* Block 1 */}
        <div className="text-center">
          {/* 810 × 448 image area */}
          <div className="relative w-full h-[20rem]">
            <Image
              src="/about/Rectangle 63.webp" // replace with your actual image
              alt="Growth & Development"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>

          <h3 className="mt-5 text-[clamp(0.9rem,1.4vw,1.45rem)]  font-normal text-black">Growth &amp; Development</h3>
          <p className="mt-2 text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-black leading-snug mx-auto max-w-[600px] px-14">
            Opportunities to advance across our diverse concepts, from vibrant neighborhood
            favorites to refined Michelin-starred dining.
          </p>
        </div>

        {/* Block 2 */}
        <div className="mt-5 text-center">
          <div className="relative w-full h-[20rem]">
            <Image
              src="/about/image 33.webp"
              alt="Immersive Training"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          <h3 className="mt-5 text-[clamp(0.9rem,1.4vw,1.45rem)] font-normal text-black">Immersive Training</h3>
          <p className="mt-2 text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-black leading-snug mx-auto max-w-[600px] px-14">
            Annual all expenses-paid trips to Japan for select team members, connecting directly
            with the source of our traditions.
          </p>
        </div>

        {/* Block 3 */}
        <div className="mt-5 text-center">
          <div className="relative w-full h-[20rem]">
            <Image
              src="/apm.webp"
              alt="Exceptional Care & Benefits"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          <h3 className="mt-5 text-[clamp(0.9rem,1.4vw,1.45rem)] font-normal text-black">Exceptional Care &amp; Benefits</h3>
          <p className="mt-2 text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-black leading-snug mx-auto max-w-[600px] px-14">
            At APM, we nurture our team&apos;s well-being with limited hours, select days of operation,
            and controlled seating for a healthy work–life balance.
          </p>
        </div>
      </div>
    </section>
  );
}
