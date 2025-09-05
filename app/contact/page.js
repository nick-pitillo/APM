import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';

const Page = () => {
  return (
    <>
   <div className="hidden md:block h-24 xl:h-32"></div>
      <div className="hidden md:block top-0 z-50 w-full">
      
      <Navbar />
    </div>
    {/* Mobile Navbar: A 'block' by default, but becomes 'hidden' on medium screens (md) and up. */}
    <div className="md:hidden h-24"></div>
    <div className="fixed top-0 z-50 w-full md:hidden">
      <MobileNavbar />

      {/* Give this a z-index that is higher than the navbar's */}

    </div>
    <div className="bg-white min-h-screen relative">
      {/* Blue background section */}
      <div className="px-2 sm:px-2 lg:px-2 relative">
        <div className="rounded-2xl h-[150px] sm:h-[170px] md:h-[180px] lg:h-[180px] xl:h-[200px] bg-[#16469D] absolute top-[40px] md:top-[80px] left-2 right-2 w-auto z-10" />
        
        {/* Header section in blue area - centered in blue background */}
        <header className="absolute top-[40px] md:top-[80px] left-2 right-2 z-20 w-auto h-[150px] sm:h-[170px] md:h-[180px] lg:h-[180px] xl:h-[200px] flex items-center justify-center font-montserrat">
          <h1 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-extralight text-white font-montserrat text-center">
            Contact Our Team
          </h1>
        </header>
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-2 py-8 max-w-7xl">
        {/* Content starts below the blue header */}
        <div className="mt-[210px] sm:mt-[230px] md:mt-[260px] lg:mt-[280px] xl:mt-[300px]">
    
    <section className="w-full bg-white py-12 md:py-16">
      
      {/* Inner container to center content and set a max-width, matching the original design. */}
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Name */}
        <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black font-montserrat">
          Alvaro Perez Miranda
        </h2>

        {/* Title. The <br /> tag handles the line break from the original design. */}
        <p className="mt-4 md:mt-8 text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-black font-montserrat">
          Founder & Curator
        </p>

        {/* Contact Info. Wrapped in a div for spacing. Made into clickable links for functionality. */}
        <div className="mt-6 md:mt-10 text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-[#16469D] font-montserrat">
          <a href="tel:305-333-2417" className="block hover:underline">
            Phone: (305) 333-2417
          </a>
          <a href="mailto:alvaro@apmrestaurantgroup.com" className="block hover:underline">
            Email: alvaro@apmrestaurantgroup.com
          </a>
        </div>
        
        {/* Biography */}
        <p className="mt-6 md:mt-10 text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-black font-montserrat leading-normal md:leading-relaxed">
          Founder of APM Restaurant Group, Alvaro blends Japanese craft with Latin hospitality in Miami. He spent 15 years in Tokyo leading 70 restaurant projects. Ogawa earned a MICHELIN Star in 2024. He is Goodwill Ambassador for Japanese Cuisine and Ibaraki Culinary Ambassador.
        </p>

      </div>
    </section>
    <section className="w-full bg-white py-8 md:py-12">
      
      {/* 
        This div is the placeholder for the image or media content.
        - `bg-black`: Sets the solid black background.
        - `container mx-auto`: This utility centers the element horizontally.
        - `max-w-6xl`: Sets a max-width of 1152px, which is a close, standard equivalent to the original 1126px.
        - `aspect-[1126/600]`: This is a key part. It uses an arbitrary value to enforce the exact aspect ratio of the original design (1126 width / 600 height). This ensures the box scales perfectly without getting distorted.
        - `px-4 sm:px-0`: Adds padding on the smallest screens but removes it on larger ones so the box edges can align with other content if needed.
      */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-0">
        <div className="relative w-full aspect-[1126/600]">
          <Image
            src="/about/Rectangle 53.webp"
            alt="Contact image"
            fill
            sizes="(min-width: 1126px) 1126px, 100vw"
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </div>

    </section>
    <section className="w-full bg-white py-12 md:py-16">
      
      {/* 
        Inner container to center content and set a max-width.
        - `flex flex-col`: Stacks the children vertically.
        - `gap-y-16 md:gap-y-20`: Creates responsive vertical space between the two sections.
      */}
      <div className="container mx-auto max-w-6xl px-4 flex flex-col gap-y-16 md:gap-y-20">
        
        {/* --- Corporate Office Section --- */}
        <div>
          <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black font-montserrat mb-6">
            Corporate Office
          </h2>
          
          {/* 
            Container for the details.
            - `mt-6`: Adds margin above the details block.
            - `space-y-4`: Adds vertical space between each line of text.
            - `text-2xl md:text-3xl`: Sets responsive font size for the text.
            - `leading-relaxed`: Increases line height for readability.
          */}
          <div className="space-y-2 text-[clamp(0.9rem,1.4vw,1.45rem)] leading-relaxed font-montserrat">
            <p className="font-light">
              <strong className="font-medium text-[#043573]">Address: </strong>
              <span className="text-black">853 NE 79th St, Miami, FL 33138</span>
            </p>
            <p className="font-light">
              <strong className="font-medium text-[#043573]">Phone: </strong>
              <a href="tel:305-333-2417" className="text-black hover:underline">(305) 333-2417</a>
            </p>
            <p className="font-light">
              <strong className="font-medium text-[#043573]">Email: </strong>
              <a href="mailto:info@apmrestaurantgroup.com" className="text-black hover:underline">info@apmrestaurantgroup.com</a>
            </p>
          </div>
        </div>

        {/* --- Press Inquiries Section --- */}
        <div>
          <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black font-montserrat mb-6">
            Press Inquiries
          </h2>
          
          <div className="space-y-2 text-[clamp(0.9rem,1.4vw,1.45rem)] leading-relaxed font-montserrat">
            <p className="font-light">
              <strong className="font-medium text-[#043573]">Name: </strong>
              <span className="text-black">Nicole Paloux</span>
            </p>
            <p className="font-light">
              <strong className="font-medium text-[#043573]">Email: </strong>
              <a href="mailto:nicole@red-balloon.net" className="text-black hover:underline">nicole@red-balloon.net</a>
            </p>
          </div>
        </div>
        
      </div>
    </section>
    <section className="w-full bg-white py-12 md:py-16">
      
      {/* Inner container to center the form and set a max-width. */}
      <div className="container mx-auto max-w-6xl px-4">
        
        <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black font-montserrat">
          Get in Touch
        </h2>

        {/* 
          The form element. 
          `mt-16` adds space below the title.
        */}
        <form className="mt-8 md:mt-12" noValidate>
          {/* 
            CSS Grid container for the form fields.
            - `grid-cols-1`: On mobile, it's a single column.
            - `md:grid-cols-2`: On medium screens and up, it becomes a two-column grid.
            - `gap-x-8`: Sets the horizontal space between columns.
            - `gap-y-12`: Sets the vertical space between rows.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-12">
            
            {/* --- Full Name --- */}
            <div>
              <label htmlFor="fullName" className="block text-[clamp(0.9rem,1.4vw,1.45rem)] font-normal text-black font-montserrat mb-2 md:mb-3">
                Full Name
              </label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                autoComplete="name"
                className="rounded-2xl w-full bg-transparent p-4 md:p-6 border-2 border-[#16469D] text-[clamp(0.9rem,1.4vw,1.45rem)]"
              />
            </div>

            {/* --- Email --- */}
            <div>
              <label htmlFor="email" className="block text-[clamp(0.9rem,1.4vw,1.45rem)] font-normal text-black font-montserrat mb-2 md:mb-3">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                autoComplete="email"
                className="rounded-2xl w-full bg-transparent p-4 md:p-6 border-2 border-[#16469D] text-[clamp(0.9rem,1.4vw,1.45rem)]"
              />
            </div>

            {/* --- Phone Number --- */}
            <div>
              <label htmlFor="phone" className="block text-[clamp(0.9rem,1.4vw,1.45rem)] font-normal text-black font-montserrat mb-2 md:mb-3">
                Phone Number
              </label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                autoComplete="tel"
                className="rounded-2xl w-full bg-transparent p-4 md:p-6 border-2 border-[#16469D] text-[clamp(0.9rem,1.4vw,1.45rem)]"
              />
            </div>

            {/* --- Subject --- */}
            <div>
              <label htmlFor="subject" className="block text-[clamp(0.9rem,1.4vw,1.45rem)] font-normal text-black font-montserrat mb-2 md:mb-3">
                Subject
              </label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                className="rounded-2xl w-full bg-transparent p-4 md:p-6 border-2 border-[#16469D] text-[clamp(0.9rem,1.4vw,1.45rem)]"
              />
            </div>

            {/* --- Message --- */}
            <div className="md:col-span-2 "> {/* This makes the message field span both columns on desktop */}
              <label htmlFor="message" className="block text-[clamp(0.9rem,1.4vw,1.45rem)] font-normal text-black font-montserrat mb-2 md:mb-3 ">
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                className="rounded-2xl w-full bg-transparent p-4 md:p-6 border-2 border-[#16469D] text-[clamp(0.9rem,1.4vw,1.45rem)]"
              ></textarea>
            </div>
          </div>

          {/* --- Submit Button --- */}
          <button 
            type="submit" 
            className="w-full mt-8 md:mt-10 bg-[#16469D] rounded-2xl text-white font-medium text-[clamp(0.9rem,1.4vw,1.45rem)] py-4 md:py-7 transition-colors hover:bg-blue-800"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
        </div>
      </div>
      </div>
    </>
  );
};

export default Page;