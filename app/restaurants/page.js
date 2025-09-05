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
      src: "/midorieres.JPG",
      alt: "Midorie Restaurant",
      width: 831,
      height: 624,
    },
    logo: {
      src: "/colored/logodMG_7051.PNG",
      alt: "Midorie Logo",
      width: 800,
      height: 800,
    },
  },
  {
    id: 2,
    websiteUrl: "https://www.ogawamiami.com",
    mainImage: {
      src: "/imgs/ogawa.png",
      alt: "Ogawa Restaurant",
      width: 2000,
      height: 2000,
    },
    logo: {
      src: "/colored/logodMG_7053.PNG",
      alt: "Ogawa Logo",
      width: 800,
      height: 800,
    },
  },
  {
    id: 3,
    websiteUrl: "https://www.hiyakawamiami.com",
    mainImage: {
      src: "/imgs/hiyakawa.png",
      alt: "Hiyakawa Restaurant",
      width: 833,
      height: 624,
    },
    logo: {
      src: "/colored/logodMG_7050.JPG",
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
        <div className="hidden md:block top-0 z-50 w-full ">
          <Navbar />
        </div>
        <div className="fixed top-0 z-50 w-full md:hidden">
          <MobileNavbar />
        </div>
        
        <div className="min-h-screen from-slate-50 to-slate-100 py-20 px-4 bg-[#16469D]">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Restaurants
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our collection of exceptional dining experiences
              </p>
            </div>

            {/* Restaurant Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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
                  <div className="p-6 text-center">
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
                    <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
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
      </main>
    </>
  );
}
