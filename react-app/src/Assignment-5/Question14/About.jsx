import React from "react";
import withAuth from "./withAuth";

const About = (props) => {
  return <h2>Welcome to the About Page</h2>;
};

export default withAuth(About);
