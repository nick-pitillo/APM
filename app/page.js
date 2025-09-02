// app/page.js
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Splash from "./components/Splash";

const Navbar = dynamic(() => import("./components/Navbar"));
const MobileNavbar = dynamic(() => import("./components/MobileNavbar"));
const MobileHome = dynamic(() => import("./components/Home/MobileHome"));
const DesktopHome = dynamic(() => import("./components/Home/DesktopHome"));

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>

      {showSplash && <Splash onDone={() => setShowSplash(false)} />}


      <main className={`transition-opacity duration-500 ${showSplash ? "opacity-0" : "opacity-100"}`}>


        <div className="hidden md:block h-48 xl:h-52"></div>
        <div className="hidden md:block top-0 z-50 w-full">
          <Navbar />
        </div>
        <div className="md:hidden h-24"></div>
        <div className="fixed top-0 z-50 w-full md:hidden">
          <MobileNavbar />
        </div>






        <div className="hidden lg:block">
          <DesktopHome />
        </div>

        <div className="block lg:hidden">
          <MobileHome />
        </div>

      </main>
    </>
  );
}