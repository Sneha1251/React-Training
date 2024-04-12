import { NavLink } from "react-router-dom";
import "./5.css";
import {
  FetchData,
  ErrorHandling,
  LoadingIndicator,
  Pagination,
  AxiosData,
  AxiosErrorHandling,
  AxiosPost,
  GraphQlApi,
  GraphQlPagination,
  GraphQlMutation,
  GraphQlError,
  ReusableButton,
  BasicModal,
  HocAuthenticated,
  HOC2,
  HocApi,
} from "./index.jsx";
function Assignment5() {
  return (
    <>
      <div className="question-1">
        <h2>Question 1</h2>
        <FetchData />
      </div>

      <div className="question-2">
        <h2>Question 2</h2>
        <ErrorHandling />
      </div>

      <div className="question-3">
        <h2>Question 3</h2>
        <LoadingIndicator />
      </div>

      <div className="question-4">
        <h2>Question 4</h2>
        <Pagination />
      </div>

      <div className="question-5">
        <h2>Question 5</h2>
        <AxiosData />
      </div>

      <div className="question-6">
        <h2>Question 6</h2>
        <AxiosErrorHandling />
      </div>

      <div className="question-7">
        <h2>Question 7</h2>
        <AxiosPost />
      </div>

      <div className="question-8">
        <h2>Question 8</h2>
        <GraphQlApi />
      </div>

      <div className="question-9">
        <h2>Question 9</h2>
        <GraphQlPagination />
      </div>

      <div className="question-10">
        <h2>Question 10</h2>
        <GraphQlMutation />
      </div>

      <div className="question-11">
        <h2>Question 11</h2>
        <GraphQlError />
      </div>

      <div className="question-12">
        <h2>Question 12</h2>
        <ReusableButton />
      </div>

      <div className="question-13">
        <h2>Question 13</h2>
        <BasicModal />
      </div>

      <div className="question-14">
        <h2>Question 14</h2>
        <HocAuthenticated />
        <div className="link">
          <NavLink exact to="/login">
            Login
          </NavLink>
        </div>
      </div>

      <div className="question-15">
        <h2>Question 15</h2>
        <HOC2 />
      </div>

      <div className="question-16">
        <h2>Question 16</h2>
        <HocApi />
      </div>
    </>
  );
}
export default Assignment5;
