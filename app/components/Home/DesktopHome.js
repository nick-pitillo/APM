// app/components/Home/DesktopHome.js

'use client';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';

const slideshowImages = [
  {
    id: 1,
    src: '/gallery/image-104.JPG',
    alt: 'Wabi Sabi Dining Room Project',
  },
  {
    id: 2,
    src: '/gallery/image-48.JPG',
    alt: 'Modern Living Area Project',
  },
  {
    id: 3,
    src: '/gallery/image-44.JPG',
    alt: 'Minimalist Interior Project',
  },
  {
    id: 4,
    src: '/gallery/image-107.jpg',
    alt: 'Commercial Space Project',
  },
  {
    id: 5,
    src: '/gallery/image-112.jpg',
    alt: 'Exterior Architecture Project',
  },
  {
    id: 6,
    src: '/gallery/image-25.jpg',
    alt: 'Exterior Architecture Project',
  },
  {
    id: 13,
    src: '/gallery/image-28.jpg',
    alt: 'Exterior Architecture Project',
  },
  {
    id: 7,
    src: '/gallery/image-94.JPG',
    alt: 'Exterior Architecture Project',
  },
  {
    id: 8,
    src: '/gallery/image-111.jpg',
    alt: 'Exterior Architecture Project',
  },
  {
    id: 9,
    src: '/gallery/image-78.jpg',
    alt: 'Exterior Architecture Project',
  },
  {
    id: 10,
    src: '/gallery/image-127.jpg',
    alt: 'Exterior Architecture Project',
  },
    {
    id: 11,
    src: '/gallery/image-30.JPG',
    alt: 'Exterior Architecture Project',
  },
  {
    id: 12,
    src: '/gallery/image-90.jpg',
    alt: 'Exterior Architecture Project',
  },
];

export default function DesktopHome() {
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
    }, 5000); // Increased from 2000ms to 5000ms for better performance

    return () => clearInterval(timer);
  }, [slideshowLength]);

  return (
    <div className="bg-black min-h-screen relative pt-[clamp(205px,14.48vw,278px)]">
      {/* Slideshow Container - Full viewport */}
      <div className="w-full h-screen relative">
        {/* Slideshow Images */}
        <div className="relative w-full h-screen overflow-hidden rounded-2xl">
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full transition-colors z-10"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full transition-colors z-10"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
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