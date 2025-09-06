// app/components/Home/MobileHome.js

'use client';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';

const slideshowImages = [
  {
    id: 1,
    src: '/gallery/vertical (1).webp',
    alt: 'Wabi Sabi Dining Room Project',
  },
  {
    id: 2,
    src: '/gallery/vertical (2).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 3,
    src: '/gallery/vertical (3).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 4,
    src: '/gallery/vertical (4).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 5,
    src: '/gallery/vertical (5).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 6,
    src: '/gallery/vertical (6).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 7,
    src: '/gallery/vertical (7).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 8,
    src: '/gallery/vertical (8).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 10,
    src: '/gallery/vertical (10).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 11,
    src: '/gallery/vertical (11).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 12,
    src: '/gallery/vertical (12).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 13,
    src: '/gallery/vertical (13).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 14,
    src: '/gallery/vertical (14).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 15,
    src: '/gallery/vertical (15).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 16,
    src: '/gallery/vertical (16).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 17,
    src: '/gallery/vertical (17).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 18,
    src: '/gallery/vertical (18).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 19,
    src: '/gallery/vertical (19).webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 20,
    src: '/gallery/vertical (20).webp',
    alt: 'Modern Living Area Project',
  },
];

export default function MobileHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoize slideshow length to prevent unnecessary recalculations
  const slideshowLength = useMemo(() => slideshowImages.length, []);

  // Memoized navigation functions to prevent unnecessary re-renders
  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideshowLength);
  }, [slideshowLength]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideshowLength) % slideshowLength);
  }, [slideshowLength]);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowLength);
    }, 5000); // Increased from 4000ms to 5000ms for better performance

    return () => clearInterval(timer);
  }, [slideshowLength]);

  return (
    <div className="bg-[#16469D] h-screen relative">
      {/* Navbar Spacer - Much smaller for mobile */}
      <div className="h-[80px]"></div>
      
      {/* Fixed spacing for mobile */}
      <div className="h-9 sm:h-10 md:h-10 lg:h-10"></div>
      
      {/* Slideshow Container */}
      <div className="w-full h-[calc(95.5vh-100px)] md:h-[calc(100vh-80px)] lg:h-[calc(97vh-100px)] relative px-2">
        {/* Slideshow Images */}
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          {slideshowImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                priority={index === 0}
              />
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-1.5 sm:p-2 rounded-full transition-colors z-10"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-1.5 sm:p-2 rounded-full transition-colors z-10"
            aria-label="Next image"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dot Indicators */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}