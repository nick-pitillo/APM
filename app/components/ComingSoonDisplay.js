// components/ComingSoonDisplay.jsx
'use client'; // This component is interactive because of the slider.

import React from 'react';
import Image from 'next/image';
import ImageGallerySlider from './ImageGallerySlider'; // Assuming your slider is in its own file now

const ScrollArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// This component takes a single 'restaurant' object as a prop.
export default function ComingSoonDisplay({ restaurant }) {
  return (
    <main className="font-montserrat">
      {/* Hero Section - NOW DYNAMIC */}
      <section 
        className="relative flex h-screen flex-col items-center justify-center bg-cover bg-center text-white"
        // The background image is now set dynamically
        style={{ backgroundImage: `url(${restaurant.heroImageUrl})` }}
      >
        {/* A semi-transparent overlay to help text stand out */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Content is positioned above the overlay */}
        <div className="relative z-10 flex flex-col items-center">
            {/* The Logo is now dynamic */}
            <Image 
                src={restaurant.logoUrl}
                alt={`${restaurant.name} Logo`}
                width={347}
                height={74}
                className="mb-12"
            />
            <h1 className="text-3xl font-light tracking-widest">
                Coming Soon
            </h1>
        </div>

        <div className="absolute bottom-10 z-10 flex flex-col items-center gap-2">
          <p className="text-xl font-light">Scroll</p>
          <div className="animate-bounce">
            <ScrollArrowIcon />
          </div>
        </div>
      </section>

      {/* The Gallery Slider is now passed the specific images for this restaurant */}
      <ImageGallerySlider images={restaurant.galleryImages} />
    </main>
  );
}