import React from 'react';
import Link from 'next/link'; // Import the Link component for internal navigation

const InquiriesCTA = () => {
  return (
    // Main section container. 
    // `bg-[#29FF12]` is an arbitrary value for the specific green background.
    // `py-12` provides responsive vertical padding instead of a fixed height.
    <section className="w-full py-[clamp(3rem,8vw,6rem)] font-montserrat">

  {/* Inner container to center the content. */}
  <div className="container mx-auto px-4 flex flex-col items-center text-center gap-y-2">

    {/* Title with fluid typography */}
    <h2 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-medium text-black">
      Press Inquiries
    </h2>

    {/* Description text with fluid typography */}
    <p className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-light text-black leading-snug">
      Email <a href="mailto:nicole@red-balloon.net" className="underline hover:text-gray-700">nicole@red-balloon.net</a>.
      <br />
      For general questions, visit our <Link href="/contact" className="underline hover:text-gray-700">Contact page</Link>.
    </p>

  </div>
</section>
  );
};

export default InquiriesCTA;