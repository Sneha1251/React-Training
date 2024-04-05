// Create a functional component named Weather that accepts a prop called temperature (a number).
// Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
// Import and render the Weather component in the App component with different temperature values.

import React from "react";
let message = "";
const Weather = ({ temperature }) => {
  
   message = "";
  if (temperature > 25) {
    message = "It's sunny today!";
  } else if (temperature <=10) {
    message = "It's cold today!";
  }
  return (
    <div className="weather">
      <h3>{`${message} at ${temperature}°C`}</h3>
    </div>
  );
};
export default Weather;