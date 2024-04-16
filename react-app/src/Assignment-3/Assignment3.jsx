import {
  AuthProvider,
  PreferencesProvider,
  Routing,
  AllRoute,
} from "./index.jsx";
import { NavLink } from "react-router-dom";
import "./3.css";

const Assignment3 = () => {
  return (
    <>
      <div className="question-1">
        <h2>Question-1</h2>
        <AuthProvider />
      </div>

      <div className="question-2">
        <h2>Question-2</h2>
        <PreferencesProvider />
      </div>

      <div className="question-3">
        <h2>Question-3</h2>
        <Routing />
        <div className="link3">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/aboutt">
            About Us
          </NavLink>
        </div>
      </div>

      <div className="question-456">
        <h2>Question-456</h2>
        <AllRoute />
        <div className="link6">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/about">
            About Us
          </NavLink>
          <NavLink exact to="/login">
            Login
          </NavLink>
          <NavLink exact to="/dashboard">
            DashBoard
          </NavLink>
          <NavLink exact to="/products">
            Products
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Assignment3;
