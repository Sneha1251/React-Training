import React from "react";

const Home = () => {
  const errorTesting = () => {
    const i = 9;
    if (i === 9) {
      throw new Error("An error occurred in the Home component");
    }
  };

    errorTesting();

  return (
    <div>
      <h2>This is the Home page</h2>
    </div>
  );
};

export default Home;
