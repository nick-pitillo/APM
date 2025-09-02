import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';

const Page = () => {
  return (
    <>
   <div className="hidden md:block h-48 xl:h-52"></div>
      <div className="hidden md:block top-0 z-50 w-full">
      
      <Navbar />
    </div>
    {/* Mobile Navbar: A 'block' by default, but becomes 'hidden' on medium screens (md) and up. */}
    <div className="md:hidden h-24"></div>
    <div className="fixed top-0 z-50 w-full md:hidden">
      <MobileNavbar />

      {/* Give this a z-index that is higher than the navbar's */}

    </div>
    <header className="w-full bg-white py-2 font-montserrat mt-10 md:mt-16">

      {/* An inner container to center the content and limit its max width. */}
      <div className="container mx-auto px-4 text-center">

        {/* The main title now uses clamp() for fluid sizing. */}
        <h1 className="text-[clamp(1.2rem,2.2vw,2.625rem)] font-bold text-gray-900 font-montserrat">
          Contact Our Team
        </h1>

        {/* The separator line - spacing is already correct. */}
        <hr className="mt-12 w-full max-w-5xl mx-auto border-t-1 border-[#16469D]" />

      </div>
    </header>
    <section className="w-full bg-white py-10 md:py-24">
      
      {/* Inner container to center content and set a max-width, matching the original design. */}
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Name */}
        <h2 className="text-2xl md:text-5xl font-medium text-black font-montserrat">
          Álvaro Perez Miranda
        </h2>

        {/* Title. The <br /> tag handles the line break from the original design. */}
        <p className="mt-2 md:mt-6 text-2xl md:text-5xl font-light text-black font-montserrat">
          Founder & Curator
        </p>

        {/* Contact Info. Wrapped in a div for spacing. Made into clickable links for functionality. */}
        <div className="mt-4 md:mt-10 text-md md:text-3xl font-light text-[#16469D] font-montserrat">
          <a href="tel:305-333-2417" className="block hover:underline">
            Phone: (305) 333-2417
          </a>
          <a href="mailto:alvaro@apmrestaurantgroup.com" className="block hover:underline">
            Email: alvaro@apmrestaurantgroup.com
          </a>
        </div>
        
        {/* Biography */}
        <p className="mt-6 md:mt-10 text-lg md:text-4xl font-light text-black font-montserrat leading-normal md:leading-relaxed">
          Founder of APM Restaurant Group, Álvaro blends Japanese craft with Latin hospitality in Miami. He spent 15 years in Tokyo leading 70 restaurant projects. Ogawa earned a MICHELIN Star in 2024. He is Goodwill Ambassador for Japanese Cuisine and Ibaraki Culinary Ambassador.
        </p>

      </div>
    </section>
    <section className="w-full bg-white py-2 md:py-16">
      
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
            className="object-cover"
            priority
          />
        </div>
      </div>

    </section>
    <section className="w-full bg-white py-10 md:py-24">
      
      {/* 
        Inner container to center content and set a max-width.
        - `flex flex-col`: Stacks the children vertically.
        - `gap-y-16 md:gap-y-20`: Creates responsive vertical space between the two sections.
      */}
      <div className="container mx-auto max-w-6xl px-4 flex flex-col gap-y-16 md:gap-y-20">
        
        {/* --- Corporate Office Section --- */}
        <div>
          <h2 className="text-2xl md:text-5xl font-medium text-black font-montserrat mb-8">
            Corporate Office
          </h2>
          
          {/* 
            Container for the details.
            - `mt-6`: Adds margin above the details block.
            - `space-y-4`: Adds vertical space between each line of text.
            - `text-2xl md:text-3xl`: Sets responsive font size for the text.
            - `leading-relaxed`: Increases line height for readability.
          */}
          <div className="mt-4 space-y-2 text-lg md:text-3xl leading-relaxed font-montserrat">
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
          <h2 className="text-2xl md:text-5xl font-medium text-black font-montserrat mb-8">
            Press Inquiries
          </h2>
          
          <div className="mt-4 md:space-y-2 text-lg md:text-3xl leading-relaxed font-montserrat">
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
    <section className="w-full bg-white py-6 md:py-24">
      
      {/* Inner container to center the form and set a max-width. */}
      <div className="container mx-auto max-w-6xl px-4">
        
        <h2 className="text-2xl md:text-5xl font-medium text-black font-montserrat">
          Get in Touch
        </h2>

        {/* 
          The form element. 
          `mt-16` adds space below the title.
        */}
        <form className="mt-12 md:mt-16" noValidate>
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
              <label htmlFor="fullName" className="block text-base md:text-2xl font-normal text-black font-montserrat mb-2 md:mb-3">
                Full Name
              </label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                autoComplete="name"
                className="w-full bg-transparent p-4 md:p-6 border-2 border-[#16469D] text-base md:text-lg"
              />
            </div>

            {/* --- Email --- */}
            <div>
              <label htmlFor="email" className="block text-base md:text-2xl font-normal text-black font-montserrat mb-2 md:mb-3">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                autoComplete="email"
                className="w-full bg-transparent p-4 md:p-6 border-2 border-[#16469D] text-base md:text-lg"
              />
            </div>

            {/* --- Phone Number --- */}
            <div>
              <label htmlFor="phone" className="block text-base md:text-2xl font-normal text-black font-montserrat mb-2 md:mb-3">
                Phone Number
              </label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                autoComplete="tel"
                className="w-full bg-transparent p-4 md:p-6 border-2 border-[#16469D] text-base md:text-lg"
              />
            </div>

            {/* --- Subject --- */}
            <div>
              <label htmlFor="subject" className="block text-base md:text-2xl font-normal text-black font-montserrat mb-2 md:mb-3">
                Subject
              </label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                className="w-full bg-transparent p-4 md:p-6 border-2 border-[#16469D] text-base md:text-lg"
              />
            </div>

            {/* --- Message --- */}
            <div className="md:col-span-2"> {/* This makes the message field span both columns on desktop */}
              <label htmlFor="message" className="block text-base md:text-2xl font-normal text-black font-montserrat mb-2 md:mb-3">
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                className="w-full bg-transparent p-4 md:p-6 border-2 border-[#16469D] text-base md:text-lg"
              ></textarea>
            </div>
          </div>

          {/* --- Submit Button --- */}
          <button 
            type="submit" 
            className="w-full mt-10 md:mt-12 bg-[#16469D] text-white font-medium text-lg md:text-3xl py-4 md:py-7 transition-colors hover:bg-blue-800"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
    </>
  );
};

export default Page;