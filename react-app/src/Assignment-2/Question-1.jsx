// Create a functional component called Counter.
// Inside the component, use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// When the user clicks on the buttons, update the count state accordingly.

import React from "react";
import { useState } from "react";

const Counter = () => {
  let [count, setCounter] = useState(0);

  const addValue = () => {
    console.log("Clicked", count);
    count = count + 1;
    setCounter(count);
  };

  const RemoveValue = () => {
    console.log("Clicked", count);
    count = count - 1;
    setCounter(count);
  };
  return (
    <>
      <p>Counter: <strong>{count}</strong></p>
      <div className="addbutton">
        <button onClick={addValue}>Add Value</button>
        <button onClick={RemoveValue}>Remove Value</button>
      </div>
    </>
  );
};
export default Counter;
