// Build a registration form with two password fields. Implement controlled components for both password inputs. Add a validation rule to ensure that the two passwords match before allowing the form submission.

import React, { useState } from "react";

const Registration = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validation = () => {
    if (password === "" && confirmPassword === "") {
      alert("Write the password");
    } else if (password === confirmPassword) {
      console.log("Password Matched");
      alert("Password Matched");
    } else {
      alert("Password not Matched");
    }
  };
  return (
    <div>
      <div className="input-password">
        <label for="password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <label for="con-password"> Confirm-Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          placeholder="Confrim-Password"
        />
      </div>
      <div className="submit">
        <button type="submit" onClick={validation}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Registration;
