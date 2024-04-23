import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  test("fills username and password fields and submits form", () => {
    const spy = jest.spyOn(console, 'log');
    render(<LoginForm />);

    const usernameInput = screen.getByTestId("username");
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    expect(usernameInput.value).toBe("testuser");

    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    expect(passwordInput.value).toBe("testpassword");

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    expect(spy).toHaveBeenCalledWith('Form Submitted', 'testuser', 'testpassword');
    
    spy.mockRestore();
  });
});
