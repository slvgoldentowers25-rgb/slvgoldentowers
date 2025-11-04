// src/components/AboutSection.jsx
export default function AboutSection() {
  // Force the exact two-line wording you want for every item
  const items = [
    { img: "/images/about1.png", l1: "3+ ACRES OF",        l2: "GREENERY" },
    { img: "/images/about2.png", l1: "242 RESIDENCES, 2",  l2: "TOWERS" },
    { img: "/images/about3.png", l1: "2, 3, 4 BHK",        l2: "LAYOUTS" },
    { img: "/images/about4.png", l1: "70% OPEN GREEN",     l2: "SPACE" },
    { img: "/images/about5.png", l1: "100% VASTU",         l2: "COMPLIANT" },
    { img: "/images/about6.png", l1: "INFINITY",           l2: "POOL" },
  ];

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT */}
          <div className="lg:col-span-6">
            <span className="inline-block text-[13px] leading-none tracking-wide font-semibold uppercase text-gray-700 bg-gray-100 rounded px-3 py-2">
              About
            </span>

            {/* Title less bold */}
            <h2 className="mt-6 text-black font-normal tracking-tight leading-[1.05] text-[40px] sm:text-[48px] lg:text-[56px]">
              SLV GOLDEN TOWERS
            </h2>

            {/* Paragraph in grey with manual line placement */}
            <p className="mt-6 text-[18px] leading-8 text-gray-500">
              Golden Towers offers a serene retreat spread over 3 ACRES, with 2
              <br className="hidden sm:block" />
              TOWERS and 242 REFINED RESIDENCES. Experience elegance with
              <br className="hidden sm:block" />
              lush greenery and thoughtfully crafted homes that invite comfort,
              <br className="hidden sm:block" />
              convenience, and natural beauty.
            </p>

            <button
              type="button"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-[#B57E55] text-white px-6 py-3 text-[13px] font-semibold tracking-[0.14em] uppercase shadow-sm hover:opacity-95 transition"
            >
              Schedule a Visit
            </button>
          </div>

          {/* RIGHT: 3×2 grid, two fixed lines per caption */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-14">
              {items.map(({ img, l1, l2 }, i) => (
                <div key={i} className="flex flex-col">
                  <img
                    src={img}
                    alt={`${l1} ${l2}`}
                    className="h-[72px] w-[72px] object-contain"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Caption: EXACTLY two lines, never rewrap */}
                  <div className="mt-4 text-black uppercase">
                    <span className="block text-[20px] font-medium leading-snug whitespace-nowrap">
                      {l1}
                    </span>
                    <span className="block text-[20px] font-medium leading-snug whitespace-nowrap">
                      {l2}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
}
