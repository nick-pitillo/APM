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
import PhilGrid from '../components/PhilGrid';
import ThirdPhil from '../components/ThirdPhil';
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
        <section className="rounded-2xl w-full flex justify-center items-center bg-[#16469D] py-9 md:py-12 lg:py-12 xl:py-8">
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
            <h1 className="text-[clamp(1.2rem,2.2vw,2.5rem)] font-medium text-white mb-6 max-w-[950px] mx-auto leading-tight">
              Jóvenes Barberos de La Vega: From Dream to Reality
            </h1>
            <p className="text-[clamp(1rem,1.6vw,1.8rem)] font-light text-white leading-relaxed max-w-[950px] mx-auto">
              How mentorship, education, and determination turned a vision into a thriving barbershop.
            </p>
          </div>
        </section>
      </div>

      <VideoPhil />
      <VideoPhilDesktop />

     <PhilGrid />

      {/* Mobile: Cultivating Prosperity - Desktop: Where the Journey Began */}
      <div className="px-2 sm:px-2 lg:px-2 block md:hidden lg:hidden xl:hidden">
        <section className="rounded-2xl px-2 sm:px-2 lg:px-2 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20 w-full bg-[#16469D] flex justify-center items-center py-11 md:py-12 lg:py-5 xl:py-7 ">
          <div className="w-full max-w-[917px] px-4 flex justify-center items-center">
            <div className="w-full text-white text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-relaxed text-center">
              <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-white mb-6">Cultivating Prosperity</h2>
              <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-white leading-relaxed">
                Álvaro met motivated young men during his Caracas book tour—it sparked a mission of mentorship and transformation.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Desktop: Where the Journey Began */}
      <div className="px-2 sm:px-2 lg:px-2 hidden md:block lg:block xl:block">
        <section className="rounded-2xl mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20 w-full bg-[#16469D] flex justify-center items-center py-11 md:py-12 lg:py-12 xl:py-12">
          <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="w-full text-white font-montserrat text-center">
              <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-white mb-6">Where the Journey Began</h2>
              <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-white leading-relaxed max-w-[950px] mx-auto">
                In 2023, during a book tour stop in El barrio de La Vega in Caracas, Álvaro Pérez Miranda met a community leader and a group of young men, ages 18–22, who dreamed of becoming barbers. Their ambition sparked a vision for mentorship and change.
              </p>
            </div>
          </div>
        </section>
      </div>

      <PhilVision />

      {/* Mentorship Ethos - Pull Quote Section */}
      <div className="px-2 sm:px-2 lg:px-2 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20">
        <section className="rounded-2xl w-full bg-white font-montserrat py-10 md:py-16 lg:py-16 xl:py-16">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
            {/* Pull Quote */}
            <blockquote className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black leading-tight mb-8 max-w-[900px] mx-auto italic">
              &ldquo;Give a man a fish and you feed him for a day. Teach him how to fish and you feed him for a lifetime.&rdquo;
            </blockquote>
            
            {/* Supporting Copy */}
            <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-gray-700 leading-relaxed max-w-[800px] mx-auto">
              This ancient wisdom guides Álvaro&apos;s commitment to forge lasting outcomes through education—not handouts. True change comes through empowerment, skills, and the confidence to build one&apos;s own future.
            </p>
          </div>
        </section>
      </div>

      <div className="hidden md:block lg:block xl:block">
