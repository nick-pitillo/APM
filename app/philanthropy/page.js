import React from 'react';
import FounderHero from '../components/FounderHero';
import PressStrip from '../components/PressStrip';
import Image from "next/image";
import Link from "next/link";
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import PartnerSec from '../components/PartnerSec';
import ThirdSec from '../components/ThirdSec';
import VideoPhil from '../components/VideoPhil';
import VideoPhilDesktop from '../components/VideoPhilDesktop';
import FourthPartner from '../components/FourthPartner';
import PhilVision from '../components/PhilVision';
import PhilResult from '../components/PhilResult';
import PhilLast from '../components/PhilLast';
const PRESS = [
  {
    id: "michelin-ogawa",
    outlet: "MICHELIN",
    title: "MICHELIN Guide: Ogawa",
    href: "https://guide.michelin.com/us/en/florida/miami/restaurant/ogawa-1204468",
    img: "/press/ogawa.webp", // thumb area
  },
  {
    id: "t+l-top-rated",
    outlet: "Travel + Leisure",
    title: "Travel + Leisure: Highest-Rated Fine Dining in the U.S.",
    href: "https://www.travelandleisure.com/ogawa-miami-florida-highest-rated-michelin-restaurant-in-the-us-8762818",
    img: "/press/travel.webp",
  },
  {
    id: "infatuation-ogawa",
    outlet: "The Infatuation",
    title: "The Infatuation: Ogawa Review",
    href: "https://www.theinfatuation.com/miami/reviews/ogawa",
    img: "/press/infa.webp",
  },
];

const RESTAURANTS = [
  { id: "kuri-kuri", name: "Kuri Kuri", comingSoon: true, city: "Miami, FL", img: "/about/kuri.webp", url: "/coming-soon/kuri-kuri" },
  { id: "midorie-cg", name: "Midorie", city: "Coconut Grove, FL", img: "/about/midorie-coco.webp", url: "https://www.midoriemiami.com/" },
  { id: "midorie-ms", name: "Midorie", city: "Miami Shores, FL", img: "/about/midorie-bts.webp", url: "https://www.midoriemiami.com/" },
  { id: "midorie-cg", name: "Midorie", comingSoon: true, city: "Miami Beach, FL", img: "/Sobem.webp", url: "https://www.midoriemiami.com/" },
  { id: "midorie-ms", name: "Midorie", comingSoon: true, city: "West Palm Beach, FL", img: "/westpalm.webp", url: "https://www.midoriemiami.com/" },
  { id: "masayuki", name: "Masayuki", comingSoon: true, city: "West Palm Beach, FL", img: "/about/image 18.webp", url: "/coming-soon/masayuki" },
  { id: "hiyakawa", name: "Hiyakawa", city: "Wynwood, FL", img: "/about/image 5.webp", url: "https://www.hiyakawamiami.com/" },
  { id: "ogawa", name: "Ogawa", city: "Little River, FL", img: "/about/ogawa.webp", url: "https://www.ogawamiami.com/" },
];

const PRINCIPLES = [
  {
    title: "Omotenashi",
    blurb: "Every guest is welcomed with warmth and care.",
  },
  {
    title: "Komakai",
    blurb: "Precision in every detail, seen and unseen.",
  },
  {
    title: "Sensai",
    blurb: "Sensitivity to season, setting, and experience.",
  }, 
];

