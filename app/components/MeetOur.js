// components/MeetOur.jsx
import Image from "next/image";

const PEOPLE = [
  {
    name: "Miguelangel W.",
    role: "Manager",
    quote:
  "Being part of the APM group feels like family. We share a love for Japanese culture and embody Omotenashi, Sensai, and Komakai — creating lasting memories for our guests and ourselves.",
  img: "/miguel.webp",
    alt: "Chef portrait",
  },
  {
    name: "Lizette L.",
    role: "General Manager",
    quote:
    "Even without raw talent, this group stands among the industry’s best. Their relentless pursuit of excellence inspires me to keep learning, growing, and never settling.",
     img: "/lizette.webp",
    alt: "Lizette Locay portrait",
  },
  
  {
    name: "Jamie J.",
    role: "Chef de Cuisine, Hiyakawa",
    quote:
    "I was drawn to the authenticity of the cuisine, but fell in love with the authenticity of the people. Across every location, the culture is strong, giving me opportunities to grow, share my passion, and build together as dreamers, builders, and artists.",
  img: "/jamie.webp",
    alt: "Jamie portrait",
  },
  
];

export default function MeetOur() {
  return (
    <section className="w-full bg-white py-5 font-montserrat">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-20">
      <h2 className="text-center text-[2rem] sm:text-[1.85rem] md:text-[2.625rem] lg:text-[2.625rem] font-medium text-black">
  Meet Our People
</h2>


        {/* Grid */}
        <div className="mt-15 grid grid-cols-1 gap-y-12 md:gap-y-14 lg:grid-cols-3 lg:gap-x-16 xl:gap-x-24">
          {PEOPLE.map((p, index) => (
            <article key={`${p.name}-${index}`} className="mx-auto w-full max-w-[456px]">
              {/* Image */}
              <div className="relative w-full aspect-[456/448]">
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 456px, 90vw"
                />
              </div>

              {/* Text */}
              <div className="mt-6 text-black">
                <h3 className="text-[1.8rem] sm:text-[1.85rem] md:text-[2.625rem] lg:text-[2.625rem] font-medium leading-none">{p.name}</h3>
                <p className="mt-2  text-[clamp(1rem,1.6vw,1.65rem)] font-medium">{p.role}</p>
                <p className="mt-4  text-[1.1rem] sm:text-[1.4rem] lg:text-[1.65rem]  font-light italic leading-snug">
                  “{p.quote}”
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
