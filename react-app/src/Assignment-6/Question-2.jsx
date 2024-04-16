// Extend Question 1 to include error handling. If a lazy-loaded component fails to load, display a user-friendly error message to the user instead of crashing the application. Implement this using the ErrorBoundary component.
import React from "./react";
class MyErrorBoundary extends React.Component {
  state = {
    errorMessage: "",
  };
  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }
  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }
  logErrorToServices = console.log;
  render() {
    if (this.state.errorMessage) {
      return <p>{this.state.errorMessage}</p>;
    }
    return this.props.children;
  }
}
export default MyErrorBoundary;
