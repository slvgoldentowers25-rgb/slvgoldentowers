// components/ContactMap.jsx
import React from "react";

export default function ContactMap() {
  // Center on SLV Golden Towers (uses a query-based embed).
  // If you later copy the official "Embed a map" iframe (Share → Embed),
  // just replace EMBED_SRC with that URL.
  const EMBED_SRC =
    "https://www.google.com/maps?q=SLV+Golden+Towers+-+Luxury+Residential+Apartments+in+Yelahanka&hl=en&z=16&output=embed";

  return (
    <section className="bg-white">
      {/* heading */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block rounded-md bg-gray-100 px-4 py-1.5 text-xs font-semibold tracking-widest text-gray-700">
            CONTACT US
          </span>
          <h2 className="mt-4 sm:mt-6 text-4xl sm:text-5xl font-semibold text-black">
            Get In Touch
          </h2>
        </div>
      </div>

      {/* map with reduced height */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="overflow-hidden rounded-2xl shadow-md">
          <div className="relative w-full h-72 sm:h-96 lg:h-[420px]"> {/* reduced height */}
            <iframe
              title="SLV Golden Towers Location"
              src={EMBED_SRC}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </section>
  );
}
