import React, { useState, useEffect } from "react";
import axios from "axios";

const withDataFetching = (WrappedComponent) => {
  function NewComponent() {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((resp) => {
          setData(resp.data);
          console.log("result: ", resp);
        })
        .catch((error) => setError(error.message));
    }, []);

    if (error) {
        return (
          <>
            <h2>HOC Error Handling!</h2>
            <div className="error">
              <h2>{error}</h2>
            </div>
          </>
        );
      }

    return <WrappedComponent data={data} />;
  }

  return NewComponent;
};

export default withDataFetching;
