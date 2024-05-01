// Counter.test.js
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";

test("Counter increments and decrements correctly", () => {
  render(<Counter />);

  const counterValue = screen.getByText(/Counter:/i);
  expect(counterValue).toHaveTextContent("Counter: 0");

  const Increment = screen.getByText("Increment");
  expect(Increment).toBeInTheDocument();

  const Decrement = screen.getByText("Decrement");
  expect(Decrement).toBeInTheDocument();

  const incrementButton = screen.getByText("Increment");
  fireEvent.click(incrementButton);
  expect(counterValue).toHaveTextContent("Counter: 1");

  const decrementButton = screen.getByText("Decrement");
  fireEvent.click(decrementButton);
  expect(counterValue).toHaveTextContent("Counter: 0");
});
