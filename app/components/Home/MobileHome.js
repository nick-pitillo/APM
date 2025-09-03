// app/components/Home/MobileHome.js

'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const slideshowImages = [
  {
    id: 1,
    src: '/midoriem.webp',
    alt: 'Wabi Sabi Dining Room Project',
  },
  {
    id: 2,
    src: '/hiyam.webp',
    alt: 'Modern Living Area Project',
  },
  {
    id: 3,
    src: '/ogawam.webp',
    alt: 'Minimalist Interior Project',
  },
  {
    id: 4,
    src: '/masam.webp',
    alt: 'Commercial Space Project',
  },
  {
    id: 5,
    src: '/kurim.webp',
    alt: 'Exterior Architecture Project',
  },
];

export default function MobileHome() {
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
      <div className="h-[30vh] bg-[#16469D]"></div>
      
      {/* Slideshow Container - Adapted for mobile */}
      <div 
        className="absolute"
        style={{
          width: '90vw',
          height: '80vh',
          left: '50%',
          top: '57vh',
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
          
          {/* Navigation Arrows - Smaller for mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-1.5 rounded-full transition-colors z-10"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-1.5 rounded-full transition-colors z-10"
            aria-label="Next image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dot Indicators - Smaller for mobile */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
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