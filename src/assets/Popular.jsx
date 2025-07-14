import React from "react";

const destinations = [
  {
    name: "Goa",
    properties: 3051,
    image: "/image/goa.png",
  },
  {
    name: "Delhi",
    properties: 2436,
    image: "/image/delhi.png",
  },
  {
    name: "Bangalore",
    properties: 2500,
    image: "/image/bang.png",
  },
  {
    name: "Jaipur",
    properties: 920,
    image: "/image/jaipur.png",
  },
  {
    name: "Pattaya",
    properties: 1850,
    image: "/image/patt.png",
  },
];

export default function Popular() {
  return (
    <div className="w-full px-4 py-6 space-y-10">
      {/* HSBC Holiday Banner */}
      <div
        className="w-full h-64 md:h-80 rounded-2xl overflow-hidden relative flex items-center"
        style={{
          backgroundImage: `url(/image/beach.png)`, // ✅ Use public path here
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start pl-8 pr-4 w-full">
          {/* HSBC Logo & Text */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-white text-2xl md:text-3xl font-bold mb-2 leading-tight">
              15%* off on domestic and <br className="hidden md:block" /> international holidays
            </div>
            <div className="text-white text-base md:text-lg">
              HSBC TravelOne Credit Card
            </div>
          </div>

          {/* Card Image */}
          <img
            src="/image/hsbc-card.png"
            alt="HSBC Card"
            className="h-28 md:h-36 ml-0 md:ml-12 mt-6 md:mt-0"
          />
        </div>
      </div>

      {/* Popular Destinations */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Popular destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-gray-200 relative group shadow w-full h-64"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                <div className="text-white font-semibold text-lg">{dest.name}</div>
                <div className="text-white text-xs">{dest.properties} Properties</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
