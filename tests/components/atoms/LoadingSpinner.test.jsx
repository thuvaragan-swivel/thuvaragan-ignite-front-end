import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingSpinner from "../../../src/components/atoms/LoadingSpinner.jsx";

describe("LoadingSpinner", () => {
  test("renders the loading spinner", () => {
    render(<LoadingSpinner />);

    // Checking if the spinner is in the document.
    const spinner = screen.getByTestId("loading-spinner");
    expect(spinner).toBeInTheDocument();

    // Also checking if the spinner is visible on the screen.
    expect(spinner).toBeVisible();
  });
});
