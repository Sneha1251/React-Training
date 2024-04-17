// Create a reusable Button component in React that accepts props for different styles (e.g., primary, secondary, danger) and click handlers. Demonstrate how to use this component in a sample application.

import React from "react";
import ReuseButton from "./reuseButton";

const ReusableButton = () => {
  
  return (
    <>
      <h2>Resuable Button Component</h2>
      <div className="reuseButton">
        <ReuseButton
          label="Primary Button"
          style={{ background: "green", color: "white" }}
          onClick={() => alert("Primary button clicked")}
        ></ReuseButton>

        <ReuseButton
          label="Secondary Button"
          style={{ background: "yellow", color: "black" }}
          onClick={() => alert("Secondary button clicked")}
        ></ReuseButton>

        <ReuseButton
          label="Danger Button"
          style={{ background: "red", color: "white" }}
          onClick={() => alert("Danger button clicked")}
        ></ReuseButton>
      </div>
    </>
  );
};

export default ReusableButton;
