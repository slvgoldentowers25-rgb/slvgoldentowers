import { useMemo, useState } from "react";

/* Smooth scroll with header offset */
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 96; // header ~96px
  window.scrollTo({ top: y, behavior: "smooth" });
};

export default function Header() {
  const nav = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "apartment", label: "Apartment" },
      { id: "gallery", label: "Gallery" },
      { id: "floorplan", label: "Floorplan" },
      { id: "channel-partners", label: "Channel Partners" },
      { id: "agencies", label: "Agencies & Landowners" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center h-24">
          {/* Logo: no left gap (negates container padding) + wider */}
          <button
            onClick={() => scrollToId("home")}
            className="flex items-center -ml-4 md:-ml-6"
            aria-label="Go to Home"
          >
            <img
              src="/images/SLV_GT_Logo.png"
              alt="SLV Golden Towers"
              className="w-64 md:w-72 lg:w-80 h-auto object-contain"
            />
          </button>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center justify-center gap-4 lg:translate-x-16">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  item.id === "channel-partners"
                    ? scrollToId("channelpartners") // fix: target fallback section id without hyphen
                    : scrollToId(item.id)
                }
                className="px-2 md:px-3 text-black text-[16px] lg:text-[17px] font-medium hover:text-gray-800 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center justify-end">
            <button
              className="lg:hidden inline-flex items-center justify-center rounded-md border border-gray-300 p-2 text-gray-800"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-sm">
          <nav className="mx-auto max-w-[1400px] px-4 md:px-6 py-3 grid gap-1">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setOpen(false);
                  item.id === "channel-partners"
                    ? scrollToId("channelpartners") // fix here as well
                    : scrollToId(item.id);
                }}
                className="text-black text-base text-left py-2 px-2 rounded-md hover:bg-black/5"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
