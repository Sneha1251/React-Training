// Create a React application that has multiple pages represented as components. Implement lazy loading for these components using React's lazy and Suspense features. When a user navigates to a particular page, the component should be loaded lazily, improving the application's initial loading time.

import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

const LazyLoading = () => {
  return (
    <ErrorBoundary fallback={<h1>Error Loading Page</h1>}>
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
    </ErrorBoundary>
  );
};

export default LazyLoading;
