// components/Navbar.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: ["700"], subsets: ["latin"], display: "swap" });

export const DEFAULT_NAV = [
  { label: "ABOUT", href: "/about" },
  { label: "RESTAURANTS", href: "/" },
  { label: "PRESS", href: "/press" },
  { label: "CAREER", href: "/career" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar({
  nav = DEFAULT_NAV,
  desktopLogo = { src: "/logomark.jpeg", width: 111, height: 230, alt: "APM" },
}) {
  const pathname = usePathname();

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  const linkBase =
    "inline-block rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2448A1]/50";
  const linkDesktop = `${montserrat.className} text-[#16469D] text-[clamp(18px,2.2vw,34px)] leading-none font-bold`;

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Desktop */}
      <div className="hidden md:grid w-full bg-white border-b-[4px] border-[#2448A1]  h-[clamp(200px,14.48vw,278px)] grid-cols-[auto_1fr] items-center">
        <div className="pl-[3.6vw]">
          <Image
            src={desktopLogo.src}
            alt={desktopLogo.alt ?? "Logo"}
            width={desktopLogo.width}
            height={desktopLogo.height}
            className="h-[clamp(10px,25vw,225px)] sm:h-[clamp(10px,10vw,225px)] w-auto select-none object-contain"
          />
        </div>

        <nav aria-label="Primary" className="h-full">
          <ul className="h-full w-full flex items-center justify-center gap-[clamp(24px,4.6vw,88px)]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  prefetch={item.href !== "/press"}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`${linkBase} ${linkDesktop} ${isActive(item.href) ? "opacity-100" : "opacity-90 hover:opacity-80"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
