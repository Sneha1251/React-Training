// Add a loading indicator (e.g., a spinner) to the component. Display it while the data is being fetched and hide it once the data is loaded.

import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingIndicator = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((result) => {
          if (!result.ok) {
            throw Error("Could not fetch the data for that resource");
          } else {
            result.json().then((resp) => {
              setData(resp);
              setLoading(false);
              console.log("result: ", resp);
            });
          }
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, 3000);
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <div className="error">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <>
      <h2>Loading Indicator!</h2>
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

export default LoadingIndicator;
