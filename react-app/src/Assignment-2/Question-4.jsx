// Create a functional component called RandomNumberGenerator.
// Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
// Render the current value of randomNumber.
// Add a button that generates a new random number and updates the state when clicked.

import React, { useState } from "react";

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  function generateRandomNumber() {
    const randomNumberValue = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(randomNumberValue);
  }
  return (
    <>
      <div className="random-no">
        <p>Current Random Number :{randomNumber}</p>
        <button onClick={generateRandomNumber}>
          Generate Random number
        </button>
      </div>
    </>
  );
};
export default RandomNumberGenerator;
