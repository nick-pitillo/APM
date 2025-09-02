// components/PressStrip.jsx
"use client";
import Image from "next/image";

const LOGOS = [
  { src: "/haute.png", alt: "Haute Living" },
  { src: "/time.png", alt: "Time Out" },
  { src: "/michelin.png", alt: "Michelin 2024" },
  { src: "/newtime.png", alt: "Miami New Times" },
  { src: "/travel.png", alt: "World’s Best Awards" },
  { src: "/infatu.png", alt: "The Infatuation" },
];

export default function PressStrip() {
  // To create a seamless loop, we duplicate the logos array.
  const extendedLogos = [...LOGOS, ...LOGOS];

  return (
    <>
      {/* CSS for the smooth scrolling animation */}
      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
        
          animation: scroll 3s linear infinite;
        }
             @media (min-width: 768px) {
          .animate-scroll {
            animation-duration: 50s;
          }
        }
      `}</style>

      <section className="w-full bg-white py-8">
        <div className="mx-auto max-w-[1800px]">
          <div
            className="overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex items-center animate-scroll">
              {extendedLogos.map((logo, index) => {
                // Define the different size categories
                const isLarge = logo.src === "/infatu.png";
                const smallLogos = ["/haute.png", "/michelin.png", "/travel.png"];
                const isSmall = smallLogos.includes(logo.src);

                // Conditionally determine the size classes for each logo
                const sizeClasses = isLarge
                  ? "w-64 h-48"   // Large size for The Infatuation
                  : isSmall
                  ? "w-32 h-32"   // Made smaller again, as requested
                  : "w-52 h-40";  // Standard size for the rest

                // Conditionally determine the `sizes` prop for Next/Image optimization
                const sizesProp = isLarge
                  ? "(min-width: 768px) 256px, 35vw"
                  : isSmall
                  ? "(min-width: 768px) 128px, 18vw" // Updated for the new smaller size
                  : "(min-width: 768px) 208px, 25vw";

                return (
                  <div
                    key={index}
                    // 1. Spacing between logos increased
                    className={`
                      relative mx-12 flex-shrink-0
                      flex items-center justify-center
                      transition-all duration-300
                      ${sizeClasses}
                    `}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      sizes={sizesProp}
                      className="object-contain" // Keeps the logo's aspect ratio
                      priority={index < LOGOS.length}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}