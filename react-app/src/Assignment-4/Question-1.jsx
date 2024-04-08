// Create a React component with an input field. Implement it as a controlled component where the input value is controlled by the component's state. When the user types into the input field, the component's state should update accordingly.

import React, { useState } from "react";

const InputComponent = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <div className="input">
        <label for="name">Name:</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="Name"
        />
      </div>
      <p className="inputvalue">
        Input value: <strong>{inputValue}</strong>
      </p>
    </div>
  );
};

export default InputComponent;
