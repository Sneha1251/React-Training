// Design a custom hook named useLocalStorage to interact with local storage.
// Create a useLocalStorage hook that allows storing and retrieving data from local storage.
// Implement methods for setting, getting, and removing data using the hook.
// Utilize the localStorage API within the hook to manage data.
// Develop a component that uses the useLocalStorage hook to manage user preferences.

import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const Storage = () => {
  const { state: valuetoshow, setting, removing, getting } = useLocalStorage();
  const [data, setData] = useState("");
  return (
    <div>
      <h2>{valuetoshow}</h2>
      <label>Change Value</label>
      <input type="text" onChange={(e) => setData(e.target.value)} />

      <button onClick={() => setting(data)}>Set Value</button>
      <button onClick={() => removing(data)}>Delete Value</button>
      <button onClick={() => getting(data)}>Get Value</button>
    </div>
  );
};

export default Storage;
