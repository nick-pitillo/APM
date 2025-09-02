import React from 'react';
 import Image from 'next/image';

// This is the individual card component with the font class added.
const PressClipping = ({ title, date, description, redir, imageUrl, imageAlt = "Article thumbnail" }) => {
  const finalHref = redir && typeof redir === 'string' && redir.trim() !== ''
    ? (/^https?:\/\//i.test(redir) ? redir : `/${redir.replace(/^\/+/, '')}`)
    : 'https://youtube.com';
  const isExternal = /^https?:\/\//i.test(finalHref);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-12 lg:gap-16">
      
      {/* Image Block */}
      <div className="w-full bg-[#16469D] aspect-square lg:col-span-2">
         <Image src={imageUrl} alt={imageAlt} width={600} height={600} className="w-full h-full object-cover" /> 
      </div>

      {/* Text Content Block */}
      {/* 
        The `font-montserrat` class is added here. 
        It will be inherited by all the text elements inside (h2, p, a).
      */}
      <div className="flex flex-col justify-center lg:col-span-3 font-montserrat">
        
        {/* Title: Will now use Montserrat font */}
        <h2 className="text-3xl font-bold text-black">
          {title}
        </h2>
        
        {/* Date: Will now use Montserrat font */}
        <p className="mt-6 text-2xl font-light text-gray-800">
          {date}
        </p>
        
        {/* Description: Will now use Montserrat font */}
        <p className="mt-6 text-xl font-light text-black leading-snug">
          {description}
        </p>
        
        {/* Button: Will now use Montserrat font */}
        <a 
          href={finalHref}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="mt-10 bg-[#16469D] text-white text-lg font-medium self-start px-5 py-3 rounded-xs transition-colors hover:bg-blue-800"
        >
          READ MORE
        </a>
      </div>
    </div>
  );
};


// The main section component. No changes needed here.
const PressSection = ({ articles = [] }) => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col gap-y-24 md:gap-y-32">
        
        {articles.map((article, index) => (
          <PressClipping 
            key={article.id || index}
            title={article.title}
            date={article.date}
            description={article.description}
            imageUrl={article.imageUrl}
            redir={article.redir}
          />
        ))}

      </div>
    </section>
  );
};

export default PressSection;