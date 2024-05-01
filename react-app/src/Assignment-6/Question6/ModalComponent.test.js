import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ModalComponent from "./ModalComponent";

describe("ModalComponent", () => {
  test("renders modal closed initially", () => {
    render(<ModalComponent />);
    const modalTitle = screen.queryByText("Welcome to succesive");
    expect(modalTitle).toBeNull();
  });

  test('opens modal when "Open modal" button is clicked', () => {
    render(<ModalComponent />);
    const openModalButton = screen.getByText("Open modal");
    fireEvent.click(openModalButton);
    const modalTitle = screen.queryByText("Welcome to succesive");
    expect(modalTitle).toBeInTheDocument();
  });

  test('closes modal when "Close modal" button is clicked', () => {
    render(<ModalComponent />);
    const openModalButton = screen.getByText("Open modal");
    fireEvent.click(openModalButton);
    const closeModalButton = screen.getByText("Close modal");
    fireEvent.click(closeModalButton);
    const modalTitle = screen.queryByText("Welcome to succesive");
    expect(modalTitle).toBeNull();
  });
});