<ThirdPhil />
</div>
      {/* Transformation Section - Mobile */}
      <div className="px-2 sm:px-2 lg:px-2 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20 block md:hidden lg:hidden xl:hidden">
        <section className="rounded-2xl w-full flex justify-center items-center bg-[#16469D] py-8 md:py-14 lg:py-14 xl:py-14">
          <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 font-montserrat text-center">
            {/* Title */}
            <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-white mb-6">
              From Students to Entrepreneurs
            </h2>

            {/* Description */}
            <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-white leading-relaxed max-w-[900px] mx-auto">
              Over the past year, the group trained not only in barbering, but also in accounting, management, and entrepreneurship. They learned what it takes to cut hair — and to run a business.
            </p>
          </div>
        </section>
      </div>

      {/* Transformation Section - Desktop */}
      <div className="px-2 sm:px-2 lg:px-2 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20 hidden md:block lg:block xl:block">
        <section className="rounded-2xl w-full flex justify-center items-center bg-[#16469D] py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 font-montserrat text-center">
            {/* Title */}
            <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-white mb-6">
              From Students to Entrepreneurs
            </h2>

            {/* Description */}
            <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-white leading-relaxed max-w-[950px] mx-auto mb-6">
              Over the past year, the group trained not only in barbering, but also in accounting, management, and entrepreneurship. They learned what it takes to cut hair — and to run a business.
            </p>
            
            {/* Additional context for desktop */}
            <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-white/90 leading-relaxed max-w-[900px] mx-auto">
              This comprehensive education program equipped them with both technical skills and business acumen, preparing them not just to work, but to lead and create opportunities for others in their community.
            </p>
          </div>
        </section>
      </div>

      {/* Achievement Section - A Dream Realized */}
      <div className="px-2 sm:px-2 lg:px-2 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20">
        <section className="rounded-2xl w-full bg-white font-montserrat py-10 md:py-16 lg:py-16 xl:py-16">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
            {/* Title */}
            <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black mb-6">A Dream Realized</h2>
            
            {/* Description */}
            <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-gray-700 leading-relaxed max-w-[950px] mx-auto mb-8">
              In August 2024, the dream became reality. Jóvenes Barberos de La Vega opened its doors as a community milestone, representing far more than a business—it&apos;s a symbol of what&apos;s possible when education meets opportunity.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-[900px] mx-auto">
              <div className="text-center">
                <div className="text-[clamp(2rem,3vw,3.5rem)] font-semibold text-[#16469D] mb-2">5</div>
                <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black">Young men trained in barbering and business</p>
              </div>
              
              <div className="text-center">
                <div className="text-[clamp(2rem,3vw,3.5rem)] font-semibold text-[#16469D] mb-2">100+</div>
                <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black">Hours of business education completed</p>
              </div>
              
              <div className="text-center">
                <div className="text-[clamp(2rem,3vw,3.5rem)] font-semibold text-[#16469D] mb-2">1st</div>
                <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black">Community-owned barbershop in La Vega</p>
              </div>
            </div>
          </div>
        </section>
      </div>

     <PhilResult />
      
      {/* Looking Forward - Mobile */}
      <div className="px-2 sm:px-2 lg:px-2 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20 block md:hidden lg:hidden xl:hidden">
        <section className="rounded-2xl w-full bg-[#16469D] font-montserrat py-10 px-6 md:px-12 lg:py-16 xl:py-16">
          <div className="mx-auto max-w-[1200px] text-white text-center">
            {/* Title */}
            <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium mb-6">Looking Forward</h2>

            {/* Quote */}
            <blockquote className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-relaxed italic mb-4">
              &ldquo;This barbershop is only the beginning — a model for the kind of change we can bring to life, one community at a time.&rdquo;
            </blockquote>
            
            {/* Attribution */}
            <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-white/90">
              — Álvaro Pérez Miranda
            </p>
          </div>
        </section>
      </div>

      {/* Looking Forward - Desktop */}
      <div className="px-2 sm:px-2 lg:px-2 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20 hidden md:block lg:block xl:block">
        <section className="rounded-2xl w-full bg-[#16469D] font-montserrat py-10 md:py-16 lg:py-16 xl:py-16">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-white text-center">
            {/* Title */}
            <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium mb-8">Looking Forward</h2>

            {/* Quote */}
            <blockquote className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-relaxed italic mb-6 max-w-[1000px] mx-auto">
              &ldquo;It is a true honor to witness their growth. This barbershop is only the beginning — a model for the kind of change we can bring to life, one community at a time.&rdquo;
            </blockquote>
            
            {/* Attribution */}
            <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-white/90">
              — Álvaro Pérez Miranda
            </p>
          </div>
        </section>
      </div>

      <PhilLast />

      {/* Mi Camino a Japón Book Section */}
      <div className="px-2 sm:px-2 lg:px-2 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20">
        <section className="rounded-2xl w-full bg-white font-montserrat py-10 md:py-16 lg:py-16 xl:py-16">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Book Image */}
              <div className="flex justify-center lg:justify-start order-1 lg:order-1">
                <div className="relative">
                  <Image
                    src="/book.jpg"
                    alt="Mi Camino a Japón book cover"
                    width={300}
                    height={400}
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-2 lg:order-2 text-center lg:text-left">
                <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black mb-6">His Story in Print: Mi Camino a Japón</h2>
                
                <div className="space-y-6 text-black">
                  <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-relaxed">
                    A memoir of resilience, cross-cultural discovery, and the hospitality journey that led to becoming Goodwill Ambassador for Japanese Cuisine. Álvaro&apos;s story bridges cultures and communities through personal transformation.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black mb-4">Philanthropic Impact</h3>
                    <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-gray-700 mb-4">
                      100% of book proceeds support Fe y Alegría, a Jesuit-founded international movement providing quality education to marginalized youth globally across 22 countries.
                    </p>
                    
                    {/* Fe y Alegría Logo placeholder - you'll need to add the actual logo */}
                    <div className="flex justify-center lg:justify-start mt-4">
                      <div className="bg-gray-200 px-6 py-3 rounded-md">
                        <span className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-gray-600">Fe y Alegría</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      
      <div className="block md:hidden lg:hidden xl:hidden">
