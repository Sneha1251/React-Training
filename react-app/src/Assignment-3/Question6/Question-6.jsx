// Create a list of items (e.g., products, articles) in your application.
// Implement dynamic routing to display details for each item when clicked.
// Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
// Fetch item details based on the route parameter and display them on the detail page.
// Add a "Go Back" button on the detail page to return to the list.

import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Question5/Dashboard";
import Login from "../Question4/Login";
import Home from "../Question3/Home";
import About from "../Question4/About";
import Products from "./Products";
import AllProducts from "./AllProducts";

function Detail() {
  return (
    <Routes>
      <Route path="/products/" element={<AllProducts />} />
      <Route path="/products/:id" element={<Products />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default Detail;
