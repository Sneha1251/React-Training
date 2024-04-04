// Extend the application to include nested routes for a more complex user interface.
// Create a new section of your application (e.g., a Dashboard) with multiple sub-pages (e.g., Dashboard, Profile, Settings).
// Implement nested routing within this section using nested routes.
// Add navigation links to switch between the sub-pages within the Dashboard section.
// Customize the content displayed on each sub-page.

import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "../Question4/Login";
import Home from "../Question3/Home";
import About from "../Question4/About";
import Profile from "./Profile";
import Settings from "./Settings";

const NestedRoute = () => {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/dashboard" element={<Dashboard />}>
          <Route exact path="/dashboard/profile" element={<Profile />} />
          <Route exact path="/dashboard/settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
};
export default NestedRoute;
