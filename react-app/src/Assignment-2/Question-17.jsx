// Build a custom hook named useClipboard for copying text to the clipboard.
// Implement a useClipboard hook that takes a text value as a parameter.
// Use the document.execCommand API to copy the provided text to the clipboard.
// Return a success status and methods to trigger the copying action.
// Develop a component that uses the useClipboard hook to provide a copy button for text.

import React from "react";
import useClipboard from "./useClipboard";

const CopyTextButton = ({ text }) => {
  const { input, setInput, copyToClipboard, isSuccess, setIsSuccess } =
    useClipboard("");

  return (
    <div>
      <h2>Copy Text Button</h2>
      <textarea
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setIsSuccess(false);
        }}
      />
      <button onClick={copyToClipboard}>
        {isSuccess ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default CopyTextButton;
