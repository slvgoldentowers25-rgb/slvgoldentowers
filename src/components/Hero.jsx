import { useEffect, useMemo, useRef, useState } from "react";

export default function Hero({
  images = [
    "/images/Scene 7.png",
    "/images/Scene 9.png",
    "/images/Scene 10.png",
    "/images/Scene 21.png",
  ],
  intervalMs = 5000,
}) {
  const slides = useMemo(() => images.filter(Boolean).slice(0, 4), [images]);
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (slides.length <= 1 || !intervalMs) return;
    timerRef.current = setInterval(
      () => setIdx((i) => (i + 1) % slides.length),
      intervalMs
    );
    return () => clearInterval(timerRef.current);
  }, [slides.length, intervalMs]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] md:min-h-screen overflow-hidden pt-[96px]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/25" />
      </div>

     {/* Headline (more right & lower placement) */}
     <div className="relative z-10">
  <div className="container mx-auto px-4">
    <div
      className="
        mt-[200px] md:mt-[230px]   /* was 180/200 */
        pl-[60px] md:pl-[80px]
        max-w-[640px]
      "
    >
      <h1
        className="
          text-white font-extrabold drop-shadow tracking-tight
          leading-[1.15]
          text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px]
        "
        style={{ textShadow: '0 2px 8px rgba(0,0,0,.35)' }}
      >
        <span>Golden Towers — Your Exclusive</span>
        <span className="block">Address of Elegance!</span>
      </h1>
    </div>
  </div>
</div>


      {/* Bottom labels (no background) */}
      <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Spacious Rooms", "Private Garden", "Walk-in Closets", "Swimming Pool"].map(
              (t) => (
                <div
                  key={t}
                  className="text-center text-white drop-shadow text-sm md:text-base font-medium"
                >
                  {t}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
