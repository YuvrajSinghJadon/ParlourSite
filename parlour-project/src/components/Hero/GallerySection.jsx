// GallerySection.jsx
import React, { useState, useEffect } from "react";

const GallerySection = () => {
  const initialPhotos = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
  ];

  const [shuffledPhotos, setShuffledPhotos] = useState(initialPhotos);

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      // Shuffle the photos array
      const shuffled = [...initialPhotos].sort(() => Math.random() - 0.5);
      setShuffledPhotos(shuffled);
    }, 2000); // Shuffle every 2000 milliseconds (2 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(shuffleInterval);
  }, [initialPhotos]);

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shuffledPhotos.map((photo, index) => (
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
