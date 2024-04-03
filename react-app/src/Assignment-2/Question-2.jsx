// Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.

import React from "react";
import { useState } from "react";

const PersonForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  return (
    <>
      <div className="personDetail">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="display">
        <p>
          First Name: <strong>{firstName}</strong>
        </p>
        <p>
          Last Name: <strong>{lastName}</strong>
        </p>
        <p>
          Age: <strong>{age}</strong>
        </p>
      </div>
    </>
  );
};
export default PersonForm;
