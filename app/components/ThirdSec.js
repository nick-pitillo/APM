// components/ThirdSec.jsx
import Image from "next/image";

export default function ThirdSec() {
  return (
    <section className="w-full bg-white font-montserrat mt-4">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* LEFT: Image */}
          <div className="relative w-full">
            {/* preserve ~974x1130 ratio */}
            <div className="relative w-full" style={{ aspectRatio: "974 / 1130" }}>
              <Image
                src="/luis.webp"
                alt="Luis Martinez"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT: Text */}
          <div className="flex flex-col justify-start lg:pl-2">
            <h2 className="text-[clamp(1.4rem,2.2vw,2.625rem)] font-medium text-black leading-tight">
            Luis Martinez
            </h2>
            <p className="mt-1 text-[clamp(1.1rem,1.8vw,2.125rem)] font-normal text-black">
            Operations & Beverage Director
            </p>

            <div className="mt-4 space-y-6 text-black">
  <p className="text-[clamp(1rem,1.6vw,1.65rem)] font-light leading-snug">
    Luis Martinez was born in Havana, Cuba, before emigrating to Miami as a young child. While studying at Johnson & Wales University, he worked in restaurants around the world, eventually opening COMO Hotels in Miami Beach and training at Michelin-starred Ametsa with Arzak Instruction in London. It was there he discovered his true passion for wine service and hospitality.
  </p>
  <p className="text-[clamp(1rem,1.6vw,1.65rem)] font-light leading-snug">
    Returning to Miami, Luis worked under Michael Mina at Bourbon Steak before joining the opening team at Alter by Brad Kilgore in 2016. As General Manager and Sommelier, he became known for his inventive wine pairings, spotlighting small producers and innovative winemaking techniques. Under his leadership, Alter’s wine program was named one of the Top 100 in America by Wine Enthusiast for several years.
  </p>
  <p className="text-[clamp(1rem,1.6vw,1.65rem)] font-light leading-snug">
    In 2020, Luis partnered with Alvaro Perez Miranda and Masayuki Komatsu to open Hiyakawa in Wynwood, curating a beverage program rooted in Japanese hospitality and sake service. Most recently, he became a partner at Ogawa in Little River, which received its first MICHELIN Star shortly after opening in 2023. Today, as Director of Operations and Beverage Director at APM Restaurant Group, he oversees Wabi Sabi, Hiyakawa, Midorie, and Ogawa, continuing to build thoughtful beverage programs that elevate Japanese cuisine.
  </p>
</div>


      





          </div>
        </div>
      </div>
    </section>
  );
}
