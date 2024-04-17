import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import withAuth from "./withAuth";

const Protected = (props) => {
  
  return (
    <div>
      {props.isAuthenticated === "true" ? <Outlet /> : <Navigate to="/login" />}
    </div>
  );
};

export default withAuth(Protected);
