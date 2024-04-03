// Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.

import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  
  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App ${theme}`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Content />
      </div>
    </ThemeContext.Provider>
  );
};
const Content = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`content ${theme}`}>
      Content Area
      <Button />
    </div>
  );
};
const Button = () => {
  const theme = useContext(ThemeContext);
  return <button className={`button ${theme}`}>Click Me</button>;
};
export default ThemeSwitcher;
