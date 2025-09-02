'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const DynamicPaginationDots = ({ totalSlides, activeIndex, onDotClick }) => {
    const dots = Array.from({ length: totalSlides }, (_, i) => i);
    return ( <div className="flex items-center gap-x-[30px]">{dots.map(index => (<button key={index} onClick={() => onDotClick(index)} className="h-[18px] w-[18px] focus:outline-none">{activeIndex === index ? (<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9.73828" cy="9" r="9" fill="white" fillOpacity="0.65"/></svg>) : (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8.41304" stroke="white" strokeOpacity="0.35" strokeWidth="1.17391"/></svg>)}</button>))}</div> );
};

export const ImageGallerySlider = ({ images = [] }) => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    if (images.length === 0) return null;
    return ( <section className="relative w-full bg-white py-[2px]"><Swiper loop slidesPerView={'auto'} centeredSlides spaceBetween={2} onSwiper={setSwiperInstance} onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>{images.map((image) => (<SwiperSlide key={image.id} className={`w-[80%] ${image.type === 'center' && 'lg:w-[949px]'} ${image.type === 'left' && 'lg:w-[505px]'} ${image.type === 'right' && 'lg:w-[466px]'}`}><div className="h-[825px]"><Image src={image.src} alt={image.alt} width={image.type === 'center' ? 949 : (image.type === 'left' ? 505 : 466)} height={825} className="h-full w-full object-cover" unoptimized={true} /></div></SwiperSlide>))}</Swiper><div className="absolute z-10 bottom-[29px] left-1/2 -translate-x-1/2"><DynamicPaginationDots totalSlides={images.length} activeIndex={activeIndex} onDotClick={(index) => swiperInstance?.slideToLoop(index)}/></div></section> );
};


