// Enhance the previous application by adding protected routes that require authentication.
// Create a login page with a form that accepts a username and password.
// Implement authentication logic (e.g., hardcode a username and password for now).
// Secure the About page so that it can only be accessed by authenticated users.
// Redirect unauthenticated users to the login page.
// Display a message on the Home page welcoming the authenticated user.

import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "../Question3/Home";
import About from "../Question4/About";
import AuthenticationProtected from "../Protected";

const ProtectedAuthentication=()=>{
 return(
    <Routes>
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/" element={<Home />} />
    <Route exact path='/about' element={<AuthenticationProtected Item={About}/>}/>
  </Routes>
 );
}
export default ProtectedAuthentication