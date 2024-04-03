// create two components: Parent and Child.
// In the Parent component, maintain a count state.
// Pass a callback function from the Parent to the Child that increments the count.
// Use the useCallback hook in the Parent to memoize the callback function with a dependency on the count state.
// Display the count in the Child component.
// Implement a button in the Child component that resets the count to zero when clicked.

import React, { useState, useCallback } from 'react';

// Child Component
const Child = ({ count, onReset }) => {
  return (
    <div>
        <h2>Child Component</h2>
      <h2>Count: {count}</h2>
      <button onClick={onReset}>Reset Count</button>
    </div>
  );
};

// Parent Component
const Parent = () => {
  const [count, setCount] = useState(0);

  // Memoize the callback function using useCallback
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count in Parent: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <Child count={count} onReset={resetCount} />
    </div>
  );
};

export default Parent;