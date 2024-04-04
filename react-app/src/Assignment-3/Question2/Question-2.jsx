// Extend the previous application to demonstrate the use of nested contexts.
// Create a new context to manage user preferences (e.g., theme preference).
// Modify the parent component to provide both the authentication and preferences contexts.
// Create a child component that consumes both contexts.
// Allow the user to change their theme preference (light/dark) using a button in the child component.
// Display the theme preference in the UI and adjust the component's styling accordingly.

import React, { createContext, useState, useContext } from "react";
import AuthProvider from "../Question1/Question-1";
const PreferencesContext = createContext();

const PreferencesProvider = () => {
  const [theme, setTheme] = useState("light"); // Initial theme preference

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <PreferencesContext.Provider value={{ theme, toggleTheme }}>
      <ThemeToggler />
    </PreferencesContext.Provider>
  );
};
const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(PreferencesContext);

  document.body.className = theme;
  return (
    <>
      <div>
        <AuthProvider />
      </div>
      <div className="toggle-button">
        <button onClick={toggleTheme}>
          Toggle Theme ({theme === "light" ? "Dark" : "Light"})
        </button>
      </div>
    </>
  );
};
export default PreferencesProvider;
