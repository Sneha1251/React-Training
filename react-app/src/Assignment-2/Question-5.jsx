// Create a functional component called CounterWithStep.
// Use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// Add an input field where the user can specify a step value.
// Update the count using the specified step value when the buttons are clicked.

import React, { useState } from "react";

const CounterWithStep = () => {
  const [count, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const addValue = () => {
    setCounter(count + step);
  };

  const RemoveValue = () => {
    setCounter(count - step);
  };
  const stepChange = (e) => {
    const newStep = parseInt(e.target.value);
    setStep(newStep);
  };
  return (
    <>
      <p>
        Counter: <strong>{count}</strong>
      </p>
      <div className="inceasebutton">
        <button onClick={addValue}>Increase ValuIe</button>
        <button onClick={RemoveValue}>Decrease Value</button>
      </div>
      <div className="step">
        <input type="number" value={step} onChange={stepChange}></input>
      </div>
    </>
  );
};
export default CounterWithStep;
