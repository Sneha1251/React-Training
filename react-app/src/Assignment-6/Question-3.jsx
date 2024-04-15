// Create a React component named Counter that displays a number and two buttons, one for incrementing the number and another for decrementing it. Write tests using React Testing Library to ensure that the component behaves as expected.

// Counter.js
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>Counter: {count}</h2>
      <div className="counter">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
