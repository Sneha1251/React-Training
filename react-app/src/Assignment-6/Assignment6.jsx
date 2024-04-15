import {
  LazyLoading,
  ErrorBoundary,
  Counter,
  LoginForm,
  UserProfile,
  ModalComponent,
} from "./index";
import "./6.css";

function Assignment6() {
  return (
    <>
      <div className="question-1">
        <h2>Question 1</h2>
        <LazyLoading />
      </div>

      <div className="question-2">
        <h2>Question 2</h2>
        <ErrorBoundary />
      </div>

      <div className="question-3">
        <h2>Question 3</h2>
        <Counter />
      </div>

      <div className="question-4">
        <h2>Question 4</h2>
        <LoginForm />
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
