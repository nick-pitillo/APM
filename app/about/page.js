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
    <div className="px-2 sm:px-2 lg:px-2">
      <section className="rounded-2xl mb-15 w-full flex justify-center items-center bg-[#16469D] py-20 md:py-12">
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
        {/* Description */}
        <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-white leading-relaxed max-w-[950px] mx-auto">
          APM Restaurant Group is a Miami-based collection of award-winning Japanese restaurants, each reflecting a unique culinary concept and unwavering dedication to quality, authenticity, and impeccable service. 
          <br /><br />
          Founded by Alvaro Perez Miranda, APM brings the highest standards of Japanese cuisine with the warmth of Latin hospitality to South Florida, blending traditional artistry with a modern, sophisticated experience.
        </p>
      </div>
    </section>
    </div>
<FounderHero />{/* 
<PressStrip /> */}

   {/* Mobile-only (stacked) */}
   <section className="w-full bg-[#16469D] flex justify-center items-center lg:hidden py-12 md:py-24">
  <div className="w-full max-w-[917px] px-4 flex justify-center">
    <div className="w-full max-w-[600px] text-white text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-relaxed">
        <p className="mb-4">All APM Restaurants share the same principles of:</p>
        <ul className="list-disc list-inside space-y-2">
            <li><span className="font-medium">Omotenashi;</span> heartfelt, attentive hospitality</li>
            <li><span className="font-medium">Komakai;</span> precision in every detail, seen and unseen</li>
            <li><span className="font-medium">Sensai;</span> Delicate perception &amp; awareness</li>
        </ul>
    </div>
  </div>
</section>


{/* Desktop-only */}
<div className="px-2 sm:px-2 lg:px-2">
<section className="rounded-2xl  px-2 sm:px-2 lg:px-2 mt-15 mb-12 w-full bg-[#16469D] hidden lg:flex justify-center items-center py-12">
 <div className="w-full max-w-[917px] px-4 flex justify-center items-center">
   <div className="w-full max-w-[600px] text-white text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-relaxed text-center">
       <p className="mb-4">All APM Restaurants share the same principles of:</p>
       <ul className="list-none space-y-2 text-left inline-block">
           <li className="relative pl-8 leading-relaxed">
               <span className="absolute left-0 top-0 text-blue-300 font-bold">•</span>
               <span className="font-medium">Omotenashi;</span> heartfelt, attentive hospitality
           </li>
           <li className="relative pl-8 leading-relaxed">
               <span className="absolute left-0 top-0 text-blue-300 font-bold">•</span>
               <span className="font-medium">Komakai;</span> precision in every detail, seen and unseen
           </li>
           <li className="relative pl-8 leading-relaxed">
               <span className="absolute left-0 top-0 text-blue-300 font-bold">•</span>
               <span className="font-medium">Sensai;</span> Delicate perception &amp; awareness
           </li>
       </ul>
   </div>
 </div>
</section>
</div>
  <PartnerSec />



  <div className="px-2 sm:px-2 lg:px-2">
  <section className="rounded-2xl mt-13 mb-12 w-full flex justify-center items-center bg-[#16469D] py-4 md:py-8">
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
      Sourcing at the Highest Level
    </h2>

    {/* Description */}
    <p className="mt-6 text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-white leading-relaxed max-w-[900px] mx-auto">
      All APM restaurants benefit from seafood flown daily from Tokyo's Toyosu
      Fish Market. As Culinary Ambassador of Ibaraki, Alvaro brings the
      prefecture's most sought-after ingredients directly to our kitchens. This
      care in sourcing, paired with discipline in technique and service, defines
      the APM experience.
    </p>
  </div>
</section>
</div>

   <ThirdSec />
   <div className="px-2 sm:px-2 lg:px-2">
   <section className="rounded-2xl w-full bg-[#16469D] font-montserrat py-10 px-6 md:px-12 mt-12 mb-13">
      <div className="mx-auto max-w-[1800px] text-white">
        {/* Title */}
        <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium mb-6 text-center">Events &amp; Buyouts</h2>

        {/* Intro text */}
        <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-relaxed max-w-[1600px] mb-4 text-center mx-auto">
          Host your next unforgettable event at one of our restaurants. <br></br>Each
          space offers a distinct atmosphere with exceptional service and refined
          cuisine.
        </p>

        {/* Venues */}
       

        {/* Contact */}
        <a
          href="mailto:events@apmrestaurantgroup.com"
          className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium underline text-center block mx-auto w-fit"
        >
          events@apmrestaurantgroup.com
        </a>
      </div>
    </section>
    </div>
   <FourthPartner />
   <div className="px-2 sm:px-2 lg:px-2">
       <section className="rounded-2xl w-full bg-[#16469D] font-montserrat mt-13 mb-13 py-15 flex justify-center items-center">
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
    <section className="w-full bg-white font-montserrat mt-23 mb-23 px-2">
      <div className="mx-auto max-w-[110rem] grid grid-cols-1 xl:grid-cols-2 gap-y-10">
        {/* Image Block (Second on mobile, first on desktop) */}
        {/*
          - Centered and responsive on mobile with proper spacing
          - Image on left for desktop layout
        */}
        <div className="flex justify-center items-center px-4 sm:px-6 md:px-8 xl:justify-start xl:px-0">
          <div className="relative w-full max-w-[960px] aspect-[960/553]">
            <Image
              src="/cropped.jpeg"
              alt="APM Off Site"
              fill
              className="object-cover rounded-2xl"
              sizes="(min-width: 180px) 40vw, 80vw"
            />
          </div>
        </div>

        {/* Text Block (First on mobile, second on desktop) */}
        <div className="px-6 py-12 text-black flex flex-col justify-center sm:px-10 xl:px-12">
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
  
    
   <div className="px-2 sm:px-2 lg:px-2">
    <section className="rounded-2xl w-full bg-[#16469D] font-montserrat py-12 mt-13 mb-2">
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
    <section className="w-full bg-white font-montserrat py-12 ">
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
    <section className="w-full font-montserrat mt-3">
  {/* Aspect-ratio container: mobile -> desktop */}
  <div className="relative w-full aspect-[3240/2148] md:aspect-[4863/2154]">
    {/* Background image */}
    <Image
      src="/about/image 32.png"
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
        className="rounded-2xl grid place-items-center rounded-2xl bg-[#16469D] text-white shadow-sm
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80
                   w-[clamp(16rem,22vw,22rem)] h-[clamp(3.25rem,4.5vw,4rem)] text-[clamp(0.9rem,1.4vw,1.45rem)]"
      >
        Explore Opportunities
      </a>
    </div>
  </div>
</section>

<section className="w-full bg-white font-montserrat py-10 mt-3">
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