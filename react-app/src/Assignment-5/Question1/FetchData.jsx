// Create a React component that fetches data from a public API (e.g., JSONPlaceholder) and displays it on the page. Use the fetch function to make the request.

import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
      result.json().then((resp) => {
        setData(resp);
        console.log("result: ", resp);
      });
    });
  }, []);

  return (
    <>
      <h2>Fetch API</h2>
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

export default FetchData;
