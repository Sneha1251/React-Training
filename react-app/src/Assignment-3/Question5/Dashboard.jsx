import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <div className="dashboard">
        <NavLink exact to="/dashboard/profile">
          Profile
        </NavLink>
        <NavLink exact to="/dashboard/settings">
          Settings
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
export default DashBoard;
