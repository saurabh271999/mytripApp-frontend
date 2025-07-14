import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { createContext } from "react";

const services = [
  {
    title: "AgentBox",
    subtitle: "For travel agents",
    desc: "One-stop travel solution offering the best deals to our travel agency partners",
  },
  {
    title: "OutOfOffice",
    subtitle: "For startups, corporates and SMEs",
    desc: "Manage corporate business travel, smartly",
  },
  {
    title: "MICE",
    subtitle: "For corporate events",
    desc: "An end-to-end management solution for all your corporate events",
  },
  {
    title: "API",
    subtitle: "For developers",
    desc: "Unlock seamless integration and scale with our powerful, reliable APIs",
  },
];

export default function BusinessServices() {
  const contextprovider = createContext()
  const dataprovider = () => {
    const[popup, setpopup] = useState('none')
  }
  return (
    <section className="bg-[#fef4f2] py-10 px-5 rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-6">Other business services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 rounded-2xl shadow">
          {services.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 font-semibold text-lg">
                {item.title} <FaArrowRight className="text-black text-sm" />
              </div>
              <p className="text-sm text-gray-600 font-medium">{item.subtitle}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
