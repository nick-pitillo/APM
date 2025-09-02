// components/CultureMobile.jsx
"use client";
import Image from "next/image";

export default function CultureMobile() {
  return (
    <section className="block md:hidden w-full bg-white py-10 font-montserrat">
      <div className="mx-auto max-w-[812px] px-4">
        {/* Heading */}
        <h2 className="text-center text-[clamp(1.4rem,2.2vw,2.625rem)]   font-medium text-black mb-14">
          The APM Culture
        </h2>

        {/* Block 1 */}
        <div className="text-center">
          <h3 className="text-[1.5rem] sm:text-[1.7rem] lg:text-[2.525rem]  font-normal text-black">Growth &amp; Development</h3>
          <p className="mt-2 text-[clamp(1rem,1.6vw,1.65rem)] font-light text-black leading-snug mx-auto max-w-[600px] px-14">
            Opportunities to advance across our diverse concepts, from vibrant neighborhood
            favorites to refined Michelin-starred dining.
          </p>

          {/* 810 × 448 image area */}
          <div className="relative mt-12 w-full h-[20rem]">
            <Image
              src="/about/Rectangle 63.png" // replace with your actual image
              alt="Growth & Development"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Block 2 */}
        <div className="mt-12 text-center">
          <h3 className="text-[1.5rem] sm:text-[1.7rem] lg:text-[2.525rem] font-normal text-black">Immersive Training</h3>
          <p className="mt-2 text-[clamp(1rem,1.6vw,1.65rem)] font-light text-black leading-snug mx-auto max-w-[600px] px-14">
            Annual all expenses-paid trips to Japan for select team members, connecting directly
            with the source of our traditions.
          </p>

          <div className="relative mt-12 w-full h-[20rem]">
            <Image
              src="/about/image 33.png"
              alt="Immersive Training"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Block 3 */}
        <div className="mt-12 text-center">
          <h3 className="text-[1.5rem] sm:text-[1.7rem] lg:text-[2.525rem] font-normal text-black">Exceptional Care &amp; Benefits</h3>
          <p className="mt-2 text-[clamp(1rem,1.6vw,1.65rem)]s font-light text-black leading-snug mx-auto max-w-[600px] px-14">
            At APM, we nurture our team’s well-being with limited hours, select days of operation,
            and controlled seating for a healthy work–life balance.
          </p>

          <div className="relative mt-12 w-full h-[20rem]">
            <Image
              src="/apm.jpeg"
              alt="Exceptional Care & Benefits"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
