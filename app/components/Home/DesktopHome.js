// app/components/Home/DesktopHome.js

'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const slideshowImages = [
  {
    id: 1,
    src: '/midoriebg.webp',
    alt: 'Wabi Sabi Dining Room Project',
  },
  {
    id: 2,
    src: '/hayabgdesk.webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 3,
    src: '/ogawabg.webp',
    alt: 'Minimalist Interior Project',
  },
  {
    id: 4,
    src: '/masabg.webp',
    alt: 'Commercial Space Project',
  },
  {
    id: 5,
    src: '/kuribg.webp',
    alt: 'Exterior Architecture Project',
  },
];

export default function DesktopHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  return (
    <div className="bg-black h-screen relative overflow-hidden">
      <div className="h-[45%] bg-[#16469D]"></div>
      
      {/* Slideshow Container - Centered in the middle section */}
      <div 
        className="absolute"
        style={{
        width: '90vw',
        height: '60vh',
          left: '50%',
          top: '60vh',
          transform: 'translate(-50%, -50%)',
          background: 'linear-gradient(0deg, rgba(255, 0, 0, 0.20) 0%, rgba(255, 0, 0, 0.20) 100%), #D9D9D9'
        }}
      >
        {/* Slideshow Images */}
        <div className="relative w-full h-full overflow-hidden">
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
                className="object-cover"
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