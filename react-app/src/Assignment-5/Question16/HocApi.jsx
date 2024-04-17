// Develop an HOC named withDataFetching that fetches data from an API and passes it as props to a component. Use this HOC to retrieve and display data in a component.

import React from "react";
import withDataFetching from "./withDataFetching";

const HocApi = ({data}) => {

  return (
    <>
      <h2>HOC API</h2>
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

export default withDataFetching(HocApi);