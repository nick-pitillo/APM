// components/FounderHero.jsx
import Image from "next/image";

export default function FounderHero() {
  return (
    <section className="w-full bg-white font-montserrat mt-2">
      <div className="mx-auto max-w-[1800px] px-3 sm:px-4 lg:px-6 py-3 lg:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* LEFT: Image */}
          <div className="relative w-full">
            {/* preserve ~974x1130 ratio */}
            <div className="relative w-full" style={{ aspectRatio: "974 / 1130" }}>
              <Image
                src="/abouths.webp"
                alt="Alvaro Perez Miranda"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* RIGHT: Text */}
          <div className="relative flex flex-col justify-start lg:pl-2">
            <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black leading-tight">
              Alvaro Perez Miranda
            </h2>
          {/*   <p className="mt-1 text-[clamp(0.9rem,1.4vw,1.45rem)] font-normal text-black">
              Founder & Curator
            </p> */}

            <div className="mt-12 space-y-4 text-black">
              <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-snug">
                Alvaro Perez Miranda has cultivated a career that turns
                hospitality into art. Guided by the Japanese principles of
                omotenashi, komakai, and sensai, he brings an uncompromising
                dedication to quality, authenticity, and care.
              </p>
              <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-snug">
                Born in Venezuela, he studied art in the United States and Italy
                before moving to Tokyo, where he spent 15 years producing,
                building, and managing more than 70 restaurant projects.
              </p>
              <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-snug">
                In Miami he created APM Restaurant Group, a family of Japanese
                dining experiences united by craftsmanship and cultural respect.
                Under his leadership, Ogawa received a MICHELIN Star in its
                first year (2024) and was named the highest-rated fine dining
                restaurant in the United States. He is a Goodwill Ambassador for
                Japanese Cuisine and the Culinary Ambassador of Ibaraki.
              </p>
            </div>

            {/* Icon Image - Bottom Right */}
            <div className="absolute bottom-0 right-10 mb-8">
              <div className="relative w-42 h-42">
                <Image
                  src="/Japan.JPG"
                  alt="APM Icon"
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            </div>

{/* Badges */}{/* 
<div className="mt-6 w-full flex flex-wrap justify-start gap-3">
  {[
    "Michelin Star",
    "Goodwill Ambassador for Japanese Cuisine",
    "Culinary Ambassador of Ibaraki",
    "70+ projects in Japan",
  ].map((label) => (
    <span
      key={label}
      className="inline-flex items-center rounded-full border border-[#031E41] 
                 px-[clamp(0.5rem,2vw,1rem)] py-[clamp(0.25rem,1vw,0.5rem)] 
                 text-[clamp(0.8rem,1.4vw,1.2rem)] leading-tight 
                 font-light text-black text-center"
    >
      {label}
    </span>
  ))}
</div> */}






          </div>
        </div>
      </div>
    </section>
  );
}
