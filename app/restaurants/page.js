"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const Navbar = dynamic(() => import("../components/Navbar"));
const MobileNavbar = dynamic(() => import("../components/MobileNavbar"));

const restaurantData = [
  {
    id: 1,
    name: "Midorie",
    websiteUrl: "https://www.midoriemiami.com",
    mainImage: {
      src: "/imgs/midorie.png",
      alt: "Midorie Restaurant",
      width: 831,
      height: 624,
    },
    logo: {
      src: "/overlaylogo.png",
      alt: "Midorie Logo",
      width: 300,
      height: 300,
    },
  },
  {
    id: 2,
    name: "Ogawa",
    websiteUrl: "https://www.ogawamiami.com",
    mainImage: {
      src: "/imgs/ogawa.png",
      alt: "Ogawa Restaurant",
      width: 833,
      height: 624,
    },
    logo: {
      src: "/ogawalogo.png",
      alt: "Ogawa Logo",
      width: 300,
      height: 300,
    },
  },
  {
    id: 3,
    name: "Hiyakawa",
    websiteUrl: "https://www.hiyakawamiami.com",
    mainImage: {
      src: "/imgs/hiyakawa.png",
      alt: "Hiyakawa Restaurant",
      width: 833,
      height: 624,
    },
    logo: {
      src: "/hiya.png",
      alt: "Hiyakawa Logo",
      width: 300,
      height: 300,
    },
  },
];

export default function RestaurantsPage() {
  const handleRestaurantClick = (websiteUrl) => {
    window.open(websiteUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <main>
        <div className="hidden md:block top-0 z-50 w-full">
          <Navbar />
        </div>
        <div className="fixed top-0 z-50 w-full md:hidden">
          <MobileNavbar />
        </div>
        
        <div className="bg-black h-screen relative">
          <div className="h-[45%] bg-[#16469D]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] w-full max-w-[75%]">
            <div className="flex justify-center items-start gap-x-4 md:gap-x-8">
              {restaurantData.map((restaurant) => (
                <div 
                  key={restaurant.id} 
                  className="w-1/3 flex flex-col items-center space-y-4 cursor-pointer transition-transform duration-200 hover:scale-105"
                  onClick={() => handleRestaurantClick(restaurant.websiteUrl)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleRestaurantClick(restaurant.websiteUrl);
                    }
                  }}
                >
                  <div className="w-full aspect-[4/3] relative">
                    <Image
                      src={restaurant.mainImage.src}
                      alt={restaurant.mainImage.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-1/2 aspect-square relative">
                    <Image
                      src={restaurant.logo.src}
                      alt={restaurant.logo.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
