// components/PressStrip.jsx
"use client";
import Image from "next/image";
import Link from "next/link";

const LOGOS = [
  { 
    src: "/haute.webp", 
    alt: "Haute Living",
    url: "https://hauteliving.com/"
  },
  { 
    src: "/time.webp", 
    alt: "Time Out",
    url: "https://www.timeout.com/"
  },
  { 
    src: "/michelin.webp", 
    alt: "Michelin 2024",
    url: "https://guide.michelin.com/"
  },
  { 
    src: "/newtime.webp", 
    alt: "Miami New Times",
    url: "https://www.miaminewtimes.com/"
  },
  { 
    src: "/travel.webp", 
    alt: "World's Best Awards",
    url: "https://www.travelandleisure.com/worlds-best"
  },
  { 
    src: "/infatu.webp", 
    alt: "The Infatuation",
    url: "https://www.theinfatuation.com/"
  },
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
                const isLarge = logo.src === "/infatu.webp";
                const smallLogos = ["/haute.webp", "/michelin.webp", "/travel.webp"];
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
                  <Link
                    key={index}
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      relative mx-12 flex-shrink-0
                      flex items-center justify-center
                      transition-all duration-300 hover:scale-105
                      cursor-pointer
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
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}