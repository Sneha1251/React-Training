// create two components: a parent component that acts as a provider and a child component that consumes the context.
// Create a context to manage a user's authentication status (logged in or out).
// Implement a login button in the child component that, when clicked, updates the authentication status in the context to "logged in."
// Display a message in the child component based on the user's authentication status. If the user is logged in, show "Welcome, [username]!" Otherwise, display "Please log in."

import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
    <h2>Parent Component</h2>
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        <UserStatus />
      </AuthContext.Provider>
    </>
  );
};
const UserStatus = () => {
  const { isLoggedIn, login,logout } = useContext(AuthContext);

  return (
    <>
    <h2>Child Component</h2>
      <div>{isLoggedIn ? <p>Welcome, Sneha!</p> : <p>Please Log in </p>}</div>
      <div className="auth">
        <button onClick={login}>Logged In</button>
        <button onClick={logout}>Logged Out</button>
      </div>
    </>
  );
};

export default AuthProvider;
