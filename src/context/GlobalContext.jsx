import React, { createContext } from "react";

export const GlobalContext = createContext();

const RadioGroup = ({ value, onChange, children }) => {
  return (
    <GlobalContext.Provider
      value={{
        value,
        onChange,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default RadioGroup;
