import React from "react";

// Poster Data with images in public folder
const posters = [
  {
    bg: "/image/first.png",
    label: "New Arrival",
    badge: "Hot Deal",
    badgeSub: "Limited Time",
    title: "Summer Beach Escape",
    desc: "Enjoy the sun and sea at the best beaches.",
    cta: "Book Now",
    logo: "/image/logo1.png",
    logoAlt: "Beach Logo",
  },
  {
    bg: "/image/second.png",
    title: "Explore Goa",
    desc: "Discover the best resorts and beaches.",
    cta: "Explore More",
  },
  {
    bg: "/image/third.png",
    title: "Bangkok Adventures",
    desc: "Explore the city of temples and markets.",
    cta: "Book Now",
  },
  {
    bg: "/image/fourth.png",
    label: "Exclusive Offer",
    badge: "Special Discount",
    badgeSub: "Book early and save",
    title: "Jaipur Getaway",
    desc: "Explore the beautiful palaces and forts.",
    cta: "Learn More",
  },
];

export default function Poster() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-2 py-6 mx-[10px]">
      {posters.map((poster, idx) => (
        <div
          key={idx}
          className="relative rounded-xl overflow-hidden w-full h-56"
          style={{
            backgroundImage: `url(${poster.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay with less opacity */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-4">
            {/* Top Row */}
            <div className="flex items-start justify-between">
              {poster.label && (
                <span className="bg-white/80 text-xs font-semibold rounded px-2 py-1">
                  {poster.label}
                </span>
              )}
              {poster.badge && (
                <div className="flex flex-col items-end">
                  <span className="bg-yellow-400 text-xs font-bold rounded-full px-2 py-1">
                    {poster.badge}
                  </span>
                  <span className="text-xs text-white mt-0.5">
                    {poster.badgeSub}
                  </span>
                </div>
              )}
            </div>

            {/* Main Text */}
            <div>
              {poster.title && (
                <h3 className="text-white text-lg font-bold leading-tight">
                  {poster.title}
                </h3>
              )}
              {poster.desc && (
                <p className="text-white text-xs mt-1">{poster.desc}</p>
              )}
              {poster.cta && (
                <p className="text-white text-sm font-semibold mt-2 cursor-pointer hover:underline">
                  {poster.cta}
                </p>
              )}
              {poster.logo && (
                <img
                  src={poster.logo}
                  alt={poster.logoAlt || "logo"}
                  className="mt-3 h-8 object-contain"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
