// components/VideoPhilDesktop.jsx
import Image from "next/image";

export default function VideoPhilDesktop() {
  return (
    <section className="w-full bg-white font-montserrat mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20 hidden md:block lg:block xl:block">
      <div className="mx-auto max-w-[1800px] px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* LEFT: Video */}
          <div className="relative w-full">
            {/* preserve ~974x1130 ratio */}
            <div className="relative w-full" style={{ aspectRatio: "974 / 1130" }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src="/lan.mp4" type="video/mp4" />
                <source src="/lan.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* RIGHT: Two Stacked Images */}
          <div className="relative flex flex-col gap-4 lg:gap-6 lg:pl-2">
            {/* Top Image */}
            <div className="relative w-full flex-1">
              <Image
                src="/barberia.webp"
                alt="Image 1"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-2xl"
              />
            </div>
            
            {/* Bottom Image */}
            <div className="relative w-full flex-1">
              <Image
                src="/jov.webp"
                alt="Image 2"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
