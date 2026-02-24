import React from 'react';

// ==================================================================
// INSTRUCTIONS FOR ADMIN:
// To change the gallery images, replace the files in the 'public/images' folder.
// The required filenames are: gallery-1.jpg, gallery-2.jpg, gallery-3.jpg, gallery-4.jpg
// ==================================================================
const images = [
  { src: `${import.meta.env.BASE_URL}images/gallery-1.jpg`, alt: 'ASSESE Hub - Main Space' },
  { src: `${import.meta.env.BASE_URL}images/gallery-2.jpg`, alt: 'ASSESE Hub - Meeting Area' },
  { src: `${import.meta.env.BASE_URL}images/gallery-3.jpg`, alt: 'ASSESE Hub - Showcase' },
  { src: `${import.meta.env.BASE_URL}images/gallery-4.jpg`, alt: 'ASSESE Hub - Event' },
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
