import { createContext, useState } from "react";
export const ThemeModeContext = createContext();
export default function ThemeModeContextProvider(props) {
  const [isDarkModeActive, setIsDarkModeActive] = useState(true);

  const switchToLightMode = () => {
    setIsDarkModeActive(false);
  };

  const switchToDarkMode = () => {
    setIsDarkModeActive(true);
  };

  return (
    <ThemeModeContext.Provider
      value={{ isDarkModeActive, switchToLightMode, switchToDarkMode }}
    >
      {props.children}
    </ThemeModeContext.Provider>
  );
}
