import React from 'react';
import Image from 'next/image';

// A small, reusable SVG component for the animated scroll arrow.
const ScrollArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CareersHero = () => {
  return (
    // Main Hero Section:
    // - `h-screen`: Makes the section take up the full viewport height.
    // - `relative`: Allows us to position the scroll indicator inside it.
    // - `flex ...`: A flex container to perfectly center the main content block.
    // - In a real app, you'd replace `bg-red-500` with `bg-cover bg-center` and a style attribute for a background image.
    <section className="relative flex h-screen flex-col items-center justify-center font-montserrat text-white">
      
    {/* 1. Background Images - Desktop and Mobile */}
    {/* Desktop Background Image - hidden on mobile */}
    <Image
      src="/about/masayuki.webp" 
      alt="A description of the background image for accessibility"
      fill
      className="object-cover hidden md:block" // Hidden on mobile, shown on md and up
      priority
      sizes="100vw"
    />
    
    {/* Mobile Background Image - hidden on desktop */}
    <Image
      src="/about/imgm.webp" 
      alt="A description of the mobile background image for accessibility"
      fill
      className="object-cover block md:hidden" // Shown on mobile, hidden on md and up
      priority
      sizes="100vw"
    />


      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Main Title */}
        <h1 className="text-5xl font-medium tracking-wide">
          Join the APM Family
        </h1>
        
        {/* Subtitle */}
        <p className="mt-6 max-w-3xl text-3xl font-light leading-snug">
          Where passion meets opportunity in the art of Japanese hospitality.
        </p>
        
        {/* Call-to-Action Button */}
        <a 
          href="#opportunities" // This link would scroll to a section with the ID "opportunities"
          className="mt-16 rounded-sm bg-[#16469D] px-8 py-4 text-xl font-normal transition-colors hover:bg-blue-800"
        >
          Explore Opportunities
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 z-10 flex flex-col items-center gap-2">
        <p className="text-xl font-light">Scroll</p>
        <div className="animate-bounce">
          <ScrollArrowIcon />
        </div>
      </div>
    </section>
  );
};

export default CareersHero;