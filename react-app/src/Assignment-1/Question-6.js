// Create a functional component named Button that accepts props for text and color.
// Style the button using inline styles or CSS classes based on the color prop.
// Import and render the Button component in the App component with different text and color props.

import React from "react";

const Button = ({ text, color }) => {
  const buttonStyle = {
    padding: "0.5rem",
    backgroundColor: color,
    color: "white",
    border: "none",
    borderRadius: "0.3rem",
    cursor: "pointer",
  };
  return (
    <div className="button">
      <button className="color-button" style={buttonStyle }>{text}</button>
    </div>
  );
};
export default Button;
