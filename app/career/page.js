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
        <div className="hidden md:block h-48 xl:h-52"></div>
        <div className="hidden md:block top-0 z-50 w-full">

          <Navbar />
        </div>

        <div className="md:hidden h-24"></div>
        <div className="fixed top-0 z-50 w-full md:hidden">
          <MobileNavbar />



        </div>
      <CareersHero />
   
     
      <FeaturedLogos />
      <section className="w-full bg-white pt-24 md:pt-32 pb-10 md:pb-20 lg:pb-30 mx-auto">
      
      {/* 
        Inner container:
        - `container mx-auto`: Centers the content block horizontally.
        - `max-w-7xl`: Sets a max-width to approximate the original design's width.
        - `px-4`: Adds padding on the sides for smaller screens.
      */}
      <div className="container px-2 md:px-2 w-full font-montserrat mx-auto">
        
        {/* Title */}
        {/* `text-[2.625rem]` uses an arbitrary value to exactly match the font size. */}
        {/* `font-medium` matches the `fontWeight: '500'`. */}
        <h2 id="opportunities" className="text-[clamp(1.4rem,2.2vw,2.625rem)]  font-medium text-black px-6 md:px-0 lg:px-0">
          Our Culture
        </h2>
        
        {/* Description Text */}
        {/* `text-4xl` matches the `fontSize: 36`. */}
        {/* `font-light` matches the `fontWeight: '300'`. */}
        {/* `mt-6` provides the vertical space between the title and this paragraph. */}
        {/* `leading-relaxed` improves readability for the large block of text. */}
        <p className="mt-6 text-[clamp(1rem,1.6vw,1.65rem)] font-light text-black leading-relaxed px-6 md:px-0 lg:px-0">
          At APM Restaurant Group, we’re more than just a team we’re a family united by the Japanese principles of omotenashi (mindful hospitality), komakai (fine attention to detail), and sensai (sensitivity). Across our award-winning concepts, we create environments where creativity thrives, skills sharpen, and guests experience the warmth of true hospitality.
        </p>
        
      </div>
    </section>
    <section className="w-full bg-white py-2 px-8 sm:px-5">
      
      {/* 
        Inner Blue Placeholder Block:
        - `container mx-auto`: Centers the block horizontally.
        - `bg-[#16469D]`: The exact blue background color.
        - `h-[702px]`: The exact height from your design, making it a large block.
        - `flex items-center justify-center`: The standard Tailwind way to perfectly center content inside a div.
      */}
    <div className="container mx-auto flex h-[15.5rem] sm:h-[25.5rem] lg:h-[40.5rem] items-center justify-center bg-[#16469D] relative overflow-hidden">

        <Image
          src="/exploreopp.png"
          alt="Explore career opportunities at APM"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
    </section>
    <section className="w-full bg-white pt-12 pb-12 px-8">
      
      {/* 
        Inner container for the text content:
        - `container mx-auto`: Centers the block horizontally.
        - `max-w-7xl`: Constrains the width to match the original layout's feel.
        - `px-4`: Adds horizontal padding on smaller screens to prevent text from touching the edges.
      */}
      <div className="container mx-auto font-montserrat">
        
        {/* Title */}
        {/* `text-[2.625rem]` uses an arbitrary value to exactly match the font size. */}
        {/* `font-medium` matches the `fontWeight: '500'`. */}
        <h2 className="text-center sm:text-center md:text-left lg:text-left text-[clamp(1.4rem,2.2vw,2.625rem)]  font-medium text-black">
          A Culture of Growth & Development
        </h2>
        
        {/* Description Text */}
        {/* `text-4xl` is the Tailwind class for a 36px font size. */}
        {/* `font-light` matches the `fontWeight: '300'`. */}
        {/* `mt-8` provides the vertical space below the title. */}
        {/* `leading-relaxed` adds extra line spacing for better readability. */}
        <p className="text-center sm:text-center md:text-left lg:text-left mt-6 text-[clamp(1rem,1.6vw,1.65rem)]  font-light text-black leading-relaxed px-6 md:px-0 lg:px-0">
          We offer unique opportunities for professional growth within our diverse collection of restaurants, from the vibrant energy of Wabi Sabi to the refined elegance of Ogawa. Our various concepts provide a rich landscape for skill development, allowing you to explore different culinary niches and expand your expertise. We encourage internal mobility, supporting the advancement of our team members within the group.
        </p>
        
      </div>
    </section>
    <CultureMobile />
    <CultureOverlayGrid /> 
    {/* Anchor for "Explore Opportunities" CTA */}
    <div  className="scroll-mt-48 md:scroll-mt-[260px]"></div>
    <section className="w-full bg-white py-14">
      
      {/* 
        Inner container for the text content:
        - `container mx-auto`: Centers the block horizontally.
        - `max-w-7xl`: Constrains the width to match the original layout's feel.
        - `px-4`: Adds horizontal padding on smaller screens to prevent text from touching the edges.
      */}
      <div className="container mx-auto font-montserrat">
        
        {/* Title */}
        {/* `text-[2.625rem]` uses an arbitrary value to exactly match the font size. */}
        {/* `font-medium` matches the `fontWeight: '500'`. */}
        <h2 className="text-left sm:text-center md:text-left lg:text-left   text-[clamp(1.4rem,2.2vw,2.625rem)]  font-medium text-black px-6 md:px-0 lg:px-0">
        Study and Practice
        </h2>
        
        {/* Description Text */}
        {/* `text-4xl` is the Tailwind class for a 36px font size. */}
        {/* `font-light` matches the `fontWeight: '300'`. */}
        {/* `mt-8` provides the vertical space below the title. */}
        {/* `leading-relaxed` adds extra line spacing for better readability. */}
        <p className="text-left sm:text-center md:text-left lg:text-left mt-6 text-[clamp(1rem,1.6vw,1.65rem)] font-light text-black leading-relaxed px-6 md:px-0 lg:px-0">
        We are passionate about fostering a deep understanding of Japanese cuisine and culture. Each year, select team members are invited on an all-expenses-paid R&D trip to Japan with founder Alvaro Perez Miranda. This immersive experience allows our team to connect with the heart of Japanese culinary traditions, sourcing ingredients, exploring new techniques, and deepening their appreciation for the culture.  Beyond this unique opportunity, we provide ongoing training programs to refine skills and enhance professional development.
        </p>
        
      </div>
    </section>
    <MeetOur />
    {/* Desktop / Large screen */}
