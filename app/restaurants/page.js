"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const Navbar = dynamic(() => import("../components/Navbar"));
const MobileNavbar = dynamic(() => import("../components/MobileNavbar"));

const restaurantData = [
  {
    id: 1,
    mainImage: {
      src: "/imgs/midorie.png",
      alt: "Restaurant 1",
      width: 831,
      height: 624,
    },
    logo: {
      src: "/overlaylogo.png",
      alt: "Restaurant 1 Logo",
      width: 300,
      height: 300,
    },
  },
  {
    id: 2,
    mainImage: {
      src: "/imgs/ogawa.png",
      alt: "Restaurant 2",
      width: 833,
      height: 624,
    },
    logo: {
      src: "/ogawalogo.png",
      alt: "Restaurant 2 Logo",
      width: 300,
      height: 300,
    },
  },
  {
    id: 3,
    mainImage: {
      src: "/imgs/hiyakawa.png",
      alt: "Restaurant 3",
      width: 833,
      height: 624,
    },
    logo: {
      src: "/hiya.png",
      alt: "Restaurant 3 Logo",
      width: 300,
      height: 300,
    },
  },
];

export default function RestaurantsPage() {
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
                <div key={restaurant.id} className="w-1/3 flex flex-col items-center space-y-4">
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
