// app/page.js
"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar"));
const MobileNavbar = dynamic(() => import("./components/MobileNavbar"));
const MobileHome = dynamic(() => import("./components/Home/MobileHome"));
const DesktopHome = dynamic(() => import("./components/Home/DesktopHome"));

export default function Page() {
  return (
    <>
      <main>


        
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