<section className="w-full bg-white py-16 font-montserrat hidden md:block">
  <div className="mx-auto max-w-[1600px] px-6 md:px-10 xl:px-20">
    <h2 className="text-[clamp(1.4rem,2.2vw,2.625rem)]  font-medium text-black mb-8">Join Us</h2>

    <p className="text-[clamp(1rem,1.6vw,1.65rem)] font-light text-black leading-relaxed">
      APM Restaurant Group is seeking talented and experienced hospitality
      and culinary professionals to join our expanding team.
    </p>

    <p className="mt-6 text-[clamp(1rem,1.6vw,1.65rem)] font-light text-black leading-relaxed">
      Explore our current openings and discover your place within our
      exceptional team.
    </p>

    <p className="mt-6 text-[clamp(1rem,1.6vw,1.65rem)] font-light text-black leading-relaxed">
      To explore working with us, please send your CV to{" "}
      <a
        href="mailto:careers@apmrestaurantgroup.com"
        className="underline"
      >
        careers@apmrestaurantgroup.com
      </a>
      .
    </p>
  </div>
</section>

{/* Mobile / Small screen */}
<section className="w-full bg-white py-10 px-4 font-montserrat block md:hidden">
  <h2 className="text-center text-[clamp(1.4rem,2.2vw,2.625rem)]  font-medium text-black mb-6">
    Join Us
  </h2>

  <p className="mx-auto max-w-[837px] text-center text-[clamp(1rem,1.6vw,1.65rem)] font-light leading-relaxed text-black">
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
      className="underline text-black"
    >
      careers@apmrestaurantgroup.com
    </a>
    .
  </p>
</section>

    </main>
  );
}