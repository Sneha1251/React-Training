// Construct a select dropdown menu with multiple options. Control the selected option using state. When an option is selected, display a message showing the selected value.

import React, { useState } from "react";

const DropDownMenu = () => {
  const [show, setShow] = useState("");

  return (
    <div>
      <div className="dropdown">
        <select
          onChange={(e) => {
            setShow(e.target.value);
          }}
          name="language"
          id="language"
        >
          <option value="Javascript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
          <option value="Java">Java</option>
          <option value="HTML">HTML</option>
        </select>
      </div>
      <div className="dropdownshow">
        <p>
          <strong>{show}</strong>
        </p>
      </div>
    </div>
  );
};

export default DropDownMenu;
