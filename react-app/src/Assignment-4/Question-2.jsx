// Build a form that includes various input fields like text inputs, checkboxes, and radio buttons. Ensure that each input is a controlled component. When the user submits the form, log the form data to the console.

import React, { useState } from "react";

const FormComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const submitData = () => {
    if (inputValue === "") {
      alert("Write the values");
    } else {
      console.log("Form is Submitted");
      alert("Form is Submitted");
    }
  };
  return (
    <>
      <div className="form-element">
        <div>
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
        <div>
          <label for="subscribe">Subscribed:</label>
          <input type="checkbox" id="subscribe" name="Subscribe"></input>
        </div>
        <div>
          <label for="contact">Contact Method choice:</label>
          <div className="radio">
            <label for="email">Email</label>
            <input
              type="radio"
              id="email"
              value="Email"
              name="radiobutton"
            ></input>
            <label for="phone">Phone</label>
            <input
              type="radio"
              id="phone"
              value="Phone"
              name="radiobutton"
            ></input>
          </div>
        </div>
      </div>

      <div className="submit">
        <button type="submit" onClick={submitData}>
          Submit
        </button>
      </div>
    </>
  );
};

export default FormComponent;