<ThirdPhil />
</div>

      {/* Art as Cultural Bridge: Blackship Gallery */}
      <div className="px-2 sm:px-2 lg:px-2 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20">
        <section className="rounded-2xl w-full bg-white font-montserrat py-10 md:py-16 lg:py-16 xl:py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            {/* Blackship Logo */}
            <div className="mb-8">
              <Image
                src="/blackship.webp"
                alt="Blackship Gallery"
                width={140}
                height={70}
                className="object-contain mx-auto"
              />
            </div>

            <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black leading-tight mb-6">Art as Cultural Bridge: Blackship Gallery</h2>
            
            <div className="space-y-6 text-black max-w-4xl mx-auto">
              <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-relaxed">
                Through Blackship Gallery, Álvaro expands his mentorship and cultural outreach. The gallery amplifies Japanese artists in Miami, fostering cross-cultural dialogue and supporting emerging talent.
              </p>
              
              <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-relaxed">
                As he stated when named Goodwill Ambassador for Japanese Cuisine, he promotes Japanese culture &ldquo;through my gallery and through my restaurants.&rdquo; This cultural bridge extends the same principles of mentorship and opportunity that drive the Jóvenes Barberos project.
              </p>
              
              <div className="pt-6">
                <a
                  href="https://instagram.com/blackshipmoment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-[#16469D] hover:text-black transition-colors"
                >
                  Follow @blackshipmoment
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <div className="px-2 sm:px-2 lg:px-2 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20 mb-2 sm:mb-10 md:mb-10 lg:mb-10 xl:mb-10">
        <section className="rounded-2xl w-full bg-[#16469D] font-montserrat py-10 md:py-16 lg:py-16 xl:py-16">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Mobile Heading */}
            <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-white mb-6 block md:hidden">
              Support Future Projects
            </h2>
            
            {/* Desktop Heading */}
            <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-white mb-6 hidden md:block">
              Be Part of What&apos;s Next
            </h2>
            
            <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-white leading-relaxed max-w-[900px] mx-auto mb-8">
              The Jóvenes Barberos project is just the beginning. Join us in creating more opportunities for mentorship, education, and community transformation across Latin America.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-[600px] mx-auto">
              <a
                href="#"
                className="w-full sm:w-auto bg-white text-[#16469D] px-8 py-4 rounded-lg text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium hover:bg-gray-100 transition-colors text-center"
              >
                Culinary Mentorship Program
              </a>
              
              <a
                href="#"
                className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium hover:bg-white hover:text-[#16469D] transition-colors text-center"
              >
                Stay Connected
              </a>
            </div>
            
          </div>
        </section>
      </div>
   
    </>
  );
};

export default Page;