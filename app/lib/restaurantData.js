// lib/restaurantData.js

export const restaurants = {
    'kuri-kuri': {
      name: 'Kuri Kuri',
      logoUrl: 'https://placehold.co/347x74/ffffff/000000?text=Kuri+Kuri', // Placeholder logo
      heroImageUrl: 'https://placehold.co/1920x1080/FF0000/white?text=Kuri+Kuri+Hero', // Placeholder hero bg
      galleryImages: [
        { id: 1, src: 'https://placehold.co/505x826/FF00AE/white', alt: 'Kuri Kuri dish 1', type: 'left' },
        { id: 2, src: 'https://placehold.co/949x825/11FF00/white', alt: 'Kuri Kuri interior', type: 'center' },
        { id: 3, src: 'https://placehold.co/466x826/1100FF/white', alt: 'Kuri Kuri cocktail', type: 'right' },
      ],
    },
    'masayuki': {
      name: 'Masayuki',
      logoUrl: 'https://placehold.co/347x74/ffffff/000000?text=Masayuki', // Placeholder logo
      heroImageUrl: 'https://placehold.co/1920x1080/003366/white?text=Masayuki+Hero', // Placeholder hero bg
      galleryImages: [
        { id: 1, src: 'https://placehold.co/505x826/33C4FF/white', alt: 'Masayuki omakase plate', type: 'left' },
        { id: 2, src: 'https://placehold.co/949x825/E4D00A/white', alt: 'Masayuki chef', type: 'center' },
        { id: 3, src: 'https://placehold.co/466x826/9D33FF/white', alt: 'Masayuki dessert', type: 'right' },
      ],
    },
    // You can add more restaurants here in the future
  };