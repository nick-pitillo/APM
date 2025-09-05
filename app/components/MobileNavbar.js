// components/MobileNavbar.js
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { DEFAULT_NAV } from "./Navbar";

export default function MobileNavbar({
  nav = DEFAULT_NAV,
  mobileLogo = { src: "/logoext.webp", width: 268, height: 261, alt: "APM" },
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="md:hidden w-full px-2 pt-2">
      <div className="bg-white border-b-2 border-[#2448A1] h-[5%] lg:h-[clamp(100px,12vh,140px)] flex items-center rounded-2xl shadow-md">
    
      <div className="flex items-center justify-between px-5 w-full">
        <Link href="/" className="block">
          <Image
            src={mobileLogo.src}
            alt={mobileLogo.alt ?? "Logo"}
            width={mobileLogo.width}
            height={mobileLogo.height}
            className="h-[clamp(98px,5vh,120px)] w-auto select-none object-contain py-4"
          />
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="p-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#031E41]/50"
        >
          <svg width="clamp(6px,16vw,35px)" height="clamp(24px,12vw,49.43px)" viewBox="0 0 83 51" fill="none" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.306641 50.3526V47.0573H82.6913V50.3526H0.306641ZM0.306641 23.9896H82.6913V27.285H0.306641V23.9896ZM0.306641 0.921875H82.6913V4.21725H0.306641V0.921875Z"
              fill="#031E41"
            />
          </svg>
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} nav={nav} />
      </div>
    </div>
  );
}


