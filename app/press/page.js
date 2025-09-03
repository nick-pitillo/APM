'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';

export default function PressPage() {
  const allPressItems = [
    {
      id: 1,
      image: "https://placehold.co/555x416",
      publication: "The New York Times",
      title: "here goes press title",
      subtitle: "subtitle goes here",
      description: "A description goes here"
    },
    {
      id: 2,
     image: "https://placehold.co/555x416",
      publication: "The New York Times",
      title: "here goes press title",
      subtitle: "subtitle goes here",
      description: "A description goes here"
    },
    {
      id: 3,
      image: "https://placehold.co/555x416",
      publication: "The New York Times",
      title: "here goes press title",
      subtitle: "subtitle goes here",
      description: "A description goes here"
    },
    {
      id: 4,
      image: "https://placehold.co/555x416",
      publication: "The New York Times",
      title: "here goes press title",
      subtitle: "subtitle goes here",
      description: "A description goes here"
    },
    {
      id: 5,
      image: "https://placehold.co/555x416",
      publication: "The New York Times",
      title: "here goes press title",
      subtitle: "subtitle goes here",
      description: "A description goes here"
    },
    {
      id: 6,
      image: "https://placehold.co/555x416",
      publication: "The New York Times",
      title: "here goes press title",
      subtitle: "subtitle goes here",
      description: "A description goes here"
    },
    {
      id: 7,
      image: "https://placehold.co/555x416",
      publication: "The New York Times",
      title: "here goes press title",
      subtitle: "subtitle goes here",
      description: "A description goes here"
    },
    {
      id: 8,
      image: "https://placehold.co/555x416",
      publication: "The New York Times",
      title: "here goes press title",
      subtitle: "subtitle goes here",
      description: "A description goes here"
    },
    {
      id: 9,
      image: "https://placehold.co/555x416",
      publication: "The New York Times",
      title: "here goes press title",
      subtitle: "subtitle goes here",
      description: "A description goes here"
    }
  ];

  const [visibleItems, setVisibleItems] = useState(6); // Show first 6 items initially
  
  const loadMoreItems = () => {
    setVisibleItems(prev => Math.min(prev + 3, allPressItems.length)); // Load 3 more items at a time
  };

  const hasMoreItems = visibleItems < allPressItems.length;

  const PressItem = ({ item }) => (
    <div className="flex flex-col w-full max-w-[555px] h-auto">
      {/* Article Image */}
      <div className="relative w-full aspect-[555/416] mb-6">
        <Image 
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Publication name */}
      <div className="mb-3">
        <span className="text-white text-[11px] font-montserrat font-normal uppercase leading-[13px] tracking-wide">
          {item.publication}
        </span>
      </div>
      
      {/* Title and subtitle */}
      <div className="mb-4 space-y-1">
        <h3 className="text-white text-[22px] font-inter font-normal leading-[26px] break-words">
          {item.title}
        </h3>
        {item.subtitle && (
          <h4 className="text-white text-[21px] font-inter font-normal leading-[25px] break-words">
            {item.subtitle}
          </h4>
        )}
      </div>
      
      {/* Description */}
      <div className="flex-1">
        <p className="text-white text-[13px] font-inter font-normal leading-[21px] break-words">
          {item.description.split(' — ').map((part, i) => (
            <span key={i}>
              {i > 0 && ' — '}
              {part}
            </span>
          ))}
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Navbar Spacer and Navbar */}
      <div className="hidden md:block "></div>
      <div className="hidden md:block fixed top-0 z-50 w-full">
        <Navbar />
      </div>
      
      {/* Mobile Navbar Spacer and Navbar */}
      <div className="md:hidden "></div>
      <div className="fixed top-0 z-50 w-full md:hidden">
        <MobileNavbar />
      </div>

      <div className="bg-black min-h-screen relative">
      {/* Blue background section */}
      <div className="h-[17%] sm:h-[18%] md:h-[20%] lg:h-[22%] xl:h-[28%] bg-[#16469D] absolute top-0 left-0 w-full" />
      
      {/* Header section in blue area */}
      <header className="absolute top-20 md:top-30 lg:top-40 xl:top-50 mt-30 left-0 right-0 z-20 w-full py-2 font-montserrat">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[clamp(1.4rem,2.2vw,2.625rem)] font-bold text-white font-montserrat">
            Press
          </h1>
          <hr className="mt-4 md:mt-6 lg:mt-6 w-full max-w-5xl mx-auto border-t-1 border-white" />
        </div>
      </header>
      
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Dynamic press items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 mt-100 sm:mt-105 md:mt-105 lg:mt-105 xl:mt-125">
          {allPressItems.slice(0, visibleItems).map((item, index) => (
            <div key={item.id} className="relative w-full">
              <PressItem item={item} />
              {/* Show overlay images only for the first 3 items */}
              {index < 3 && (
                <div className="absolute top-0 left-0 w-full aspect-[555/416] pointer-events-none">
                  <Image
                    src={
                      index === 0 ? "https://placehold.co/555x416" :
                      index === 1 ? "https://placehold.co/554x416" :
                      "https://placehold.co/555x416"
                    }
                    alt={
                      index === 0 ? "WABI SABI - Dining Room" :
                      index === 1 ? "press image" :
                      "WABI SABI - Dining Room 2"
                    }
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More Button - only show if there are more items */}
        {hasMoreItems && (
          <div className="flex justify-center mt-16">
            <button 
              onClick={loadMoreItems}
              className="w-full max-w-[398px] h-[65px] bg-[#16469D] rounded-[3px] flex items-center justify-center hover:bg-[#1a5bb8] transition-colors"
            >
              <span className="text-white text-[26px] font-montserrat font-normal px-4">
                Load More
              </span>
            </button>
          </div>
        )}
      </div>
      </div>
    </>
  );
}