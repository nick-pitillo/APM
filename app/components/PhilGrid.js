"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const PhilGrid = () => {
  const router = useRouter();

  const handleRedirect = (url) => {
    router.push(url);
  };

  return (
    <div className="w-full min-h-screen py-8 hidden md:block lg:block xl:block">
      <div className="mx-auto max-w-[1800px] px-3 sm:px-4 lg:px-6">
        {/* 2x2 Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 h-[calc(100vh-4rem)]">
        
        {/* Top Left - Blue Background Box with Fey Logo */}
        <div 
          className="bg-[#16469D] text-white p-6 md:p-8 lg:p-12 rounded-xl flex items-center justify-center h-full w-full overflow-hidden cursor-pointer hover:bg-[#0f3574] transition-colors duration-300"
          onClick={() => handleRedirect('/about')}
        >
          <div className="text-center w-full h-full flex flex-col justify-center px-4 space-y-4 max-h-full overflow-hidden">
            {/* Fey Logo */}
    
            <h3 className="text-[clamp(0.8rem,1.2vw,1.3rem)] font-regular uppercase tracking-wide">Where the Journey Began</h3>
            <p className="text-[clamp(0.8rem,1.2vw,1.3rem)] leading-[1.6] max-w-lg mx-auto overflow-hidden">
              In 2023, during a book tour in Caracas, Álvaro Pérez Miranda met young men aged 18–22 who dreamed of becoming barbers. Their ambition sparked a vision for mentorship and change.
            </p>
          </div>
        </div>

        {/* Top Right - Transparent/White Box */}
        <div 
          className="bg-white border border-gray-200 p-6 md:p-8 lg:p-12 rounded-xl flex items-center justify-center h-full w-full overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors duration-300"
          onClick={() => handleRedirect('/philanthropy')}
        >
          <div className="text-center w-full h-full flex flex-col justify-center px-4 space-y-4 max-h-full overflow-hidden">
            <h3 className="text-[clamp(0.8rem,1.2vw,1.3rem)] font-regular uppercase tracking-wide text-gray-800">More Than a Handout</h3>
            <p className="text-[clamp(0.8rem,1.2vw,1.3rem)] leading-[1.6] text-gray-600 max-w-lg mx-auto mb-4 overflow-hidden">
              &ldquo;Give a man a fish and you feed him for a day. Teach him how to fish and you feed him for a lifetime.&rdquo;
            </p>
            <p className="text-[clamp(0.8rem,1.2vw,1.3rem)] leading-[1.6] text-gray-600 max-w-lg mx-auto overflow-hidden">
              Álvaro&rsquo;s goal was to empower these young men with lasting skills. Through mentorship and education, they transformed their dream into reality.
            </p>
          </div>
        </div>

        {/* Bottom Left - Transparent/White Box */}
        <div 
          className="bg-white border border-gray-200 p-6 md:p-8 lg:p-12 rounded-xl flex items-center justify-center h-full w-full overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors duration-300"
          onClick={() => handleRedirect('/career')}
        >
          <div className="text-center w-full h-full flex flex-col justify-center px-4 space-y-4 max-h-full overflow-hidden">
            <h3 className="text-[clamp(0.8rem,1.2vw,1.3rem)] font-regular uppercase tracking-wide text-gray-800">From Students to Entrepreneurs</h3>
            <p className="text-[clamp(0.8rem,1.2vw,1.3rem)] leading-[1.6] text-gray-600 max-w-lg mx-auto overflow-hidden">
              Over the past year, they trained in barbering, accounting, management, and entrepreneurship. They learned to cut hair — and run a business.
            </p>
          </div>
        </div>

        {/* Bottom Right - Blue Background Box with Image */}
        <div 
          className="bg-[#16469D] text-white p-6 md:p-8 lg:p-12 rounded-xl flex items-center justify-center h-full w-full overflow-hidden cursor-pointer hover:bg-[#0f3574] transition-colors duration-300"
          onClick={() => handleRedirect('/contact')}
        >
          <div className="w-full h-full flex flex-col justify-center space-y-4 max-h-full overflow-hidden">
            {/* Image Section */}
           
            
            {/* Text Content */}
            <div className="text-center px-4">
              <h3 className="text-[clamp(0.8rem,1.2vw,1.3rem)] font-regular uppercase tracking-wide mb-3">A Dream Realized</h3>
              <p className="text-[clamp(0.7rem,1.1vw,1.1rem)] leading-[1.5] max-w-lg mx-auto mb-3 overflow-hidden">
                This August, &ldquo;Jóvenes Barberos de La Vega&rdquo; opens. More than a barbershop, it&rsquo;s a symbol of empowerment and mentorship&rsquo;s impact.
              </p>
              <p className="text-[clamp(0.7rem,1.0vw,1.0rem)] leading-[1.4] max-w-lg mx-auto italic overflow-hidden">
                &ldquo;This barbershop is only the beginning — a model for change, one community at a time.&rdquo; — Álvaro Pérez Miranda
              </p>
            </div>
          </div>
        </div>

        </div>

        {/* Floating Donation Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button 
            className="relative w-16 h-16 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group overflow-hidden"
            onClick={() => {
              // Add your donation logic here
              console.log('Opening donation center...');
            }}
            aria-label="Open Donation Center"
          >
            {/* Fey Logo covering the button */}
            <Image
              src="/feyt.webp"
              alt="Alvaro Perez Miranda"
              fill
              className="object-cover rounded-full"
              priority
            />
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Support Our Cause
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhilGrid;
