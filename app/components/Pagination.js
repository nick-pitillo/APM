import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  // Create an array of page numbers to map over, e.g., [1, 2, 3, 4]
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="w-full font-montserrat py-8 sm:py-12 md:py-16 px-6 sm:px-8 md:px-0">
    <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-center gap-x-3 sm:gap-x-4 md:gap-x-8 gap-y-2 sm:gap-y-3 md:gap-y-0">
      
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          // Responsive classes are used for size, font, and padding
          className={`
            flex items-center justify-center rounded-sm transition-colors
            
            // Mobile sizes (default)
            w-12 h-12 text-2xl
  
            // Tablet sizes
            sm:w-16 sm:h-16 sm:text-3xl
  
            // Desktop sizes
            md:w-[70px] md:h-[70px] md:text-4xl
            
            font-bold
            ${currentPage === number
              ? 'bg-[#16469D] text-white' // Active state
              : 'text-black hover:bg-gray-200' // Inactive state
            }
          `}
        >
          {number}
        </button>
      ))}
      
    </div>
  </nav>
  );
};

export default Pagination;