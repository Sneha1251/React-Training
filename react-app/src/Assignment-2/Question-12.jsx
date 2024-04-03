// Create a simple voting application using the useReducer hook.
// Set up a reducer to manage the votes for different options.
// Create buttons representing voting options.
// Use the useReducer hook to access the votes state and dispatch actions.
// Allow users to vote for their preferred options.
// Display the current vote count for each option.

import React, { useReducer } from "react";

const initialState = {
  optionA: 0,
  optionB: 0,
  optionC: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "VOTE-OPTION-A":
      return { ...state, optionA: state.optionA + 1 };
    case "VOTE-OPTION-B":
      return { ...state, optionB: state.optionB + 1 };
    case "VOTE-OPTION-C":
      return { ...state, optionC: state.optionC + 1 };
    default:
      return state;
  }
};
const VotingApplication = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="voting-app">
      <button onClick={() => dispatch({ type: "VOTE-OPTION-A" })}>
        Option A (<strong>{state.optionA}</strong>)
      </button>
      <button onClick={() => dispatch({ type: "VOTE-OPTION-B" })}>
        Option B (<strong>{state.optionB}</strong>)
      </button>
      <button onClick={() => dispatch({ type: "VOTE-OPTION-C" })}>
        Option C (<strong>{state.optionC}</strong>)
      </button>
    </div>
  );
};
export default VotingApplication;
