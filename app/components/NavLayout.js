// src/components/NavLayout.jsx

import React from 'react';
import Navbar from './Navbar';       // Your desktop navbar
import MobileNavbar from './MobileNavbar'; // Your mobile navbar

export default function NavLayout() {
  return (
    // Use a Fragment (<>...</>) because we are returning multiple sibling divs
    <>
      {/* --- DESKTOP SPACER & NAVBAR --- */}
      {/* This spacer div takes up space in the document flow */}
      <div className="hidden md:block h-48 xl:h-52"></div>
      {/* This navbar is fixed and sits on top of the page */}
      <div className="hidden md:block fixed top-0 z-50 w-full">
        <Navbar />
      </div>

      {/* --- MOBILE SPACER & NAVBAR --- */}
      {/* This spacer div takes up space in the document flow */}
      <div className="md:hidden h-24"></div>
      {/* This navbar is fixed and sits on top of the page */}
      <div className="fixed top-0 z-50 w-full md:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}