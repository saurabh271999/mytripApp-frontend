import React, { createContext, useState } from "react";
import { ArrowRight } from "lucide-react"; // Adjust import based on your icon library

export const ContextProvider = createContext();

const services = [
  {
    title: "AgentBox",
    for: "For travel agents",
    desc: "One-stop travel solution offering the best deals to our travel agency partners",
  },
  {
    title: "OutOfOffice",
    for: "For startups, corporates and SMEs",
    desc: "Manage corporate business travel, smartly",
  },
  {
    title: "MICE",
    for: "For corporate events",
    desc: "An end-to-end management solution for all your corporate events",
  },
  {
    title: "API",
    for: "For developers",
    desc: "Unlock seamless integration and scale with our powerful, reliable APIs",
  },
];

const Dataprovider = ({ children }) => {
  const [serviceData, setServiceData] = useState(services);

  return (
    <ContextProvider.Provider value={{ serviceData, setServiceData }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default Dataprovider;
