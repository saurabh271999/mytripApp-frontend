import { createContext, useState } from 'react';

export const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [flightData, setFlightData] = useState({});

  return (
    <FlightContext.Provider value={{ flightData, setFlightData }}>
      {children}
    </FlightContext.Provider>
  );
};
