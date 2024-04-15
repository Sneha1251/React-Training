// Extend Question 1 to include error handling. If a lazy-loaded component fails to load, display a user-friendly error message to the user instead of crashing the application. Implement this using the ErrorBoundary component.

import React, { useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleOnError = (error, info) => {
    console.error("Error caught:", error);
    setHasError(true);
  };

  return hasError ? (
    <div>Oops! Something went wrong.</div>
  ) : (
    <div onError={handleOnError}>{children}</div>
  );
};

export default ErrorBoundary;
