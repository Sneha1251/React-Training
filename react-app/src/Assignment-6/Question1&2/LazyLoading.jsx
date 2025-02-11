// Create a React application that has multiple pages represented as components. Implement lazy loading for these components using React's lazy and Suspense features. When a user navigates to a particular page, the component should be loaded lazily, improving the application's initial loading time.

import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MyErrorBoundary from "./MyErrorBoundary";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

const LazyLoading = () => {
  return (
    <MyErrorBoundary>
      <Suspense
        fallback={
          <div>
            <strong>Loading...</strong>
          </div>
        }
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </MyErrorBoundary>
  );
};

export default LazyLoading;
