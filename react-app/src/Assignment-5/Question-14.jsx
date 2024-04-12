// Create an HOC named withAuth that restricts access to a specific component to authenticated users only. Implement this HOC on a sample component and demonstrate how it protects routes.

import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Protected from "./Protected";
import About from "./About";

const HocAuthenticated = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route element={<Protected />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
};
export default HocAuthenticated;
