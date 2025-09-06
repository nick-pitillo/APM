// components/FounderHero.jsx
import Image from "next/image";

export default function FounderHero() {
  return (
    <section className="w-full bg-white font-montserrat  mt-3 sm:mt-4 md:mt-4 lg:hidden">
      <div className="mx-auto max-w-[1800px] ">
        <div className="w-full ">
          <div className="relative w-full px-2">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover rounded-2xl"
            >
              <source src="/lan.mp4" type="video/mp4" />
              <source src="/lan.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-end mb-20 justify-center rounded-2xl">
              <div className="text-center text-white px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                Cultivating Propsperity 
                </h2>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}