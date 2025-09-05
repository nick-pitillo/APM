// File: app/coming-soon/[slug]/page.jsx

// 1. IMPORT `use` FROM REACT
import React, { use } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import MobileNavbar from '../../components/MobileNavbar';
import { ImageGallerySlider } from './ImageGalleryClient';

// --- DATA (UNCHANGED) ---
const restaurants = {
  'kuri-kuri': {
    name: 'Kuri Kuri',
    logoUrl: '/kuri.webp',
    heroImageUrl: '/kurim.webp',
    galleryImages: [
      { id: 1, src: '/kurim.webp', alt: 'Kuri Kuri dish 1', type: 'left' },
    ],
  },
  'masayuki': {
    name: 'Masayuki',
    logoUrl: '/masayuki.webp',
    heroImageUrl: '/mayuki/masa (4).webp',
    galleryImages: [
      { id: 1, src: '/mayuki/masa (1).webp', alt: 'Masayuki plate', type: 'left' },
      { id: 2, src: '/mayuki/masa (2).webp', alt: 'Masayuki chef', type: 'center' },
      { id: 3, src: '/mayuki/masa (3).webp', alt: 'Masayuki dessert', type: 'right' },
    ],
  },
};

// --- HELPER COMPONENTS ---

const ScrollArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const ComingSoonDisplay = ({ restaurant }) => {
    return (
        <>
         <div className="hidden md:block h-48 xl:h-52"></div>
        <div className="hidden md:block top-0 z-50 w-full">
          <Navbar />
        </div>
        <div className="md:hidden h-24"></div>
        <div className="fixed top-0 z-50 w-full md:hidden">
          <MobileNavbar />
        </div>
        <main className="font-montserrat">
            <section className="relative flex h-screen flex-col items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: `url("${restaurant.heroImageUrl}")` }}>
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 flex flex-col items-center">
                    <Image src={restaurant.logoUrl} alt={`${restaurant.name} Logo`} width={347} height={74} className="mb-12" unoptimized={true} />
                    <h1 className="text-3xl font-light tracking-widest">Coming Soon</h1>
                </div>
                <div className="absolute bottom-10 z-10 flex flex-col items-center gap-2">
                    <p className="text-xl font-light">Scroll</p>
                    <div className="animate-bounce"><ScrollArrowIcon /></div>
                </div>
            </section>
            <ImageGallerySlider images={restaurant.galleryImages} />
        </main>
        </>
    );
};

// --- STATIC PARAMS GENERATION FOR EXPORT ---
export async function generateStaticParams() {
    // Return all the possible slug values for static generation
    return Object.keys(restaurants).map((slug) => ({
        slug: slug,
    }));
}

// --- MAIN PAGE COMPONENT ---
export default function RestaurantComingSoonPage({ params }) {
    
    // 2. THIS IS THE FIX
    // Use the `use` hook to "unwrap" the params promise and get the slug.
    const resolvedParams = use(params);
    const slug = resolvedParams.slug;

    const restaurantData = restaurants[slug];

    if (!restaurantData) {
        notFound();
    }

    return <ComingSoonDisplay restaurant={restaurantData} />;
}