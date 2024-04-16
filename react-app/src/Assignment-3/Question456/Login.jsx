import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const Navigate=useNavigate(-1)
  const login = () => {
    if (name === "Sneha" && password === "123456") {
      localStorage.setItem("login", true);
    }
    localStorage.getItem("login") ? Navigate("/about") : Navigate("/login");
  };
  
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>login</button>
      </div>
    </>
  );
};

export default Login;
