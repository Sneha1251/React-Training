import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(-1);

  const login = () => {
    if (name === "Sneha" && password === "123456") {
      localStorage.setItem("login", "true");
    }
    localStorage.getItem("login") === "true"
      ? navigate("/about")
      : navigate("/login");
  };

  return (
    <>
      <div className="auth">
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>loggin</button>
      </div>
    </>
  );
};

export default Login;
