// app/page.js
"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });
const MobileNavbar = dynamic(() => import("./components/MobileNavbar"), { ssr: false });
const MobileHome = dynamic(() => import("./components/Home/MobileHome"));
const DesktopHome = dynamic(() => import("./components/Home/DesktopHome"));

export default function Page() {
  return (
    <>
      <main className="bg-[#16469D]">


        
        <div className="hidden md:block top-0 z-50 w-full">
          <Navbar />
        </div>
        
        <div className="fixed top-0 z-50 w-full md:hidden">
          <MobileNavbar />
        </div>






       <div className="hidden md:block">
         <DesktopHome />
       </div>
       <div className="block md:hidden">
         <MobileHome />
       </div>

      </main>
    </>
  );
}