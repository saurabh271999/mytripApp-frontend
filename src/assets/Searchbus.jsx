import React from "react";
import { NavLink } from "react-router-dom";

const navOptions = [
 { icon: "🏨", label:'Hotels' },
  { icon: "✈️" , label:'Flight' },
  { icon: "🚗" , label:'buses'},
  { icon: "🚋" , label:'train'}
];

const offers = [
  {
    title: "Flat 10% off on SBI Cards",
    subtitle: "Applicable on Credit Cards",
    code: "SBICC",
    image: "https://s1.rdbuz.com/bo-images/IND/WM/20437/26/FR/DS/webp/zE5KzH.webp",
    logo: "https://i.pinimg.com/736x/2a/2c/1d/2a2c1d90075390b22e7e6060254dab0d.jpg",
  },
  {
    title: "upto Rs.200 off",
    subtitle: "on all bus bookings with Mobikwik wallet",
    code: "CTMBK24",
    image: "https://etimg.etb2bimg.com/photo/102775032.cms",
    logo: "https://download.logo.wine/logo/MobiKwik/MobiKwik-Logo.wine.png",
  },
  {
    title: "Flat 10% instant discount",
    subtitle: "on bus bookings with federal bank credit and debit card",
    code: "FEDCC / FEDDC",
    image: "https://www.shutterstock.com/image-photo/trip-norway-blue-ice-tongue-600nw-1750963103.jpg",
    logo: "https://www.federalbank.co.in/documents/10180/19811456/Federal+Bank+Logo.png/04e02062-995e-1a35-c09c-ca3d2153f7c2?t=1730984116284",
  },
  {
    title: "Flat 10% instant discount",
    subtitle: "on all bus bookings with AU bank",
    code: "HDFC",
    image: "https://www.sustainable-bus.com/wp-content/uploads/2024/07/Screenshot-2024-07-04-alle-10.41.38.png",
    logo: "https://brandlogos.net/wp-content/uploads/2022/02/hdfc_bank-logo-brandlogos.net_.png",
  },
];

function BusOffers() {
  return (
  
    <div className="bg-white">
      <NavLink to="/booking/searchbus/paymentbus">
      {/* Top Icons Bar */}
      <div className="w-full bg-[#F3F5FA] flex justify-center items-center gap-8 py-4">
        {navOptions.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-xl font-bold text-black">
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-40 object-cover"
            />
            <div className="absolute top-3 left-3">
              <img src={offer.logo} alt="Logo" className="h-10 w-10 object-contain" />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white">
              <h3 className="text-lg font-semibold">{offer.title}</h3>
              <p className="text-sm mb-3">{offer.subtitle}</p>
              <div className="flex items-center justify-between">
                <div className="bg-white text-black px-2 py-1 rounded text-xs font-semibold">
                  {offer.code}
                </div>
                <button className="text-sm font-semibold underline hover:text-orange-400">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
          
        ))}
      </div>
      </NavLink>
    </div>
  );
}

export default BusOffers;
