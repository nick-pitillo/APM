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
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Publication name */}
      <div className="mb-3">
        <span className="text-black text-[clamp(0.9rem,1.4vw,1.45rem)] font-montserrat font-normal uppercase leading-[13px] tracking-wide">
          {item.publication}
        </span>
      </div>
      
      {/* Title and subtitle */}
      <div className="mb-4 space-y-1">
        <h3 className="text-black text-[clamp(0.9rem,1.4vw,1.45rem)] font-inter font-normal leading-[26px] break-words">
          {item.title}
        </h3>
        {item.subtitle && (
          <h4 className="text-black text-[clamp(0.9rem,1.4vw,1.45rem)] font-inter font-normal leading-[25px] break-words">
            {item.subtitle}
          </h4>
        )}
      </div>
      
      {/* Description */}
      <div className="flex-1">
        <p className="text-black text-[clamp(0.9rem,1.4vw,1.45rem)] font-inter font-normal leading-[21px] break-words">
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

      <div className="bg-white min-h-screen relative">
      {/* Blue background section */}
      <div className="px-2 sm:px-2 lg:px-2 relative">
        <div className="rounded-2xl h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[280px] bg-[#16469D] absolute top-[90px] md:top-[206px] left-2 right-2 w-auto z-10" />
        
        {/* Header section in blue area - centered in blue background */}
        <header className="absolute top-[90px] md:top-[205px] left-2 right-2 z-20 w-auto h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[280px] flex items-center justify-center font-montserrat">
          <h1 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-extralight text-white font-montserrat text-center">
            Press
          </h1>
        </header>
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-2 py-8 max-w-7xl">
        {/* Dynamic press items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 mt-[310px] sm:mt-[330px] md:mt-[465px] lg:mt-[485px] xl:mt-[505px]">
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
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More Button - only show if there are more items */}
        {hasMoreItems && (
          <div className="flex justify-center mt-20">
            <button 
              onClick={loadMoreItems}
              className="rounded-2xl w-full max-w-[15%] h-[3rem] bg-[#16469D] flex items-center justify-center hover:bg-[#1a5bb8] transition-colors"
            >
              <span className="text-white text-[clamp(0.9rem,1.4vw,1.45rem)] font-montserrat font-normal px-4">
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