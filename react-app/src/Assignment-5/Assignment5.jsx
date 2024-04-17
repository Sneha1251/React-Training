import { NavLink } from "react-router-dom";
import "./5.css";
import {
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
  Question10,
  Question11,
  Question12,
  Question13,
  Question14,
  Question16,
  Question15,
} from "./index.jsx";

function Assignment5() {
  
  return (
    <>
      <div className="question-1">
        <h2>Question 1</h2>
        <Question1 />
      </div>

      <div className="question-2">
        <h2>Question 2</h2>
        <Question2 />
      </div>

      <div className="question-3">
        <h2>Question 3</h2>
        <Question3 />
      </div>

      <div className="question-4">
        <h2>Question 4</h2>
        <Question4 />
      </div>

      <div className="question-5">
        <h2>Question 5</h2>
        <Question5 />
      </div>

      <div className="question-6">
        <h2>Question 6</h2>
        <Question6 />
      </div>

      <div className="question-7">
        <h2>Question 7</h2>
        <Question7 />
      </div>

      <div className="question-8">
        <h2>Question 8</h2>
        <Question8 />
      </div>

      <div className="question-9">
        <h2>Question 9</h2>
        <Question9 />
      </div>

      <div className="question-10">
        <h2>Question 10</h2>
        <Question10 />
      </div>

      <div className="question-11">
        <h2>Question 11</h2>
        <Question11 />
      </div>

      <div className="question-12">
        <h2>Question 12</h2>
        <Question12 />
      </div>

      <div className="question-13">
        <h2>Question 13</h2>
        <Question13 />
      </div>

      <div className="question-14">
        <h2>Question 14</h2>
        <Question14 />
        <div className="link">
          <NavLink exact to="/login">
            Login
          </NavLink>
        </div>
      </div>

      <div className="question-15">
        <h2>Question 15</h2>
        <Question15 />
      </div>

      <div className="question-16">
        <h2>Question 16</h2>
        <Question16 />
      </div>
    </>
  );
}

export default Assignment5;
