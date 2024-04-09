import { useState } from "react";

const useClipboard = (text) => {
  const [input, setInput] = useState("");

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(input);
  };

  return { input, setInput, copyToClipboard };
};

export default useClipboard;
