import { useState } from "react";

const useLocalStorage = () => {
  const [state, setState] = useState("");

  const setting = (value) => {
    localStorage.setItem("key", value);
    setState(value);
  };

  const getting = () => {
    localStorage.getItem("key");
  };
  
  const removing = () => {
    localStorage.removeItem("key");
  };

  return { state, setting, removing, getting };
};

export default useLocalStorage;
