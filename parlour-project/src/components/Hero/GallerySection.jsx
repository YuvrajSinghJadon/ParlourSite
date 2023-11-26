// GallerySection.jsx
import React from "react";

const GallerySection = () => {
  const photos = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
  ];

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <img
              className="object-cover w-full h-48 md:h-64 lg:h-72"
              src={`/Gallery/${photo}`}
              alt={`Photo ${index + 1}`}
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300">
              <p className="text-white text-center absolute inset-0 flex items-center justify-center">
                Photo {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
