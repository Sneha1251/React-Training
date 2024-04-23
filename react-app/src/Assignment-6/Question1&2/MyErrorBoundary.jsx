// Extend Question 1 to include error handling. If a lazy-loaded component fails to load, display a user-friendly error message to the user instead of crashing the application. Implement this using the ErrorBoundary component.
import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = () => {
      setHasError(true);
      window.document.getElementById(
        "webpack-dev-server-client-overlay"
      ).style.display = "none";
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return (
      <>
        <div>
          <span>Opps! <br/>Something went wrong</span>
        </div>
      </>
    );
  } else {
    return children;
  }
};

export default ErrorBoundary;
