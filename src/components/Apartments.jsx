import React, { useEffect, useMemo, useRef, useState } from "react";

const TABS = [
  { "class": "play",   title: "Childrens Play Area", img: "/images/childrens_play_area.png", heading: "Childrens Play Area",
    desc: "A safe and vibrant space designed for endless fun, where kids can play, explore and create joyful memories in a secure environment." },
  { "class": "pool",   title: "Swimming Pool", img: "/images/swimming_pool.png", heading: "Swimming Pool",
    desc: "Enjoy a luxurious main pool for relaxation and fitness, while the kids pool offers a safe and fun space for little swimmers to splash and play." },
  { "class": "entry",  title: "Entry and Exit", img: "/images/entry.png", heading: "Entry and Exit",
    desc: "Gated Entry with 24/7 Security. Separate Entry & Exit Points for Efficient Traffic Flow. Boom Barriers & RFID Access for Residents. Visitor Management System for Added Security. Well-Lit Driveways & Pedestrian-Friendly Access." },
  { "class": "lawn",   title: "Multipurpose Lawn", img: "/images/lawn.png", heading: "Multipurpose Lawn",
    desc: "Relax & Rejuvenate – perfect for yoga, picnics and gatherings. Play & Sports – ideal for football, badminton, and outdoor games. Events & Functions – Host celebrations and social gatherings. Green & Serene – enhances community living with natural beauty." },
  { "class": "parking",title: "Visitors Parking Area", img: "/images/parking_area.png", heading: "Visitors Parking Area",
    desc: "A well-sheltered bus waiting area ensures comfort and convenience, while a spacious visitors parking provides hassle-free and secure access for your guests." },
];

// LEFT panel colors
const LEFT_BG = "#B57E55";
const LEFT_TEXT = "#EEF2FF";

export default function ApartmentsSection() {
  const [active, setActive] = useState("play");
  const current = TABS.find((t) => t["class"] === active) || TABS[0];

  // Read hash on first load (optional deep-linking)
  useEffect(() => {
    const hashVal = window.location.hash?.slice(1);
    if (hashVal && TABS.some((t) => t["class"] === hashVal)) setActive(hashVal);
  }, []);

  const listRef = useRef(null);
  const idx = useMemo(
    () => Math.max(0, TABS.findIndex((t) => t["class"] === active)),
    [active]
  );

  const onKeyDown = (e) => {
    if (["ArrowRight", "ArrowDown"].includes(e.key)) {
      e.preventDefault(); setActive(TABS[(idx + 1) % TABS.length]["class"]);
    } else if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
      e.preventDefault(); setActive(TABS[(idx - 1 + TABS.length) % TABS.length]["class"]);
    } else if (e.key === "Home") { e.preventDefault(); setActive(TABS[0]["class"]); }
    else if (e.key === "End") { e.preventDefault(); setActive(TABS[TABS.length - 1]["class"]); }
  };

  return (
    <section className="apartments py-12 px-4 sm:px-6 md:px-10">
      <div className="mx-auto w-full max-w-[1320px]">
        {/* Top tag + main heading */}
        <div className="text-center">
          <span
            className="text-xs tracking-[0.15em] uppercase px-3 py-1 rounded-md font-medium inline-block"
            style={{ backgroundColor: "rgba(0,0,0,0.06)" }}
          >
            Apartments Details
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold">
            Discover Apartments
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-6 overflow-x-auto">
          <div
            ref={listRef}
            role="tablist"
            aria-label="Apartment features"
            onKeyDown={onKeyDown}
            className="flex flex-nowrap justify-center gap-4 min-w-max"
          >
            {TABS.map((tab) => {
              const isActive = active === tab["class"];
              return (
                <button
                  key={tab["class"]}
                  data-class={tab["class"]}
                  onClick={() => setActive(tab["class"])}
                  role="tab"
                  aria-selected={isActive}
                  className={
                    "px-6 py-3 text-sm sm:text-base font-medium border-b-2 transition-colors " +
                    (isActive
                      ? "border-black text-black"
                      : "border-transparent text-gray-700 hover:text-black hover:border-gray-300")
                  }
                  style={{ background: "transparent" }}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* LEFT */}
          <aside className="lg:col-span-4">
            <div
              className="h-[360px] sm:h-[420px] lg:h-[520px] xl:h-[560px] px-6 sm:px-8 lg:px-9 py-7 sm:py-8 flex flex-col"
              style={{
                background: LEFT_BG,
                color: LEFT_TEXT,
                borderRadius: 20,
                border: "1px solid rgba(0,0,0,0.10)",
              }}
            >
              <h3 className="text-2xl sm:text-[28px] font-medium pb-4" style={{ color: LEFT_TEXT }}>
                {current.heading}
              </h3>
              <div className="flex-1" aria-hidden />
              <p className="leading-relaxed text-[15px] sm:text-[16px]" style={{ color: "rgba(255,255,255,0.85)" }}>
                {current.desc}
              </p>
            </div>
          </aside>

          {/* RIGHT */}
          <figure className="lg:col-span-8">
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[520px] xl:h-[560px] rounded-[24px] overflow-hidden ring-1 ring-black/5 shadow-[0_10px_28px_rgba(0,0,0,.18)]">
              <img
                src={current.img}
                alt={current.heading}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>
        </div>

        {/* a11y live region (kept simple; no id/labelledby ties) */}
        <div role="tabpanel" className="sr-only">
          <h3>{current.heading}</h3>
          <p>{current.desc}</p>
        </div>
      </div>
    </section>
  );
}
