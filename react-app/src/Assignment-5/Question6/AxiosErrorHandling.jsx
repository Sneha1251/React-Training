// Modify the previous assignment to implement error handling using Axios. Display an error message if the request fails and provide a way for the user to retry the request.

import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosErrorHandling = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/post")
      .then((resp) => {
        setData(resp.data);
        console.log("result: ", resp);
      })
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return (
      <>
        <h2>Axios Error Handling!</h2>
        <div className="error">
          <h2>{error}</h2>
        </div>
      </>
    );
  }

  return (
    <>
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

export default AxiosErrorHandling;
