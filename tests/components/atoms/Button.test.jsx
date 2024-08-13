import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../../../src/components/atoms/Button.jsx";

describe("Button component", () => {
  it("renders with the correct variant and className", () => {
    render(
      <Button variant="primary" className="custom-class">
        Click Me
      </Button>
    );

    const button = screen.getByText(/Click Me/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn-primary");
    expect(button).toHaveClass("custom-class");
  });

  it("renders children correctly", () => {
    render(
      <Button variant="secondary">
        <span>Click Me</span>
      </Button>
    );

    const button = screen.getByText(/Click Me/i);
    expect(button).toBeInTheDocument();
    expect(button).toContainHTML("<span>Click Me</span>");
  });

  it("accepts additional props", () => {
    render(
      <Button variant="danger" id="my-button" data-testid="test-id">
        Delete
      </Button>
    );

    const button = screen.getByTestId("test-id");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("id", "my-button");
    expect(button).toHaveTextContent("Delete");
  });
});
