import React, { createContext, useState } from 'react';

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: ''
  });

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};
