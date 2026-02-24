import React from 'react';

const images = [
  { src: 'https://picsum.photos/seed/picsum/800/600', alt: 'ASSESE Hub - Main Space' },
  { src: 'https://picsum.photos/seed/picsum2/800/600', alt: 'ASSESE Hub - Meeting Area' },
  { src: 'https://picsum.photos/seed/picsum3/800/600', alt: 'ASSESE Hub - Showcase' },
  { src: 'https://picsum.photos/seed/picsum4/800/600', alt: 'ASSESE Hub - Event' },
];

export const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};
