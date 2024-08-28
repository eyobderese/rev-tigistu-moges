"use client";

import { createContext, useContext, useState } from "react";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [selectedNavItem, setSelectedNavItem] = useState("home");

  return (
    <NavigationContext.Provider value={{ selectedNavItem, setSelectedNavItem }}>
      {children}
    </NavigationContext.Provider>
  );
};
