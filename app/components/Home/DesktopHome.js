// app/components/Home/DesktopHome.js

import Image from 'next/image';
import Link from 'next/link';

const desktopSectionsData = [
  {
    id: 1,
    backgroundImage: '/midoriebg.webp',
    logoImage: '/midorie.webp',
    alt: 'Wabi Sabi Dining Room Project',
    href: 'https://www.midoriemiami.com/', // External
  },
  {
    id: 2,
    backgroundImage: '/hayabgdesk.webp',
    logoImage: '/hiya.webp',
    alt: 'Modern Living Area Project',
    href: 'https://www.hiyakawamiami.com/', // External
  },
  {
    id: 3,
    backgroundImage: '/ogawabg.webp',
    logoImage: '/ogawalogo.webp',
    alt: 'Minimalist Interior Project',
    href: 'https://www.ogawamiami.com/', // External
  },
  {
    id: 4,
    backgroundImage: '/masabg.webp',
    logoImage: '/masayuki.webp',
    alt: 'Commercial Space Project',
    href: '/coming-soon/masayuki', // Internal
  },
  {
    id: 5,
    backgroundImage: '/kuribg.webp',
    logoImage: '/kuri.webp',
    alt: 'Exterior Architecture Project',
    href: '/coming-soon/kuri-kuri', // Internal
  },
];

export default function DesktopHome() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {desktopSectionsData.map((section) => {
        const isExternal = section.href.startsWith('http');

        const commonClasses = "relative block aspect-[384/801] group overflow-hidden";

        // Render a standard <a> tag for external links
        if (isExternal) {
          return (
            <a
              key={section.id}
              href={section.href}
              target="_blank"
              rel="noopener noreferrer"
              className={commonClasses}
            >
              {/* All visual content goes INSIDE the link */}
              <Image
                src={section.backgroundImage}
                alt={section.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                priority={section.id === 1}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-11/12 aspect-[357/287] bg-white/20 p-4">
                  <Image
                    src={section.logoImage}
                    alt={`${section.alt} logo`}
                    width={336}
                    height={271}
                    className="w-auto h-auto max-w-full max-h-full"
                  />
                </div>
              </div>
            </a>
          );
        }

        // Render a Next.js <Link> for internal links
        return (
          <Link
            key={section.id}
            href={section.href}
            className={commonClasses}
          >
            {/* All visual content goes INSIDE the link */}
            <Image
              src={section.backgroundImage}
              alt={section.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
              priority={section.id < 4}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center w-11/12 aspect-[357/287] bg-white/20 p-4">
                <Image
                  src={section.logoImage}
                  alt={`${section.alt} logo`}
                  width={336}
                  height={271}
                  className="w-auto h-auto max-w-full max-h-full"
                />
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}