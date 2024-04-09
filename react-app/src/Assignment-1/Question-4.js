// Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
// Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
// Display the updated count on the screen.
import { useState } from "react";
import React from "react";
const Counter = () => {
  const [counter, setCounter] = useState(10);

  // counter = 15;
  const addValue = () => {
    console.log("Clicked", counter);
    if (counter < 20) {
      setCounter(counter+ 1);
    }
  };
  const removeValue = () => {
    console.log("Clicked", counter);
    if (counter > 0) {
      setCounter(counter- 1);
    }
  };
  return (
    <>
      <h2>Counter value: {counter}</h2>

      <div className="counterr">
        <button onClick={addValue}>Add value</button>
        <button onClick={removeValue}>Remove value</button>
      </div>
    </>
  );
};
export default Counter;
