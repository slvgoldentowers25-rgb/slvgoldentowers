import React, { useState, useEffect } from "react";
import { FiMaximize2 } from "react-icons/fi";
import { LuBath, LuCar, LuBedDouble } from "react-icons/lu";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  "/images/discover1.png",
  "/images/discover2.png",
  "/images/discover3.png",
  "/images/discover4.png",
];

export default function FloorPlansSection() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Manual navigation
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <section id="floorplans" className="bg-[#0C3C38] text-white py-14 px-4 sm:px-8 md:px-12">
      <div className="mx-auto w-full max-w-[1320px] grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 items-start">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <div>
            <span className="text-xs tracking-[0.15em] uppercase bg-[#144A47] text-gray-100 px-3 py-1 rounded-md font-medium">
              Discover
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Home Floor Plans
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px]">
            Golden Towers is more than a home—it's a forward-thinking address in
            Yelahanka, a location poised for growth. With the upcoming metro
            station, proximity to the airport, top schools, and emerging business
            hubs, it’s a community designed to keep up with your ambitions.
          </p>

          {/* Property Info Blocks */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#144A47]/60 rounded-md px-4 py-3">
                <p className="text-gray-300 text-sm">PROPERTY ID</p>
                <p className="text-lg font-semibold text-white">SLV 9</p>
              </div>
              <div className="bg-[#144A47]/60 rounded-md px-4 py-3">
                <p className="text-gray-300 text-sm">OPEN SPACE</p>
                <p className="text-lg font-semibold text-white">
                  70% OPEN GREEN SPACE
                </p>
              </div>
            </div>

            <div className="bg-[#144A47]/60 rounded-md px-4 py-4">
              <p className="text-gray-300 text-sm mb-2">LAYOUTS</p>
              <p className="text-sm leading-relaxed text-gray-100">
                2 BHK LAYOUTS : 55 UNITS (1040 TO 1170 HIGHEST SQFT), <br />
                3 BHK LAYOUTS : 165 UNITS (1350 TO 1600 HIGHEST SQFT), <br />
                4 BHK LAYOUTS : 22 UNITS (MAX 2000 SQFT)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#144A47]/60 rounded-md px-4 py-3">
                <p className="text-gray-300 text-sm">Property Type</p>
                <p className="text-lg font-semibold text-white">
                  Full Family Home
                </p>
              </div>
              <div className="bg-[#144A47]/60 rounded-md px-4 py-3">
                <p className="text-gray-300 text-sm">Property Status</p>
                <p className="text-lg font-semibold text-white">For Sale</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#144A47]/60 rounded-md px-4 py-3">
                <p className="text-gray-300 text-sm">YEAR BUILT</p>
                <p className="text-lg font-semibold text-white">NOV 2024</p>
              </div>
              <div className="bg-[#144A47]/60 rounded-md px-4 py-3">
                <p className="text-gray-300 text-sm">PRICE</p>
                <p className="text-lg font-semibold text-white">ON REQUEST</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CAROUSEL */}
        <div className="relative w-full h-[520px] rounded-2xl overflow-hidden">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Floor Plan ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-[#B57E55]" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FOUR BOTTOM BOXES */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[1320px] mx-auto">
        <div className="bg-[#144A47]/60 rounded-xl p-5 flex flex-col items-center text-center">
          <FiMaximize2 className="text-[#B57E55] text-2xl mb-2" />
          <p className="font-medium text-white">Size</p>
          <p className="text-sm text-gray-300">Starts from 1040 sqft</p>
        </div>
        <div className="bg-[#144A47]/60 rounded-xl p-5 flex flex-col items-center text-center">
          <LuBedDouble className="text-[#B57E55] text-2xl mb-2" />
          <p className="font-medium text-white">Bedrooms</p>
          <p className="text-sm text-gray-300">2</p>
        </div>
        <div className="bg-[#144A47]/60 rounded-xl p-5 flex flex-col items-center text-center">
          <LuBath className="text-[#B57E55] text-2xl mb-2" />
          <p className="font-medium text-white">Bathrooms</p>
          <p className="text-sm text-gray-300">2</p>
        </div>
        <div className="bg-[#144A47]/60 rounded-xl p-5 flex flex-col items-center text-center">
          <LuCar className="text-[#B57E55] text-2xl mb-2" />
          <p className="font-medium text-white">Parking Slots</p>
          <p className="text-sm text-gray-300">5</p>
        </div>
      </div>
    </section>
  );
}
