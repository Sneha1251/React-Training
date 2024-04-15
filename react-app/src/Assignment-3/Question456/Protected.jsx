import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthenticationProtected = (props) => {
  const { Item } = props;
  const navigate = useNavigate(-1);

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  });
  return (
    <div>
      <Item />
    </div>
  );
};
export default AuthenticationProtected;
