"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const Navbar = dynamic(() => import("../components/Navbar"));
const MobileNavbar = dynamic(() => import("../components/MobileNavbar"));

const restaurantData = [
  {
    id: 1,
    websiteUrl: "https://www.midoriemiami.com",
    locations: "79th St, Coconut Grove, W Palm Beach, SoBe",
    mainImage: {
      src: "/midorieres.webp",
      alt: "Midorie Restaurant",
      width: 831,
      height: 624,
    },
    logo: {
      src: "/colored/logodMG_7051.webp",
      alt: "Midorie Logo",
      width: 800,
      height: 800,
    },
  },
  {
    id: 2,
    websiteUrl: "https://www.ogawamiami.com",
    mainImage: {
      src: "/imgs/ogawa.webp",
      alt: "Ogawa Restaurant",
      width: 2000,
      height: 2000,
    },
    logo: {
      src: "/colored/logodMG_7053.webp",
      alt: "Ogawa Logo",
      width: 800,
      height: 800,
    },
  },
  {
    id: 3,
    websiteUrl: "https://www.hiyakawamiami.com",
    mainImage: {
      src: "/imgs/hiyakawa.webp",
      alt: "Hiyakawa Restaurant",
      width: 833,
      height: 624,
    },
    logo: {
      src: "/colored/logodMG_7050.webp",
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
      <main className="bg-[#16469D]">
      <div className="hidden md:block h-[278px] md:h-[35px] lg:h-[80px] xl:h-[80px]"></div>
        <div className="hidden md:block top-0 z-50 w-full ">
          <Navbar />
        </div>
        <div className="md:hidden h-[40px] sm:h-[45px] md:h-[80px] lg:h-[80px] xl:h-[80px]"></div>
        <div className="fixed top-0 z-50 w-full md:hidden">
          <MobileNavbar />
        </div>
        
        <div className="min-h-screen from-slate-50 to-slate-100 bg-[#16469D]">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4 flex items-center justify-center min-h-screen">
            <div className="w-full pt-20 md:pt-65 pb-20">
              {/* Restaurant Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-[1400px] mx-auto">
              {restaurantData.map((restaurant) => (
                <div 
                  key={restaurant.id} 
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-2"
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
                  {/* Restaurant Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={restaurant.mainImage.src}
                      alt={restaurant.mainImage.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Restaurant Info */}
                  <div className={`p-6 text-center ${restaurant.id === 1 ? 'mt-8 lg:mt-4 xl:mt-8' : ''}`}>
                    <div className="mb-4">
                      <div className={`${restaurant.id === 2 ? 'w-48 h-48' : restaurant.id === 3 ? 'w-50 h-50' : 'w-32 h-32'} mx-auto relative`}>
                        <Image
                          src={restaurant.logo.src}
                          alt={restaurant.logo.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {restaurant.name}
                    </h3>
                    {restaurant.locations && (
                      <p className="text-sm text-gray-500 mb-3 italic">
                        {restaurant.locations}
                      </p>
                    )}
                    <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors mb-5">
                      Visit Website
                      <svg 
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
          
          {/* Slogan */}
          <div className="fixed bottom-0 left-0 right-0 text-center py-4 bg-[#16469D]/80 backdrop-blur-sm">
            <p className="text-white/70 text-sm font-light italic">
              Quality over Quantity
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
