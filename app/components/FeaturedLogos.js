// components/FeaturedLogos.jsx
"use client";
import React from "react";
import Image from "next/image";

// --- LOGO DATA (kept exactly as provided) ---
const LOGOS = [
  { id: 1, src: "/hiya.png",  alt: "Partner Logo 1", width: 328, height: 42  },
  { id: 2, src: "/midorie.png", alt: "Partner Logo 2", width: 183, height: 183 },
  { id: 3, src: "/ogawalogo.png", alt: "Partner Logo 3", width: 206, height: 161 },
  { id: 4, src: "/kuri.png", alt: "Partner Logo 4", width: 163, height: 163 },
  { id: 5, src: "/masayuki.png",  alt: "Partner Logo 5", width: 348, height: 73  },
  { id: 6, src: "/midorie.png", alt: "Partner Logo 2", width: 183, height: 183 },
];

export default function FeaturedLogos() {
  // Duplicate for seamless loop
  const extended = [...LOGOS, ...LOGOS];

  return (
    <>
      {/* Global keyframes + hover-pause + reduced motion */}
      <style jsx global>{`
        @keyframes scrollX {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          animation: scrollX 50s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @media (max-width: 767px) {
          .marquee-track {
            animation-duration: 10s;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            transform: translateX(0) !important;
          }
        }
      `}</style>

      <section className="flex h-[7rem] sm:h-[8rem] md:h-[10rem] lg:h-[17.5625rem] w-full items-center justify-center bg-[#16469D]">
        <div
          className="w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* The inner strip is 2x width because we duplicate the logos.
              We translate by -50% over the duration to make it seamless. */}
          <div className="marquee-track flex items-center">
            {extended.map((logo, i) => (
              <div
                key={`${logo.id}-${i}`}
                aria-hidden={i >= LOGOS.length ? "true" : "false"}
                className="flex-shrink-0 px-4 sm:px-8 md:px-12 lg:px-16" // responsive padding
                style={{
                  height: "281px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain w-full h-full"
                    unoptimized
                    priority={i < LOGOS.length}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
