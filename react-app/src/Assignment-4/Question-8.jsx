// Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit. Implement controlled components for both inputs. When the user enters a value in one input, the other input should update with the converted temperature.

import React, { useState } from "react";

const TemperatureConverter = () => {
  const [Celsius, setCelsius] = useState("");
  const [Fahrenheit, setFahenheit] = useState("");

  const CelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahenheit(((parseFloat(value) * 9) / 5 + 32).toFixed(2));
  };

  const FahrenheitChange = (e) => {
    const value = e.target.value;
    setFahenheit(value);
    setCelsius((((parseFloat(value) - 32) * 5) / 9).toFixed(2));
  };

  return (
    <div className="temperature">
      <label htmlFor="search">Celsius:</label>
      <input
        type="text"
        value={Celsius}
        onChange={CelsiusChange}
        placeholder="Enter temperature in C"
      />
      <label>Fahrenheit:</label>
      <input
        type="text"
        value={Fahrenheit}
        onChange={FahrenheitChange}
        placeholder="Enter temperature in F"
      />
    </div>
  );
};

export default TemperatureConverter;
