"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image"; // 1. Import the Image component

export default function Splash({ onDone }) {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  const startExit = useCallback(() => {
    if (fading) return;
    setFading(true);
    // Begin revealing the main app immediately to avoid a white flash
    onDone?.();
    // Keep splash mounted for its fade-out duration
    setTimeout(() => {
      setVisible(false);
    }, 300);
  }, [fading, onDone]);

  useEffect(() => {
    const t = setTimeout(() => startExit(), 3000);
    document.documentElement.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, [startExit]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}
      onClick={startExit}
      onTouchStart={startExit}
      aria-label="Splash screen"
      role="dialog"
      aria-modal="true"
    >
      {/* 2. Replace the text div with the Image component */}
      <Image
        src="/splashlogo.webp"
        alt="FRST SUBJECT Logo"
        // 3. IMPORTANT: You should update these with the actual dimensions of your logo file.
        width={400} 
        height={100}
        // 4. Added classes for responsive sizing and kept the pulse animation.
        className="pulse w-2/3 max-w-md h-auto"
        priority // Ensures the logo loads first, which is critical for a splash screen.
      />
    </div>
  );
}