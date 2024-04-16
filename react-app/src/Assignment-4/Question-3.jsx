// Create a component with controlled input field and a button. When the user enters a specific value into the input (e.g., "show"), a new component should be rendered below the input, displaying a message. Otherwise, nothing should be displayed.

import React, { useState } from "react";

const InputControlledComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [showValue, setShowValue] = useState(false);

  const onClickChange = () => {
    setShowValue(true);
  };
  
  return (
    <div>
      <div className="input">
        <label for="name">Name:</label>
        <input
          type="text"
          value={inputValue}
          placeholder="Name"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="showInput">{showValue ? inputValue : null}</div>

      <div className="submit">
        <button onClick={onClickChange}>Sumbit</button>
      </div>
    </div>
  );
};

export default InputControlledComponent;
