import React from 'react';
import FounderHero from '../components/FounderHero';
import PressStrip from '../components/PressStrip';
import Image from "next/image";
import Link from "next/link";
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import PartnerSec from '../components/PartnerSec';
import ThirdSec from '../components/ThirdSec';
import FourthPartner from '../components/FourthPartner';
const PRESS = [
  {
    id: "michelin-ogawa",
    outlet: "MICHELIN",
    title: "MICHELIN Guide: Ogawa",
    href: "https://guide.michelin.com/us/en/florida/miami/restaurant/ogawa-1204468",
    img: "/press/ogawa.png", // thumb area
  },
  {
    id: "t+l-top-rated",
    outlet: "Travel + Leisure",
    title: "Travel + Leisure: Highest-Rated Fine Dining in the U.S.",
    href: "https://www.travelandleisure.com/ogawa-miami-florida-highest-rated-michelin-restaurant-in-the-us-8762818",
    img: "/press/travel.png",
  },
  {
    id: "infatuation-ogawa",
    outlet: "The Infatuation",
    title: "The Infatuation: Ogawa Review",
    href: "https://www.theinfatuation.com/miami/reviews/ogawa",
    img: "/press/infa.png",
  },
];

const RESTAURANTS = [
  { id: "kuri-kuri", name: "Kuri Kuri", comingSoon: true, city: "Miami, FL", img: "/about/kuri.png", url: "/coming-soon/kuri-kuri" },
  { id: "midorie-cg", name: "Midorie", city: "Coconut Grove, FL", img: "/about/midorie-coco.png", url: "https://www.midoriemiami.com/" },
  { id: "midorie-ms", name: "Midorie", city: "Miami Shores, FL", img: "/about/midorie-bts.png", url: "https://www.midoriemiami.com/" },
  { id: "midorie-cg", name: "Midorie", comingSoon: true, city: "Miami Beach, FL", img: "/Sobem.webp", url: "https://www.midoriemiami.com/" },
  { id: "midorie-ms", name: "Midorie", comingSoon: true, city: "West Palm Beach, FL", img: "/westpalm.webp", url: "https://www.midoriemiami.com/" },
  { id: "masayuki", name: "Masayuki", comingSoon: true, city: "West Palm Beach, FL", img: "/about/image 18.png", url: "/coming-soon/masayuki" },
  { id: "hiyakawa", name: "Hiyakawa", city: "Wynwood, FL", img: "/about/image 5.png", url: "https://www.hiyakawamiami.com/" },
  { id: "ogawa", name: "Ogawa", city: "Little River, FL", img: "/about/ogawa.png", url: "https://www.ogawamiami.com/" },
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
     <div className="hidden md:block h-48 xl:h-52"></div>
      <div className="hidden md:block top-0 z-50 w-full">
      
      <Navbar />
    </div>
    {/* Mobile Navbar: A 'block' by default, but becomes 'hidden' on medium screens (md) and up. */}
    <div className="md:hidden h-24"></div>
    <div className="fixed top-0 z-50 w-full md:hidden">
      <MobileNavbar />

      {/* Give this a z-index that is higher than the navbar's */}

    </div>
    <header className="w-full bg-white py-2 font-montserrat mt-16">

{/* An inner container to center the content and limit its max width. */}
<div className="container mx-auto px-4 py-20 text-center">

  {/* The main title - Font size now matches the reference */}
  <h1 className="text-[clamp(0.4rem,1.2vw,1.625rem)] font-extralight text-gray-900 font-montserrat">
  APM Restaurant Group is a Miami-based collection of award-winning Japanese restaurants, each reflecting a unique culinary concept and unwavering dedication to quality, authenticity, and impeccable service. All APM restaurants share the principles of omotenashi, komakai, and sensai. Founded by Alvaro Perez Miranda, APM brings the highest standards of Japanese cuisine with the warmth of Latin hospitality to South Florida, blending traditional artistry with a modern, sophisticated experience.Led by Masters
  </h1>

  {/* The separator line - Margin-top now matches the reference */}
  <hr className="mt-12 w-full max-w-5xl mx-auto border-t-1 border-[#16469D]" />

  {/* The subtitle remains, positioned below the updated line */}
  <h3 className='text-[clamp(1rem,1.6vw,1.65rem)] font-medium mt-5 text-black font-montserrat uppercase'>
    Omotenashi • Komakai • Sensai
  </h3>
</div>
</header>
<FounderHero />
<PressStrip />

   {/* Mobile-only (stacked) */}
   <section className="w-full bg-[#16469D] flex justify-center items-center lg:hidden py-12">
  <div className="w-full max-w-[917px] px-4 flex justify-center">
    <div className="grid gap-8 w-full max-w-[600px]">
      {PRINCIPLES.map((item) => (
        <div
          key={item.title}
          className="bg-white text-[#16469D] flex min-h-[12rem] flex-col items-center justify-center px-8 py-8 rounded-lg shadow-lg border-2 border-[#16469D]/10 mx-auto w-full"
          role="listitem"
        >
          <h3 className="font-montserrat font-bold text-[clamp(1.6rem,2.4vw,2.8rem)] leading-tight text-center mb-4">
            {item.title}
          </h3>
          <p className="font-montserrat font-medium text-[clamp(1.1rem,1.8vw,1.75rem)] leading-relaxed text-center max-w-[600px]">
            {item.blurb}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* Desktop-only (grid) */}
<section className="w-full bg-[#16469D] py-16 font-montserrat hidden md:hidden lg:block">
  <div className="mx-auto px-4 max-w-[1400px]">
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 gap-12 justify-center place-items-center">
        {PRINCIPLES.map((p) => (
          <div
            key={p.title}
            className="
              flex items-center justify-center rounded-lg bg-white text-[#16469D] shadow-lg
              px-8 py-8 aspect-square w-full max-w-[350px] min-h-[350px]
            "
          >
            <div className="text-center">
              <h3 className="text-[clamp(1.4rem,2.2vw,2.4rem)] font-bold leading-tight mb-4">{p.title}</h3>
              <p className="text-[clamp(1rem,1.6vw,1.4rem)] font-medium leading-relaxed">
                {p.blurb}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  <PartnerSec />



   <ThirdSec />
   <FourthPartner />
   <section className="w-full flex justify-center items-center bg-[#16469D] py-12 md:py-24">
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
    <h2 className="text-[clamp(1.4rem,2.2vw,2.625rem)] font-medium text-white">
      Sourcing at the Highest Level
    </h2>

    {/* Description */}
    <p className="mt-6 text-[clamp(1rem,1.6vw,1.65rem)] font-light text-white leading-relaxed max-w-[900px] mx-auto">
      All APM restaurants benefit from seafood flown daily from Tokyo's Toyosu
      Fish Market. As Culinary Ambassador of Ibaraki, Alvaro brings the
      prefecture's most sought-after ingredients directly to our kitchens. This
      care in sourcing, paired with discipline in technique and service, defines
      the APM experience.
    </p>
  </div>
</section>

    <section className="w-full bg-white py-10 font-montserrat">
      <div className="mx-auto max-w-[1800px] px-6 md:px-10">
        <h2 className="text-[clamp(1.4rem,2.2vw,2.625rem)] font-medium text-black mb-6">Restaurants</h2>

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3 mt-12">
          {RESTAURANTS.map((r) => {
            const cardContent = (
              <>
                {/* Image with the comp’s aspect */}
                <div className="relative w-full aspect-[558/309] bg-[#16469D]">
                  <Image
                    src={r.img.replace(/\.(png|jpe?g)$/i, '.webp')}
                    alt={r.name}
                    fill
                    className="object-cover"
                    sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                  />
                </div>

                {/* Text */}
                <div className="mt-3">
                  <h3 className="text-[clamp(1.4rem,2.2vw,2.625rem)] font-medium text-black">
                    {r.name}{" "}
                    {r.comingSoon && (
                      <span className="align-middle text-[1.125rem] font-light">
                        Coming Soon
                      </span>
                    )}
                  </h3>
                  <p className="text-[clamp(1rem,1.6vw,1.65rem)] font-light text-black">{r.city}</p>
                </div>
              </>
            );

            return (
              <article key={`${r.name}-${r.city}`} className="w-full">
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="block">
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
    <section className="w-full bg-[#16469D] font-montserrat py-14 px-6 md:px-12 mt-8">
      <div className="mx-auto max-w-[1800px] text-white">
        {/* Title */}
        <h2 className="text-[clamp(1.4rem,2.2vw,2.625rem)] font-medium mb-6">Events &amp; Buyouts</h2>

        {/* Intro text */}
        <p className="text-[clamp(1rem,1.6vw,1.65rem)] font-light leading-relaxed max-w-[1600px] mb-10">
          Host your next unforgettable event at one of our restaurants. Each
          space offers a distinct atmosphere with exceptional service and refined
          cuisine.
        </p>

        {/* Venues */}
        <div className="flex flex-wrap gap-x-20 gap-y-4 mb-10">
          <p className="text-[clamp(1rem,1.6vw,1.65rem)]">
            <span className="font-medium">Midorie Coconut Grove:</span>
            <span className="font-light"> 20</span>
          </p>
          <p className="text-[clamp(1rem,1.6vw,1.65rem)]">
            <span className="font-medium">Ogawa:</span>
            <span className="font-light"> 12</span>
          </p>
        </div>

        {/* Contact */}
        <a
          href="mailto:events@apmrestaurantgroup.com"
          className="text-[clamp(1rem,1.6vw,1.65rem)] font-medium underline"
        >
          events@apmrestaurantgroup.com
        </a>
      </div>
    </section>
    <section className="w-full bg-white font-montserrat mt-8">
      {/* The grid gap-y-10 adds vertical space between text and image on mobile */}
      <div className="mx-auto max-w-[110rem] grid grid-cols-1 xl:grid-cols-2 gap-y-10">
        {/* Text Block (First on mobile, second on desktop) */}
        <div className="px-6 py-12 text-black flex flex-col justify-center sm:px-10 xl:order-last xl:px-12">
          <h2 className="text-[clamp(1.4rem,2.2vw,2.625rem)] font-medium ">APM Off Site</h2>
          <p className="mt-4 text-[clamp(1rem,1.6vw,1.65rem)] font-light leading-snug max-w-[760px] ">
            Elevate your next event with off-site experiences crafted by APM
            Restaurant Group. Bespoke options for private dinners, corporate
            gatherings, and celebrations, including bento boxes and temaki bars.
          </p>
          <a
            href="mailto:info@apmrestaurantgroup.com"
            className="mt-6 inline-block font-light underline text-[clamp(1rem,1.6vw,1.65rem)]"
          >
            info@apmrestaurantgroup.com
          </a>
        </div>

        {/* Image Block (Second on mobile, first on desktop) */}
        {/*
          - Centered and responsive on mobile with proper spacing
          - `xl:mx-0` removes margin on desktop so the image block fills its column
        */}
        <div className="flex justify-center items-center px-4 sm:px-6 md:px-8 xl:px-0 xl:order-first">
          <div className="relative w-full max-w-[960px] aspect-[960/553]">
            <Image
              src="/about/offs.png"
              alt="APM Off Site"
              fill
              className="object-cover rounded-sm"
              sizes="(min-width: 1280px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="w-full bg-white font-montserrat py-10 pt-12">
      <div className="mx-auto max-w-[1800px] px-6 md:px-10">
        <h2 className="text-[clamp(1.4rem,2.2vw,2.625rem)] font-medium text-black">APM Gives</h2>

        <p className="mt-4 text-[clamp(1rem,1.6vw,1.65rem)]  font-light text-black max-w-[1620px]">
          We support local organizations through donations, culinary experiences, and hands-on participation.
        </p>

        <div className="mt-8 rounded border-2 border-black/30">
          <div className="px-8 py-6">
            <h3 className="text-[clamp(1.4rem,2.2vw,2.625rem)] font-medium text-black">
              Culinary Mentorship Program
            </h3>
            <p className="mt-2 text-[clamp(1rem,1.6vw,1.65rem)] font-light text-black max-w-[1569px]">
              APM Restaurant Group offers a transformative opportunity for a graduating Latinx hospitality or
              culinary professional: a stage at an APM restaurant and a fully funded study trip to Japan,
              guided by Alvaro Perez Miranda or a member of senior leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full bg-white font-montserrat py-10 mt-16 hidden lg:block">
      <div className="mx-auto max-w-[1800px] px-6">
        <div className="flex items-start justify-between">
          <h2 className="text-[clamp(1.4rem,2.2vw,2.625rem)] font-medium text-black">Press &amp; Accolades</h2>
          <p className="text-[clamp(1rem,1.6vw,1.65rem)] font-light text-black">
            Press inquiries:{" "}
            <a href="mailto:nicole@red-balloon.net" className="underline">
              nicole@red-balloon.net
            </a>
          </p>
        </div>

        <div className="mt-8 space-y-8">
          {PRESS.map((p) => (
            <article
              key={p.id}
              className="relative flex h-[265px] w-full items-stretch shadow-[4px_4px_1px_#CACACA] ring-1 ring-[#B7B7B7]"
            >
              {/* Left thumb */}
              <div className="relative h-full w-[445px] shrink-0">
                <Image src={p.img.replace(/\.(png|jpe?g)$/i, '.webp')} alt="" fill className="object-cover" />
              </div>

              {/* Right content */}
              <div className="flex w-full flex-col justify-center px-10">
                <p className="text-[1.375rem] font-light text-black">{p.outlet}</p>
                <h3 className="mt-1 text-[1.75rem] font-semibold leading-tight text-black max-w-[820px]">
                  {p.title}
                </h3>

                <Link
                  href={p.href}
                  className="mt-5 inline-block justify-center items-center text-center rounded-[2px] bg-[#16469D] px-5 py-3 text-[17px] font-medium text-white w-40"
                >
                  READ MORE
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View more CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/press"
            prefetch={false}
            className="inline-block bg-[#16469D] px-28 py-4 text-[1.625rem] font-semibold text-white"
          >
            VIEW MORE
          </Link>
        </div>
      </div>
    </section>
    {/* Press – Mobile (<= lg) */}
<section className="w-full  bg-white font-montserrat block  lg:hidden">
  <div className="mx-auto max-w-[950px] px-4">
    {/* Heading + email */}
    <h2 className="text-[1.6rem] font-medium text-black">Press &amp; Accolades</h2>
    <p className="mt-1 text-[1.125rem] font-light text-black">
      Press inquiries:{" "}
      <a href="mailto:nicole@red-balloon.net" className="underline">
        nicole@red-balloon.net
      </a>
    </p>

    {/* Cards */}
    <div className="mt-8 grid gap-6">
      {[
        {
          source: "MICHELIN",
          title: "MICHELIN Guide: Ogawa",
          href: "https://guide.michelin.com/us/en/florida/miami/restaurant/ogawa-1204468",
          img: "/press/ogawa.png",
        },
        {
          source: "Travel + Leisure",
          title: "Travel + Leisure: Highest-Rated Fine Dining in the U.S.",
          href: "https://www.travelandleisure.com/ogawa-miami-florida-highest-rated-michelin-restaurant-in-the-us-8762818",
          img: "/press/travel.png",
        },
        {
          source: "The Infatuation",
          title: "The Infatuation: Ogawa Review",
          href: "https://www.theinfatuation.com/miami/reviews/ogawa",
          img: "/press/infa.png",
        },
      ].map((item) => (
        <article key={item.title} className="w-full">
          {/* Image block */}
          <div className="relative w-full aspect-[16/9] rounded-[2px] overflow-hidden">
            <Image src={item.img.replace(/\.(png|jpe?g)$/i, '.webp')} alt={item.title} fill className="object-cover" />
          </div>

          {/* Caption */}
          <div className="w-full border border-[#E5E7EB]">
            <div className="px-3 py-3 mt-2">
              <p className="text-[clamp(1rem,1.6vw,1.65rem)] font-light leading-none text-black">
                {item.source}
              </p>
              <h3 className="mt-2 text-[clamp(1.4rem,2.2vw,2.625rem)] font-semibold leading-tight text-black">
                {item.title}
              </h3>

              <a
  href={item.href}
  className="mt-6 mb-2 inline-block rounded-[2px] bg-[#16469D] px-4 py-2 text-[clamp(12px,1.2vw,15px)] font-medium text-white"
>

                READ MORE
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>

    {/* View More */}
    <Link
      href="/press"
      prefetch={false}
      className="mt-6  mx-auto h-[clamp(48px,8vw,62.56px)] w-[70%] max-w-[400px] rounded-[2.93px] bg-[#16469D] text-[clamp(1.2rem,2.2vw,2.625rem)] font-medium text-white flex items-center justify-center"
    >
      VIEW MORE
    </Link>
  </div>
</section>

    <section className="w-full bg-[#16469D] font-montserrat py-10 mt-10">
      <div className="mx-auto max-w-[1800px] px-6 md:px-10">
        <h2 className="text-white text-[clamp(1.4rem,2.2vw,2.625rem)] font-medium">Blackship Gallery</h2>

        <p className="mt-5 max-w-[100rem] text-white text-[clamp(1rem,1.6vw,1.65rem)] font-light leading-relaxed">
          Founder Alvaro Perez Miranda curates accomplished and emerging Japanese
          artists. Visit the gallery next to Wabi Sabi or on Instagram{" "}
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
    <section className="w-full bg-white font-montserrat py-12 mt-8">
      <div className="mx-auto max-w-[1800px] px-6 md:px-10">
        <h2 className="text-[clamp(1.4rem,2.2vw,2.625rem)] font-medium text-black">Careers</h2>

        <div className="mt-6 space-y-5 text-[clamp(1rem,1.6vw,1.65rem)] leading-[1.6] text-black">
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
              className="underline font-light"
            >
              careers@apmrestaurantgroup.com
            </a>
          </p>
        </div>
      </div>
    </section>
    <section className="w-full font-montserrat mt-8">
  {/* Aspect-ratio container: mobile -> desktop */}
  <div className="relative w-full aspect-[3240/2148] md:aspect-[4863/2154]">
    {/* Background image */}
    <Image
      src="/about/image 32.png"
      alt="Explore opportunities at APM Restaurant Group"
      fill
      priority
      className="object-cover"   // fill the box, no distortion
      sizes="(min-width: 1024px) 100vw, 100vw"
    />

    {/* CTA button (bottom-centered) */}
    <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-14 md:pb-20">
      <a
        href="mailto:careers@apmrestaurantgroup.com"
        className="grid place-items-center rounded-[3px] bg-[#16469D] text-white shadow-sm
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80
                   w-[16rem] h-[3.25rem] text-[1.125rem]
                   sm:w-[18rem] sm:h-[3.5rem] sm:text-[1.25rem]
                   md:w-[20rem] md:h-[3.75rem] md:text-[1.35rem]
                   lg:w-[22rem] lg:h-[4rem] lg:text-[1.5rem]"
      >
        Explore Opportunities
      </a>
    </div>
  </div>
</section>

<section className="w-full bg-white font-montserrat py-10 mt-8">
  <div className="mx-auto max-w-[1800px] px-4 sm:px-6 md:px-10">
    <h2 className="text-[clamp(1.4rem,2.2vw,2.625rem)] font-medium text-black">
      Gift Cards
    </h2>

    <p className="mt-6 mb-8 text-[clamp(1rem,1.6vw,1.65rem)] font-light text-black leading-relaxed max-w-[1620px]">
      APM Restaurant Group Gift Cards are the perfect gift for discerning palates.
      Purchase at our locations. Online purchasing is coming soon.
    </p>
  </div>
</section>

    </>
  );
};

export default Page;