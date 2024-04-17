import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App';
import reportWebVitals from "./reportWebVitals";
import Assignment from "./Assignment-1/Assignment";
import Assignment2 from "./Assignment-2/Assignment2";
import Assignment3 from "./Assignment-3/Assignment3";
import Assignment4 from "./Assignment-4/Assignment4";
import Assignment5 from "./Assignment-5/Assignment5";
import Assignment6 from "./Assignment-6/Assignment6";
import { BrowserRouter } from "react-router-dom";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Assignment />
        <Assignment2 />
        <Assignment3 />
        <Assignment4 />
        <Assignment5 />
        <Assignment6 />
      </ApolloProvider>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
