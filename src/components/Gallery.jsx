import React, { useState } from "react";

const images = Array.from({ length: 12 }, (_, i) => `/images/gallery${i + 1}.png`);

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  return (
    <section id="gallery" className="bg-[#FAF7F2] text-gray-900 py-16 px-4 sm:px-6 md:px-10">
      <div className="mx-auto w-full max-w-[1320px]">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.15em] uppercase bg-gray-200 text-gray-600 px-3 py-1 rounded-md font-medium">
            Discover Gallery
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold">
            Exterior & Interior
          </h2>
        </div>

        {/* Grid of Images — adjusted height & gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative rounded-[14px] overflow-hidden cursor-pointer group"
              onClick={() => setSelectedIndex(idx)}
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-[230px] sm:h-[250px] md:h-[270px] object-cover transform transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Carousel */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-8 text-white text-4xl font-bold hover:text-gray-300"
          >
            ×
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-6 sm:left-10 text-white text-4xl font-bold hover:text-gray-300"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={images[selectedIndex]}
            alt={`Gallery ${selectedIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] rounded-[12px] object-contain shadow-2xl"
          />

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-6 sm:right-10 text-white text-4xl font-bold hover:text-gray-300"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