const Page = () => {
  return (
    <>
      <div className="hidden md:block h-[278px]"></div>
      <div className="hidden md:block top-0 z-50 w-full">
        <Navbar />
      </div>
      {/* Mobile Navbar: A 'block' by default, but becomes 'hidden' on medium screens (md) and up. */}
      <div className="md:hidden h-[83px] sm:h-[80px] md:h-[80px] lg:h-[80px] xl:h-[80px]"></div>
      <div className="fixed top-0 z-50 w-full md:hidden">
        <MobileNavbar />
        {/* Give this a z-index that is higher than the navbar's */}
      </div>
      
      {/* Fixed spacing for all screens - matching DesktopHome */}
      <div className="hidden md:block h-4.5"></div>
      <div className="md:hidden h-9 sm:h-10 md:h-10 lg:h-10"></div>
      
      <div className="px-2 sm:px-2 lg:px-2">
        <section className="rounded-2xl w-full flex justify-center items-center bg-[#16469D] py-9 md:py-12 lg:py-12  xl:py-18 ">
          <div
            className="
              container mx-auto
              max-w-[1200px]
              px-4 sm:px-6 lg:px-8
              font-montserrat
              text-center
              flex flex-col items-center justify-center
            "
          >
            {/* Headline and Subheading */}
            <h1 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-white mb-4 max-w-[950px] mx-auto">
              Jóvenes Barberos de La Vega: From Dream to Reality
            </h1>
            <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-white leading-relaxed max-w-[950px] mx-auto">
              How mentorship, education, and determination turned a vision into a thriving barbershop.
            </p>
          </div>
        </section>
      </div>

      <VideoPhil />
      <VideoPhilDesktop />

     

      {/* Desktop-only */}
      <div className="px-2 sm:px-2 lg:px-2">
        <section className="rounded-2xl  px-2 sm:px-2 lg:px-2 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20 w-full bg-[#16469D] flex justify-center items-center py-11 md:py-12 lg:py-5  xl:py-7 ">
          <div className="w-full max-w-[917px] px-4 flex justify-center items-center">
            <div className="w-full text-white text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-relaxed text-center">
              <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-white mb-6">Where the Journey Began</h2>
              <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-white leading-relaxed">
                In 2023, during a book tour stop in El barrio de La Vega in Caracas, Álvaro Pérez Miranda met a community leader and a group of young men, ages 18–22, who dreamed of becoming barbers. Their ambition sparked a vision for mentorship and change.
              </p>
            </div>
          </div>
        </section>
      </div>

      <PhilVision />

      <div className="px-2 sm:px-2 lg:px-2 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20">
        <section className="rounded-2xl  w-full flex justify-center items-center bg-[#16469D] py-6 md:py-14 lg:py-14  xl:py-14">
          <div
            className="
              container mx-auto
              max-w-[1200px]
              px-4 sm:px-6 lg:px-8
              font-montserrat
              text-center
            "
          >
            {/* Title */}
            <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-white">
              From Students to Entrepreneurs
            </h2>

            {/* Description */}
            <p className="mt-6 text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-white leading-relaxed max-w-[900px] mx-auto">
              Over the past year, the group trained not only in barbering, but also in accounting, management, and entrepreneurship. They learned what it takes to cut hair — and to run a business.
            </p>
          </div>
        </section>
      </div>

     <PhilResult />
      
      <div className="px-2 sm:px-2 lg:px-2 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20">
        <section className="rounded-2xl w-full bg-[#16469D] font-montserrat py-7 px-6 md:px-12 lg:py-16 xl:py-16">
          <div className="mx-auto max-w-[1800px] text-white">
            {/* Title */}
            <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium mb-6 text-center">Looking Forward</h2>

            {/* Quote */}
            <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-relaxed max-w-[1600px] text-center mx-auto">
              "It is a true honor to witness their growth. This barbershop is only the beginning — a model for the kind of change we can bring to life, one community at a time." — Álvaro Pérez Miranda
            </p>
          </div>
        </section>
      </div>

      <PhilLast />
      
      <div className="px-2 sm:px-2 lg:px-2 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20">
        <section className="rounded-2xl w-full bg-[#16469D] font-montserrat  py-10 md:py-23 lg:py-23 xl:py-23 flex justify-center items-center">
          <div className="w-full flex justify-center items-center">
            <div className="text-center px-6 md:px-10 max-w-[1569px] mb-2">
              <h3 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-white">
                Culinary Mentorship Program
              </h3>
              <p className="mt-4 text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-white">
                APM Restaurant Group offers a transformative opportunity for a graduating Latinx hospitality or
                culinary professional: a stage at an APM restaurant and a fully funded study trip to Japan,
                guided by Alvaro Perez Miranda or a member of senior leadership.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="px-2 sm:px-2 lg:px-2"></div>
      <section className="w-full bg-white font-montserrat mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20 px-2">
        <div className="mx-auto max-w-[110rem] grid grid-cols-1 xl:grid-cols-2 gap-y-1 sm:gap-y-1 md:gap-y-10 lg:gap-y-10 xl:gap-y-10">
          {/* Image Block (Second on mobile, first on desktop) */}
          <div className="flex justify-center items-center px-4 sm:px-6 md:px-8 xl:justify-start xl:px-0">
            <div className="relative w-full max-w-[960px] aspect-[960/553]">
              <Image
                src="/cropped.webp"
                alt="APM Off Site"
                fill
                className="object-cover rounded-2xl"
                sizes="(min-width: 180px) 40vw, 80vw"
              />
            </div>
          </div>

          {/* Text Block (First on mobile, second on desktop) */}
          <div className="px-6 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20 text-black flex flex-col justify-center sm:px-10 xl:px-12">
            <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium ">APM Off Site</h2>
            <p className="mt-4 text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-snug max-w-[760px] ">
              Elevate your next event with off-site experiences crafted by APM
              Restaurant Group. Bespoke options for private dinners, corporate
              gatherings, and celebrations, including bento boxes and temaki bars.
            </p>
            <a
              href="mailto:info@apmrestaurantgroup.com"
              className="mt-6 inline-block font-light underline text-[clamp(0.9rem,1.4vw,1.45rem)]"
            >
              info@apmrestaurantgroup.com
            </a>
          </div>
        </div>
      </section>
    
      <div className="px-2 sm:px-2 lg:px-2 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20">
        <section className="rounded-2xl w-full bg-[#16469D] font-montserrat py-13 md:py-24 lg:py-24 xl:py-24 ">
          <div className="mx-auto max-w-[1800px] px-6 md:px-10">
            <h2 className="text-white text-center text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium">Blackship Gallery</h2>

            <p className="mt-5 text-center max-w-[100rem] text-white text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-relaxed">
              Founder Alvaro Perez Miranda curates accomplished and emerging Japanese
              artists. Visit the gallery next to Midorie 79 or on Instagram{" "}
              <a
                href="https://instagram.com/blackshipmoment"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                @blackshipmoment
              </a>
              .
            </p>
          </div>
        </section>
      </div>

      <section className="w-full bg-white font-montserrat mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20">
        <div className="mx-auto max-w-[1800px] px-6 md:px-10">
          <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] text-center font-medium text-black">Careers</h2>

          <div className="mt-4 space-y-2 text-[clamp(0.9rem,1.4vw,1.45rem)] leading-[1.6] text-black text-center">
            <p className="font-light">Join the APM Family</p>

            <p>
              <span className="font-medium">Growth &amp; Development</span>
              <span className="font-light"> — Unique opportunities across our concepts with clear paths for advancement.</span>
            </p>

            <p>
              <span className="font-medium">Immersive Training</span>
              <span className="font-light"> — Annual all-expenses-paid R&amp;D trip to Japan for select team members and ongoing training.</span>
            </p>

            <p>
              <span className="font-medium">Care &amp; Benefits</span>
              <span className="font-light"> — Limited hours and seating for balance, paid vacation, healthcare, and family meal.</span>
            </p>

            <p className="pt-2">
              <a
                href="mailto:careers@apmrestaurantgroup.com"
                className="text-[clamp(0.9rem,1.4vw,1.45rem)] underline font-light"
              >
                careers@apmrestaurantgroup.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="w-full font-montserrat mt-3 sm:mt-4 md:mt-4 lg:mt-22 xl:mt-22">
        {/* Aspect-ratio container: mobile -> desktop */}
        <div className="relative w-full aspect-[3240/2148] md:aspect-[4863/2154]">
          {/* Background image */}
          <Image
            src="/about/image 32.webp"
            alt="Explore opportunities at APM Restaurant Group"
            fill
            priority
            className="object-cover rounded-2xl px-2"   // fill the box, no distortion
            sizes="(min-width: 1024px) 100vw, 100vw"
          />

          {/* CTA button (bottom-centered) */}
          <div className="rounded-2xl absolute inset-0 flex items-end justify-center pb-10 sm:pb-14 md:pb-20">
            <a
              href="mailto:careers@apmrestaurantgroup.com"
              className="rounded-2xl grid place-items-center bg-[#16469D] text-white shadow-sm
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80
                         w-[clamp(16rem,22vw,22rem)] h-[clamp(3.25rem,4.5vw,4rem)] text-[clamp(0.9rem,1.4vw,1.45rem)]"
            >
              Explore Opportunities
            </a>
          </div>
        </div>
      </section>

      <section className="w-full bg-white font-montserrat py-10 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20 mb-2 sm:mb-10 md:mb-10 lg:mb:10 xl:mb-10">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 md:px-10">
          <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-center text-black">
            Gift Cards
          </h2>

          <p className="mt-6 mb-8 text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-center text-black leading-relaxed max-w-[1620px] px-8">
            APM Restaurant Group Gift Cards are the perfect gift for discerning palates.
            <br></br> Purchase at our locations. Online purchasing is coming soon.
          </p>
        </div>
      </section>
    </>
  );
};

export default Page;