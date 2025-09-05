'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import PressStrip from '../components/PressStrip';


export default function PressPage() {
  const allPressItems = [
    {
      id: 1,
      title: "Creamy Udon Pasta with Umami Butter",
      date: "August 26, 2025",
      description: "A recipe for a creamy udon dish with an umami butter sauce, featured on the recipe-sharing platform Copy Me That.",
      url: "https://www.foodandwine.com/creamy-udon-with-umami-butter-11784219",
      image: "https://www.foodandwine.com/thmb/4DWfeHX1ubkOatLuWOnWTBrju8s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Creamy-Udon-with-Umami-Butter-FT-MAG-RECIPE-0925-94bfa0ef48cb4ee8a1df1ff29519dbee.jpg",
      publication: "Food & Wine"
    },
    {
      id: 2,
      title: "Hiyakawa Is Popping Up in Wynwood",
      date: "July 3, 2025",
      description: "The South Florida Business Journal announces Hiyakawa's summer pop-up in Wynwood, offering its signature Japanese cuisine while the main restaurant undergoes renovations.",
      url: "https://www.bizjournals.com/southflorida/news/2025/07/03/hiyakawa-miami-wyndwood-pop-up-restaurant.html",
      image: "https://media.bizj.us/view/img/13010047/hiyakawa-miami*900x506x2048-1152-0-107.jpg",
      publication: "South Florida Business Journal"
    },
    {
      id: 3,
      title: "Q&A: A New Name, the Same Soul: Midorie's Culinary Journey Expands",
      date: "July 23, 2025",
      description: "Owner Alvaro Perez Miranda discusses the evolution of Wabi Sabi into Midorie, detailing the brand's growth, the introduction of a new Temaki Bar, and the commitment to maintaining the soul of the restaurant.",
      url: "https://worldredeye.com/2025/07/qa-a-new-name-the-same-soul-midories-culinary-journey-expands/",
      image: "https://worldredeye.com/wp-content/uploads/2025/07/23/0-27-hiro-asano-alvaro-perez-miranda-masayuki-komatsu_new-1536x1023.jpg",
      publication: "World Red Eye"
    },
    {
      id: 4,
      title: "Hiyakawa's Alvaro Perez Miranda Wants Miami to Embrace Japanese Culture",
      date: "June 27, 2025",
      description: "A feature on Alvaro Perez Miranda's role in shaping Miami's Japanese dining scene, highlighting his cultural bridge-building and the principles of hospitality that define his restaurants, including Hiyakawa and the Michelin-starred Ogawa.",
      url: "https://blog.resy.com/2025/06/alvaro-perez-miranda-restaurants-miami/",
      image: "https://blog.resy.com/wp-content/uploads/2025/05/OGAWA-Alvaro-Perez-Miranda9-1200x675.jpg",
      publication: "Resy"
    },
    {
      id: 5,
      title: "WRE News: Alvaro Perez Miranda's Wabi Sabi Reopens as \"Midorie\"",
      date: "June 19, 2025",
      description: "This article announces the rebranding of the beloved Wabi Sabi to Midorie, aligning with the APM Restaurant Group's expansion plans and introducing a new hands-on omakase experience with a Temaki Bar.",
      url: "https://worldredeye.com/2025/06/wre-news-alvaro-perez-mirandas-wabi-sabi-reopens-as-midorie/",
      image: "/salmon.webp",
      publication: "World Red Eye"
    },
    {
      id: 6,
      title: "Michelin-starred restaurateur to open in West Palm Beach",
      date: "March 20, 2025",
      description: "Restaurateur Alvaro Perez Miranda announces the expansion of his brand with a new Midorie location in West Palm Beach, bringing his Michelin-starred expertise to a new market.",
      url: "https://www.bizjournals.com/southflorida/news/2025/03/20/michelin-star-restaurateur-open-west-palm-beach.html",
      image: "https://media.bizj.us/view/img/12946042/midorie-wpb-rendering*900x506x1600-900-0-0.jpg",
      publication: "South Florida Business Journal"
    },
    {
      id: 7,
      title: "Venezuelan Restaurateur Crowned Miami's Omakase King",
      date: "February 11, 2025",
      description: "An in-depth profile recognizing Alvaro Perez Miranda as the leading figure in Miami's omakase scene and the first Latino to be named a Goodwill Ambassador for Japanese Cuisine by Japan's Ministry of Agriculture.",
      url: "https://www.miaminewtimes.com/restaurants/venezuelan-restaurateur-crowned-miamis-omakase-king-22110963",
      image: "https://media1.miaminewtimes.com/mia/imager/u/blog/22119755/wabi_sabi_-_dining_room_1.webp?cb=c317c8438dbf16af5d756c40107bf10b",
      publication: "Miami New Times"
    },
    {
      id: 8,
      title: "The Miami Restaurants You'll Want to Book in January, According to Resy",
      date: "January 2025",
      description: "Resy's guide to essential Miami dining for January includes Hiyakawa, recognized for its exceptional omakase and serene dining experience.",
      url: "https://blog.resy.com/2025/01/miami-restaurants-jan-25/",
      image: "https://image.resy.com/3/003/2/85383/956c3320c274dff9d8062c80d2fde4dd5771c065/jpg/640x360",
      publication: "Resy"
    },
    {
      id: 9,
      title: "This 10-seat Michelin-starred Restaurant in Florida Has the Highest Ratings in the U.S.",
      date: "January 17, 2025",
      description: "Travel + Leisure highlights a study where Ogawa in Miami was named the highest-rated fine-dining restaurant in the U.S., with 98.7% of its Google reviews being five stars.",
      url: "https://www.travelandleisure.com/ogawa-miami-florida-highest-rated-michelin-restaurant-in-the-us-8762818",
      image: "https://www.travelandleisure.com/thmb/xKRQ_EhPTgJUAA_4ie8pfk9YiuU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-header-sushi-box-ogawa-miami-MICHJPNFL1224-cbb9c978a4554949a1f54efd7a6faf31.jpg",
      publication: "Travel + Leisure"
    },
    {
      id: 10,
      title: "Palm Beach County restaurant openings we're most eager to see in 2025",
      date: "December 20, 2024",
      description: "The Palm Beach Post lists Midorie among the most anticipated restaurant openings for 2025, noting its connection to the Michelin-starred Ogawa and its reputation for quality sushi.",
      url: "https://www.palmbeachpost.com/story/entertainment/dining/2024/12/20/palm-beach-county-restaurant-openings-were-most-eager-to-see-in-2025/76961314007/",
      image: "https://www.palmbeachpost.com/gcdn/authoring/authoring-images/2024/12/20/NPPP/77104327007-wabisabi-65.jpeg?width=300&height=451&fit=crop&format=pjpg&auto=webp",
      publication: "The Palm Beach Post"
    },
    {
      id: 11,
      title: "A Local's Guide to Miami's Coolest Neighborhoods",
      date: "December 2, 2024",
      description: "The New York Times features Little River as a notable Miami neighborhood, highlighting Ogawa as a premier dining destination for its intimate and high-end omakase experience.",
      url: "https://www.nytimes.com/2024/12/02/travel/miami-neighborhoods-guide.html",
      image: "https://res.cloudinary.com/the-infatuation/image/upload/c_scale,w_1200,q_auto,f_auto/Ogawa_Interior_Cleveland_Miami-2_rmtnn8",
      publication: "The New York Times"
    },
    {
      id: 12,
      title: "How Alvaro Perez Has Mastered Bringing The Intimate Japanese Omakase Culture To Miami",
      date: "March 13, 2024",
      description: "A feature on Alvaro Perez Miranda's role in shaping Miami's Japanese dining scene, highlighting his cultural bridge-building and the principles of hospitality that define his restaurants, including Hiyakawa and the Michelin-starred Ogawa.",
      url: "https://hauteliving.com/2024/03/alvaro-perez-ogawa-miami/746969/",
      image: "https://hauteliving.com/wp-content/uploads/2024/03/APOG2.jpg",
      publication: "Haute Living"
    },
    {
      id: 13,
      title: "Best Japanese Restaurant 2024: Ogawa",
      date: "June 13, 2024",
      description: "Miami New Times awards Ogawa the title of 'Best Japanese Restaurant,' celebrating its authentic atmosphere and exceptional omakase that makes diners feel as if they've been transported to Japan.",
      url: "https://www.miaminewtimes.com/best-of-miami/2024/eat-and-drink/best-japanese-restaurant-20442338",
      image: "https://media.timeout.com/images/106080191/750/422/image.jpg",
      publication: "Miami New Times"
    },
    {
      id: 14,
      title: "Meet Alvaro Perez Miranda",
      date: "May 29, 2024",
      description: "CanvasRebel interviews Alvaro Perez Miranda about his journey as a restaurateur, the philosophy behind his restaurant group, and his mission to bring authentic Japanese cuisine to Miami.",
      url: "https://canvasrebel.com/meet-alvaro-perez-miranda/",
      image: "https://cdn.canvasrebel.com/wp-content/uploads/2024/12/c-1732733194697-1732733194420_alvaro_perezmiranda_img_0797-1290x860.jpg",
      publication: "Canvas Rebel"
    },
    {
      id: 15,
      title: "Meet Alvaro Perez, The Mastermind Behind Miami's Ogawa",
      date: "December 27, 2024",
      description: "Haute Living profiles Alvaro Perez Miranda, exploring his passion for Japanese culture and cuisine, and how he translated that into the Michelin-starred success of Ogawa.",
      url: "https://voyagemia.com/interview/hidden-gems-meet-alvaro-perez-miranda-of-apm-restaurant-group/",
      image: "https://voyagemia.com/wp-content/uploads/2024/12/c-1733925406893-1733925406641_alvaro_prezmiranda_alvaro-perez-miranda9-1536x1024.jpg",
      publication: "VoyageMIA"
    },
    {
      id: 16,
      title: "An Intimate Dining Experience",
      date: "January 26, 2024",
      description: "Boca Raton Observer features Ogawa, detailing its exclusive 11-seat omakase counter and the meticulous craftsmanship that earned it a Michelin star.",
      url: "https://bocaratonobserver.com/food-and-drink/bites/an-intimate-dining-experience/",
      image: "https://bocaratonobserver.com/downloads/22638/download/fb74aea9-25e4-43a0-b916-15d1fac404e6.jpg?cb=bf044952209ebd9b2920047ff2f7f7c8&w=1400&h=",
      publication: "Boca Raton Observer"
    },
    {
      id: 17,
      title: "Ogawa Review",
      date: "January 16, 2024",
      description: "The Infatuation reviews Ogawa, praising it as one of the best omakase experiences in Miami, highlighting the quality of the fish and the theatrical presentation.",
      url: "https://www.theinfatuation.com/miami/reviews/ogawa",
      image: "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_640,ar_4:3,g_center,f_auto/Ogawa_Patio_Cleveland_Miami-3_emvinf",
      publication: "The Infatuation"
    },
    {
      id: 18,
      title: "Ogawa",
      date: "January 2, 2024",
      description: "Time Out Miami reviews Ogawa, describing it as an 'exceptional' and 'transportive' omakase experience that justifies its high price point with flawless execution and top-tier ingredients.",
      url: "https://www.timeout.com/miami/restaurants/ogawa",
      image: "https://media.timeout.com/images/106080192/750/422/image.jpg",
      publication: "Time Out Miami"
    },
    {
      id: 19,
      title: "The Best Omakase And Sushi In Miami",
      date: "December 19, 2023",
      description: "The Infatuation names Ogawa as a top spot for omakase in Miami, citing its serene atmosphere and the exceptional quality of its multi-course tasting menu.",
      url: "https://www.theinfatuation.com/miami/guides/best-sushi-omakase-restaurants-miami",
      image: "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_640,ar_4:3,g_center,f_auto/Ogawa_Interior_Cleveland_Miami-2_rmtnn8",
      publication: "The Infatuation"
    },
    {
      id: 20,
      title: "Ogawa, Miami's Newest Omakase Experience, Opens in Little River",
      date: "November 13, 2023",
      description: "Miami New Times covers the opening of Ogawa, detailing the restaurant's concept, the background of its chefs, and its goal to offer a truly authentic Japanese dining experience.",
      url: "https://www.miaminewtimes.com/restaurants/ogawa-miamis-newest-omakase-experience-opens-in-little-river-18284745",
      image: "https://media1.miaminewtimes.com/mia/imager/u/blog/18402381/214ac9c0-dd6c-4422-b9a9-81e216bc9519.webp?cb=1736944854",
      publication: "Miami New Times"
    },
    {
      id: 21,
      title: "Hidden Gems: Meet Alvaro Perez Miranda of APM Restaurant Group",
      date: "April 27, 2023",
      description: "VoyageMIA interviews Alvaro Perez Miranda, who shares his story, the inspiration behind his restaurant concepts like Hiyakawa, and his vision for the future of Japanese dining in Miami.",
      url: "https://www.miamilivingmagazine.com/post/miami-restaurateur-alvaro-perez-miranda-appointed-goodwill-ambassador-for-japanese-cuisine",
      image: "https://static.wixstatic.com/media/fbd6ab_d077f93928dc432d84c003e0f96dcff1~mv2.jpg/v1/fill/w_608,h_912,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fbd6ab_d077f93928dc432d84c003e0f96dcff1~mv2.jpg",
      publication: "Miami Living Magazine"
    },
    {
      id: 22,
      title: "Midorie is an affordable hidden gem tucked in Coconut Grove",
      date: "February 2, 2023",
      description: "Exceptional food and top-notch hospitality are the name of the game at Midorie, a charming hidden gem tucked inside a cozy courtyard off Main Highway in Coconut Grove.",
      url: "https://www.cbsnews.com/miami/news/midorie-is-an-affordable-hidden-gem-tucked-in-coconut-grove/",
      image: "https://media.timeout.com/images/105991381/750/422/image.jpg",
      publication: "CBS Miami"
    },
    {
      id: 23,
      title: "Hiyakawa - Miami - a MICHELIN Guide Restaurant",
      date: "2022",
      description: "The official Michelin Guide listing for Hiyakawa, awarding it one star for its high-quality cooking and recognizing its elegant, kappo-style dining experience.",
      url: "https://guide.michelin.com/us/en/florida/miami/restaurant/hiyakawa-miami",
      image: "https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/79f60165f93946afba9a1a8330941dd1.jpg?w=500&h=500&org_if_sml=1",
      publication: "Michelin Guide"
    },
    {
      id: 24,
      title: "Hiyakawa, an elegant new Japanese restaurant, opens in Wynwood",
      date: "October 26, 2020",
      description: "Eater Miami reports on the opening of Hiyakawa in Wynwood, detailing its traditional Japanese cuisine, minimalist design, and the experienced team behind the new fine-dining concept.",
      url: "https://miami.eater.com/2020/10/26/21533694/hiyakawa-miami-open-photos-menu",
      image: "https://platform.miami.eater.com/wp-content/uploads/sites/12/chorus/uploads/chorus_asset/file/21988541/Hiyakawa_Interior4.jpg?quality=90&strip=all&crop=0%2C0.013017443374117%2C100%2C99.973965113252&w=750",
      publication: "Eater Miami"
    }
  ];

  const [visibleItems, setVisibleItems] = useState(6); // Show first 6 items initially
  
  const loadMoreItems = () => {
    setVisibleItems(prev => Math.min(prev + 3, allPressItems.length)); // Load 3 more items at a time
  };

  const hasMoreItems = visibleItems < allPressItems.length;

  const PressItem = ({ item }) => (
    <Link 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex flex-col w-full h-auto group cursor-pointer transition-transform hover:scale-[1.02]"
    >
      {/* Article Image */}
      <div className="relative w-full aspect-[555/416] mb-6">
        <Image 
          src={item.image}
          alt={item.title}
          fill
          className="object-cover rounded-2xl group-hover:brightness-110 transition-all duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Publication name */}
      <div className="mb-3">
        <span className="text-black text-[clamp(0.9rem,1.4vw,1.45rem)] font-montserrat font-light uppercase leading-[13px] tracking-wide group-hover:text-[#16469D] transition-colors duration-300">
          {item.publication}
        </span>
      </div>
      
      {/* Title and date */}
      <div className="mb-4 space-y-1">
        <h3 className="text-black text-[clamp(0.9rem,1.4vw,1.45rem)] font-inter font-light leading-[26px] break-words group-hover:text-[#16469D] transition-colors duration-300">
          {item.title}
        </h3>
        {item.date && (
          <h4 className="text-gray-600 text-[clamp(0.9rem,1.4vw,1.45rem)] font-inter font-light leading-[25px] break-words">
            {item.date}
          </h4>
        )}
      </div>
      
      {/* Description */}
      <div className="flex-1">
        <p className="text-black text-[clamp(0.9rem,1.4vw,1.45rem)] font-inter font-light leading-[21px] break-words group-hover:text-gray-700 transition-colors duration-300">
          {item.description.split(' — ').map((part, i) => (
            <span key={i}>
              {i > 0 && ' — '}
              {part}
            </span>
          ))}
        </p>
      </div>
    </Link>
  );

  return (
    <>
      {/* Desktop Navbar Spacer and Navbar */}
      <div className="hidden md:block h-[12rem]"></div>
      <div className="hidden md:block top-0 z-50 w-full">
        <Navbar />
      </div>
      
      {/* Mobile Navbar Spacer and Navbar */}
      <div className="md:hidden h-[5rem]"></div>
      <div className="fixed top-0 z-50 w-full md:hidden">
        <MobileNavbar />
      </div>

      {/* Fixed spacing for all screens - matching about page */}
      <div className="hidden md:block h-6"></div>
   

      <div className="bg-white min-h-screen relative">
      {/* Blue background section */}
      <div className="px-2 sm:px-2 lg:px-2 relative">
        <div className="rounded-2xl h-[150px] sm:h-[170px] md:h-[180px] lg:h-[180px] xl:h-[200px] bg-[#16469D] absolute top-[40px] md:top-[80px] left-2 right-2 w-auto z-10" />
        
        {/* Header section in blue area - centered in blue background */}
        <header className="absolute top-[40px] md:top-[80px] left-2 right-2 z-20 w-auto h-[150px] sm:h-[170px] md:h-[180px] lg:h-[180px] xl:h-[200px] flex items-center justify-center font-montserrat">
          <h1 className="text-[clamp(0.9rem,1.4vw,1.45rem)] font-extralight text-white font-montserrat text-center">
            Press
          </h1>
        </header>
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-2 py-3 max-w-8xl">
        {/* Dynamic press items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 mt-[12rem] sm:mt-[13rem] md:mt-[16rem] lg:mt-[16rem] xl:mt-[18rem]">
          {allPressItems.slice(0, visibleItems).map((item, index) => (
            <div key={item.id} className="relative w-full">
              <PressItem item={item} />
              {/* Show overlay images only for the first 3 items and only on larger screens */}
              {index < 3 && (
                <div className="absolute top-0 left-0 w-full aspect-[555/416] pointer-events-none hidden md:block">
                  <Image
                    src={
                      index === 0 ? "/WABI_SABI_-_Dining_Room_1_g1fg5i 3.webp" :
                      index === 1 ? "/press/infa.webp" :
                      "/press/ogawa.webp"
                    }
                    alt={
                      index === 0 ? "WABI SABI - Dining Room" :
                      index === 1 ? "press image" :
                      "Ogawa Restaurant"
                    }
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More Button - only show if there are more items */}
        {hasMoreItems && (
          <div className="flex justify-center mt-6 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20">
            <button 
              onClick={loadMoreItems}
              className="rounded-2xl w-full max-w-[45%] md:max-w-[15%] lg:max-w-[15%] xl:max-w-[15%] h-[3rem] bg-[#16469D] flex items-center justify-center hover:bg-[#1a5bb8] transition-colors"
            >
              <span className="text-white text-[clamp(0.9rem,1.4vw,1.45rem)] font-montserrat font-light px-4">
                Load More
              </span>
            </button>
          </div>
        )}
        <PressStrip />
      </div>
      </div>
    </>
  );
}