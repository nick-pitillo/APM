// app/components/MobileHome.js

import Image from 'next/image';
import Link from 'next/link'; // 1. Import the Link component

// 2. Add the `href` property to each object for navigation
const homeSectionsData = [
  {
    id: 1,
    backgroundImage: '/midoriem.webp',
    logoImage: '/midorie.webp',
    alt: 'Wabi Sabi Dining Room Project',
    href: 'https://www.midoriemiami.com/', // External
  },
  {
    id: 2,
    backgroundImage: '/hiyam.webp',
    logoImage: '/hiya.webp',
    alt: 'Modern Living Area Project',
    href: 'https://www.hiyakawamiami.com/', // External
  },
  {
    id: 3,
    backgroundImage: '/ogawam.webp',
    logoImage: '/ogawalogo.webp',
    alt: 'Minimalist Interior Project',
    href: 'https://www.ogawamiami.com/', // External
  },
  {
    id: 4,
    backgroundImage: '/masam.webp',
    logoImage: '/masayuki.webp',
    alt: 'Commercial Space Project',
    href: '/coming-soon/masayuki', // Internal
  },
  {
    id: 5,
    backgroundImage: '/kurim.webp',
    logoImage: '/kuri.webp',
    alt: 'Exterior Architecture Project',
    href: '/coming-soon/kuri-kuri', // Internal
  },
];

export default function MobileHome() {
  return (
    <section className="flex flex-col bg-white">
      {homeSectionsData.map((section) => {
        // 3. Check if the link is external
        const isExternal = section.href.startsWith('http');
        
        // Define the classes for the link container
        const commonClasses = "relative block w-full";

        // 4. Render the correct link type (<a> or <Link>)
        if (isExternal) {
          return (
            <a
              key={section.id}
              href={section.href}
              target="_blank"
              rel="noopener noreferrer"
              className={commonClasses}
            >
              {/* All visual content is nested inside the link */}
              <Image
                src={section.backgroundImage}
                alt={section.alt}
                width={1080}
                height={508}
                className="w-full h-auto"
                priority={section.id === 1}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-1/3 aspect-[357/312] bg-white/20 p-4">
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

        return (
          <Link
            key={section.id}
            href={section.href}
            className={commonClasses}
          >
            {/* All visual content is nested inside the link */}
            <Image
              src={section.backgroundImage}
              alt={section.alt}
              width={1080}
              height={508}
              className="w-full h-auto"
              priority={section.id === 1}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center w-1/3 aspect-[357/312] bg-white/20 p-4">
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