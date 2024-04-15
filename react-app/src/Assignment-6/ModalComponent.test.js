// ModalComponent.test.js

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ModalComponent from "./Question-6";

test("modal opens and closes correctly", async () => {
  render(<ModalComponent />);

  expect(screen.queryByText("Welcome to successive")).toBeNull();
  fireEvent.click(screen.getByText("Open modal"));
  await screen.findByText("Welcome to successive");
  expect(screen.getByText("Welcome to successive")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Close modal"));
  await screen.findByText("Welcome to successive", {
    timeout: 1000,
    hidden: true,
  });
  expect(screen.queryByText("Welcome to successive")).toBeNull();
});
