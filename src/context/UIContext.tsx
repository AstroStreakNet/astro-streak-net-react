// src/context/UIContext.tsx
import React, { createContext, useContext, useState } from "react";

interface UIContextType {
  isNavbarOpen: boolean;
  toggleNavbar: () => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleNavbar = () => setIsNavbarOpen((prev) => !prev);
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const value = {
    isNavbarOpen,
    toggleNavbar,
    theme,
    toggleTheme,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};
