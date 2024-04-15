import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App';
import reportWebVitals from "./reportWebVitals";
import Assignment3 from "./Assignment-3/Assignment3";
import { BrowserRouter } from "react-router-dom";
import Assignment from "./Assignment-1/Assignment";
import Assignment2 from "./Assignment-2/Assignment2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Assignment />
      <Assignment2 />
      <Assignment3 />
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
