// Create a React component that fetches data from a public API (e.g., JSONPlaceholder) using Axios and displays it on the page.

import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => {
        setData(resp.data);
        console.log("result: ", resp);
      })
  }, []);

  return (
    <>
      <h2>Axios API</h2>
      <div className="grid">
        {data.slice(0, 12).map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 8).toUpperCase()}</h2>
              <p>{body.slice(0, 50).toUpperCase()}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AxiosData;
