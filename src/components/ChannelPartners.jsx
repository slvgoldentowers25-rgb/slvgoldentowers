
import React from "react";

const items = [
  { title: "Airport",       distance: "18 miles",    img: "/images/highlights1.png", alt: "Airport exterior at night" },
  { title: "Metro",         distance: "200 meters",  img: "/images/highlights2.png", alt: "Metro train on elevated track" },
  { title: "Shopping Mall", distance: "500 meters",  img: "/images/highlights3.png", alt: "Modern shopping mall exterior" },
];

export default function ChannelPartners() {
  return (
    <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-20 py-10 sm:py-14">
      <div className="flex justify-center">
        <span className="inline-block rounded-full border border-gray-300/70 bg-gray-300 backdrop-blur px-4 py-1 text-[13px] tracking-wide text-black-600">
          NEAR BY PLACES
        </span>
      </div>

      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-medium mt-4 text-gray-900">
        Highlights Nearby
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {items.map((x) => (
          <article key={x.title} className="relative overflow-hidden rounded-2xl shadow-sm group w-full">
            {/* slightly shorter than before */}
            <div className="aspect-[4/3] w-full">
              <img
                src={x.img}
                alt={x.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            {/* reduced overlay height to match new aspect */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between">
              <h3 className="text-white text-2xl sm:text-[26px] font-semibold drop-shadow">
                {x.title}
              </h3>
              <div className="text-white/90 text-base sm:text-lg font-medium">
                {x.distance}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
