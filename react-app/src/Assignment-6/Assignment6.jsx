import {
  LazyLoading,
  ErrorCounter,
  Counter,
  LoginForm,
  UserProfile,
  ModalComponent,
} from "./index";
import "./6.css";
import { ErrorBoundary } from "react-error-boundary";
// import MyErrorBoundary from "./Question-2";

function Assignment6() {
  return (
    <>
      <div className="question-1">
        <h2>Question 1</h2>
        <LazyLoading />
      </div>


      <div className="question-3">
        <h2>Question 3</h2>
        <Counter />
      </div>

      <div className="question-4">
        <h2>Question 4</h2>
        {/* <MyErrorBoundary fallback={"Error Loading Page"}>
          <LoginForm />
        </MyErrorBoundary> */}
      </div>

      <div className="question-5">
        <h2>Question 5</h2>
        <UserProfile
          name="John Doe"
          email="john.doe@example.com"
          phone="123-456-7890"
        />
      </div>

      <div className="question-6">
        <h2>Question 6</h2>
        <ModalComponent />
      </div>
    </>
  );
}
export default Assignment6;
