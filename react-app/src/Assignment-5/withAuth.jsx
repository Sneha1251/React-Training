import React from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  const NewComponent = () => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("login");

    if (isAuthenticated !== "true") {
      navigate("/login");
    }

    return <WrappedComponent isAuthenticated={isAuthenticated} />;
  };

  return NewComponent;
};

export default withAuth;
