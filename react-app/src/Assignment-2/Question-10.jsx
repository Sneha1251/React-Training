// .Develop a language switcher application using the useContext hook.
// Create a context to manage the current language (e.g., English or Spanish).
// Provide buttons to switch between languages.
// Use the useContext hook to access the current language value.
// Display different language versions of the application's content.

import React, { createContext, useContext, useState } from "react";

const languageContext = createContext();

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("en");

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <div className="language">
        <Content />
      </div>
      <div className="langButton">
        <ButtonGroup />
      </div>
    </languageContext.Provider>
  );
};
const Content = () => {
  const { language } = useContext(languageContext);

  return (
    <div className="lang-content">
      {language === "en" ? (
        <p>
          <strong> This is the English version of the content.</strong>
        </p>
      ) : (
        <p><strong>Esta es la versión en español del contenido.</strong></p>
      )}
    </div>
  );
};
const ButtonGroup = () => {
  const { setLanguage } = useContext(languageContext);

  return (
    <div className="button-group">
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("es")}>Spanish</button>
    </div>
  );
};
export default LanguageSwitcher;
