import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { createContext } from "react";
const popularSearches = [
  { icon: "🏨", label: "Hotels in Goa", detail: "7 - 8 May · 2 guests" },
  { icon: "✈️", label: "New Delhi → Mumbai", detail: "Next week · 1 traveller" },
  { icon: "🚌", label: "Bangalore → Goa", detail: "Next week · 1 traveller" },
  { icon: "🚆", label: "New Delhi → Bangkok", detail: "Next week · 1 traveller" },
];
export const contextprovider = createContext();

export default function Banner() {
  return (
    <section className="w-full px-4 py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-1">
          {/* Header Row */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">So, where to?</h2>
              <p className="text-gray-500 mt-1">Plan your trip with us</p>
            </div>
            <div className="text-right bg-blue-100 rounded-2xl p-5 mb-5">
              <h2 className="text-3xl font-bold">Cleartrip for work</h2>
              <p className="text-gray-500 mt-1">
                20% extra off for flight bookings <FaCircleArrowRight />
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-8">
            <NavLink to="/payment/searchflight">
              <Card
                title="Flights"
                text="Get up to 25% off on domestic and international flights"
                img="/image/flight.png"
              />
            </NavLink>
            <NavLink to='/booking/hotel/paymenthotel/searchflight/hotel'>
              <Card
                title="Hotels"
                text="Up to 30% on 10L+ stays"
                img="/image/hotel.png"
              />
            </NavLink>
            <NavLink to="/booking/searchbus/paymentbus">
              <Card
                title="Buses"
                text="Flat 12% off on first booking"
                img="/image/bus.webp"
                imgHeight="h-24"
              />
            </NavLink>
            <Card
              title="Trains"
              text="New on Cleartrip"
              img="/image/train.png"
            />
            <Card
              title="Packages"
              text="Thailand, Dubai, Kashmir and more starting 13999"
              img="/image/rest.png"
            />
          </div>

          {/* Popular Searches */}
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase">Popular Searches</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {popularSearches.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-gray-100 rounded-lg px-3 py-2 text-sm cursor-pointer hover:bg-gray-200 transition"
                >
                  <span className="mr-2">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-gray-500">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-80 flex-shrink-0">
          <div className="bg-blue-50 rounded-2xl p-5 flex flex-col gap-4 shadow-md hover:shadow-lg transition-all">
            <span className="font-semibold text-xl mb-2">Never miss a saving</span>
            <div className="flex flex-col gap-3 text-sm">
              <Offer icon="💰" text="Discounts up to ₹1000 with SuperCoins" color="yellow" />
              <Offer icon="🏷️" text="Up to 10% extra discount for Flipkart & Myntra shoppers" color="green" />
              <Offer icon="⭐" text="Up to 10% extra discount as Cleartrip loyalty benefit" color="yellow" />
              <Offer icon="🔒" text="Exclusive sign-in coupons" color="green" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, text, img, imgHeight = "h-16" }) {
  return (
    <div className="bg-blue-50 rounded-xl p-5 flex flex-col items-start shadow hover:shadow-md transition-all">
      <span className="text-lg font-semibold mb-2">{title}</span>
      <span className="text-xs text-gray-500 mb-4">{text}</span>
      <div className="mt-auto w-full flex justify-end">
        <img src={img} alt={title} className={`w-24 ${imgHeight} object-contain`} />
      </div>
    </div>
  );
}

function Offer({ icon, text, color }) {
  const bgColor = color === "yellow" ? "bg-yellow-100" : "bg-green-100";
  return (
    <div className="flex items-center gap-3">
      <span className={`${bgColor} rounded-full p-2 text-lg`}>{icon}</span>
      <span>{text}</span>
    </div>
  );
}
