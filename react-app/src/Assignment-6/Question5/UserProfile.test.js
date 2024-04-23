// UserProfile.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

test("renders user profile information correctly", () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  };

  render(<UserProfile name={user.name} email={user.email} phone={user.phone} />);

  // Check if the user's name, email, and phone number are displayed
  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("Email: john.doe@example.com")).toBeInTheDocument();
  expect(screen.getByText("Phone Number: 123-456-7890")).toBeInTheDocument();
});
