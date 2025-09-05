// app/components/Home/DesktopHome.js

import Image from 'next/image';

const desktopSectionsData = [
  {
    id: 1,
    backgroundImage: '/midoriebg.webp',
    logoImage: '/midorie.webp',
    alt: 'Wabi Sabi Dining Room Project',
  },
  {
    id: 2,
    backgroundImage: '/hayabgdesk.webp',
    logoImage: '/hiya.webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 3,
    backgroundImage: '/ogawabg.webp',
    logoImage: '/ogawalogo.webp',
    alt: 'Minimalist Interior Project',
  },
  {
    id: 4,
    backgroundImage: '/masabg.webp',
    logoImage: '/masayuki.webp',
    alt: 'Commercial Space Project',
  },
  {
    id: 5,
    backgroundImage: '/kuribg.webp',
    logoImage: '/kuri.webp',
    alt: 'Exterior Architecture Project',
  },
];

export default function DesktopHome() {
  return (
    // The grid container remains, creating the responsive 5-column layout.
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {desktopSectionsData.map((section) => (
        // THE FIX: The `border-4` and `border-[#16469D]` classes have been removed from this line.
        <div
          key={section.id}
          className="relative aspect-[384/801] group overflow-hidden"
        >
          {/* The background image with its subtle hover effect remains. */}
          <Image
            src={section.backgroundImage}
            alt={section.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
            priority={section.id < 4}
          />

          {/* The always-visible overlay container. */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex items-center justify-center w-11/12 
                         aspect-[357/287] bg-white/20 p-4"
            >
              <Image
                src={section.logoImage}
                alt={`${section.alt} logo`}
                width={336}
                height={271}
                className="w-auto h-auto max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}