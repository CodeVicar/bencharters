// Components/Gallery.js
"use client";
import React, { useState } from "react";
import Image from 'next/image'


function Gallery() {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [timeoutId, setTimeoutId] = useState(null);

  const advanceSlide = () => {
      setCurrentIndex((currentIndex + 1) % galleryTab.length);
  }; 
  

  const galleryTab = [
    // you can add more image if you want
    {
      imageUrl: "/images/gallery/homenew.jpeg",
      type: "New Builds",
      // title: "Beautiful Work",
    },
    {
      imageUrl: "/images/gallery/extention2.webp",
      type: "Extention",
      // title: "Beautiful Work",
    },
    {
      imageUrl: "/images/gallery/gardenwall1.webp",
      type: "Garden Wall",
      // title: "Beautiful Work",
    },
    {
      imageUrl: "/images/gallery/repoint.webp",
      type: "Repointing",
      // title: "Beautiful Work",
    },

    {
      imageUrl: "/images/gallery/driveway.webp",
      type: "Driveway",
      // title: "Beautiful Work",
    },

    {
      imageUrl: "/images/gallery/loft.webp",
      type: "Loft Conversions ",
      // title: "Beautiful Work",
    },
    {
      imageUrl: "/images/gallery/renovation.webp",
      type: "House Renovations ",
      // title: "Beautiful Work",
    },
    {
      imageUrl: "/images/gallery/brickclean.webp",
      type: "Brick and Stone Cleaning",
      // title: "Beautiful Work",
    },
    {
      imageUrl: "/images/gallery/tiles.webp",
      type: "Tiles",
      // title: "Beautiful Work",
    },
  ];
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const gotoPrevious = () => {
    setCurrentIndex((currentIndex - 1 + galleryTab.length) % galleryTab.length);
  };

  const gotoNext = () => {
    setCurrentIndex((currentIndex + 1) % galleryTab.length);
  };

  return (
    <div className="w-full">
    <div className="flex flex-col md:grid md:grid-cols-3 h-full gap-0 flex-wrap  md:mx-0">
        {galleryTab.map((x, index) => (
            <div
                key={index}
                className="relative bg-red-600 group  cursor-pointer"
                onClick={() => openLightbox(index)}
            >
                <Image 
                    src={x.imageUrl} 
                    alt={x.type}
                    className="w-full md:h-[50vw] object-cover"
                    height={500}
                    width={500}
                />
                <p className="absolute bottom-0.5 w-full text-center text-white bg-black bg-opacity-80 px-3 py-3 rounded truncate text-sm md:text-base">
                    {x.type}
                </p>
            </div>
        ))}
    </div>


      {lightboxIsOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative inline-block mx-3 my-4">
            <img
              src={galleryTab[currentIndex].imageUrl}
              alt={galleryTab[currentIndex].type}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
          <button
            className="absolute top-1/2 left-8 py-3 px-7 text-white bg-red-500 transform -translate-y-50%"
            onClick={gotoPrevious}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2  right-8 rounded-lg py-3 px-7 text-white bg-red-500 transform -translate-y-50%"
            onClick={gotoNext}
          >
            &gt;
          </button>
          <button
            className="absolute top-4 right-4 py-3 px-4 text-white bg-red-500 rounded"
            onClick={closeLightbox}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
