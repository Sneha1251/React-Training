import { useState } from "react";

const useClipboard = (text) => {
  const [input, setInput] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(input);
    setIsSuccess(true);
  };

  return { input, setInput, copyToClipboard, isSuccess, setIsSuccess };
};

export default useClipboard;
