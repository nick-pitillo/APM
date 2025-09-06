import CareersHero from '../components/CareersHero'; // Adjust import path if needed
import FeaturedLogos from '../components/FeaturedLogos';
import CultureOverlayGrid from '../components/CultureOverlayGrid';
import CultureMobile from '../components/CultureMobile';
import MeetOur from '../components/MeetOur';
import Navbar from "../components/Navbar"; // Your desktop navbar
import MobileNavbar from "../components/MobileNavbar"; // Your mobile navbar
import Image from 'next/image';

export default function CareersPage() {
  return (
    <main>
        <div className="hidden md:block h-[278px]"></div>
        <div className="hidden md:block top-0 z-50 w-full">

          <Navbar />
        </div>

        <div className="md:hidden h-[80px] sm:h-[105px] md:h-[100px] lg:h-[100px] xl:h-[100px]"></div>
        <div className="fixed top-0 z-50 w-full md:hidden">
          <MobileNavbar />



        </div>
      <CareersHero />
   
     
      <FeaturedLogos />   <div className="px-2 sm:px-2 lg:px-2 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20">
      <section className="shadow-md rounded-2xl w-full flex justify-center items-center bg-[#16469D] pt-13 pb-13">
      <div
        className="
          container mx-auto
          max-w-[1200px]
          px-4 sm:px-6 lg:px-8
          font-montserrat
          text-center
          flex flex-col items-center justify-center
        "
      >
       <h2 id="opportunities" className="text-[clamp(0.9rem,1.4vw,1.45rem)] text-center font-medium  px-6 md:px-0 lg:px-0 text-white">
          Our Culture
        </h2>
        
        {/* Description Text */}
        {/* `text-4xl` matches the `fontSize: 36`. */}
        {/* `font-light` matches the `fontWeight: '300'`. */}
        {/* `mt-6` provides the vertical space between the title and this paragraph. */}
        {/* `leading-relaxed` improves readability for the large block of text. */}
        <p className="mt-6 text-center text-white text-[clamp(0.9rem,1.4vw,1.45rem)] font-light  leading-relaxed px-6 md:px-0 lg:px-0">
          At APM Restaurant Group, we’re more than just a team we’re a family united by the Japanese principles of omotenashi (mindful hospitality), komakai (fine attention to detail), and sensai (sensitivity). Across our award-winning concepts, we create environments where creativity thrives, skills sharpen, and guests experience the warmth of true hospitality.
        </p>
      </div>
    </section>
    </div>
    <section className="w-full bg-white py-2 px-2 sm:px-5 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20">
      
      {/* 
        Inner Blue Placeholder Block:
        - `container mx-auto`: Centers the block horizontally.
        - `bg-[#16469D]`: The exact blue background color.
        - `h-[702px]`: The exact height from your design, making it a large block.
        - `flex items-center justify-center`: The standard Tailwind way to perfectly center content inside a div.
      */}
    <div className="container mx-auto flex h-[15.5rem] sm:h-[25.5rem] lg:h-[40.5rem] items-center justify-center relative overflow-hidden">

        <Image
          src="/Career/image-4.webp"
          alt="Explore career opportunities at APM"
          fill
          className="object-cover rounded-2xl md:object-top"
          sizes="100vw"
          priority
        />
      </div>
    </section>
    <div className="px-2 sm:px-2 lg:px-2">
      <section className="shadow-md rounded-2xl w-full flex justify-center items-center bg-[#16469D] pt-13 pb-13 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20">
      <div
        className="
          container mx-auto
          max-w-[1200px]
          px-4 sm:px-6 lg:px-8
          font-montserrat
          text-center
          flex flex-col items-center justify-center
        "
      >
       <h2 id="opportunities" className="text-[clamp(0.9rem,1.4vw,1.45rem)] text-center font-medium px-6 md:px-0 lg:px-0 text-white">
       A Culture of Growth & Development
        </h2>
        
        {/* Description Text */}
        {/* `text-4xl` matches the `fontSize: 36`. */}
        {/* `font-light` matches the `fontWeight: '300'`. */}
        {/* `mt-6` provides the vertical space between the title and this paragraph. */}
        {/* `leading-relaxed` improves readability for the large block of text. */}
        <p className="mt-6 text-center text-white text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-black leading-relaxed px-6 md:px-0 lg:px-0">
        We offer unique opportunities for professional growth within our diverse collection of restaurants, from the vibrant energy of Wabi Sabi to the refined elegance of Ogawa. Our various concepts provide a rich landscape for skill development, allowing you to explore different culinary niches and expand your expertise. We encourage internal mobility, supporting the advancement of our team members within the group.
        </p>
      </div>
    </section>
    </div>
    <CultureMobile />
    <CultureOverlayGrid /> 
    {/* Anchor for "Explore Opportunities" CTA */}
    <div className="px-2 sm:px-2 lg:px-2">
      <section className="shadow-md rounded-2xl w-full flex justify-center items-center bg-[#16469D] pt-13 pb-13 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20">
      <div
        className="
          container mx-auto
          max-w-[1200px]
        
          font-montserrat
          text-center
          flex flex-col items-center justify-center
        "
      >
       <h2 id="opportunities" className="text-[clamp(0.9rem,1.4vw,1.45rem)] text-center font-medium  px-2 md:px-0 lg:px-0 text-white">
       Study and Practice
        </h2>
        
        {/* Description Text */}
        {/* `text-4xl` matches the `fontSize: 36`. */}
        {/* `font-light` matches the `fontWeight: '300'`. */}
        {/* `mt-6` provides the vertical space between the title and this paragraph. */}
        {/* `leading-relaxed` improves readability for the large block of text. */}
        <p className="w-full mt-6 text-center text-white text-[clamp(0.9rem,1.4vw,1.45rem)] font-light  leading-relaxed  ">
        We are passionate about fostering a deep understanding of Japanese cuisine and culture. Each year, select team members are invited on an all-expenses-paid R&D trip to Japan with founder Alvaro Perez Miranda. This immersive experience allows our team to connect with the heart of Japanese culinary traditions, sourcing ingredients, exploring new techniques, and deepening their appreciation for the culture.  Beyond this unique opportunity, we provide ongoing training programs to refine skills and enhance professional development.
        </p>
      </div>
    </section>
    </div>
    <MeetOur />
<div className="px-2 sm:px-2 lg:px-2 mb-3">
      <section className="shadow-md rounded-2xl w-full flex justify-center items-center bg-[#16469D] pt-13 pb-13 mt-3 sm:mt-4 md:mt-4 lg:mt-20 xl:mt-20">
      <div
        className="
          container mx-auto
          max-w-[1200px]
          px-4 sm:px-6 lg:px-8
          font-montserrat
          text-center
          flex flex-col items-center justify-center
        "
      >
     <h2 className="text-center text-white text-[clamp(0.9rem,1.4vw,1.45rem)]  font-medium mb-6">
    Join Us
  </h2>

  <p className="mx-auto text-white max-w-[837px] text-center text-[clamp(0.9rem,1.4vw,1.45rem)] font-light leading-relaxed text-black">
    APM Restaurant Group is seeking talented and experienced hospitality
    and culinary professionals to join our expanding team.
    <br />
    <br />
    Explore our current openings and discover your place within our
    exceptional team.
    <br />
    <br />
    To explore working with us, please send your CV to{" "}
    <a
      href="mailto:careers@apmrestaurantgroup.com"
      className="underline text-white"
    >
      careers@apmrestaurantgroup.com
    </a>
    .
  </p>
      </div>
    </section>
    </div>


    

    </main>
  );
}