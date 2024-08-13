import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBox from "../../../src/components/atoms/SearchBox.jsx";

describe("SearchBox component", () => {
  it("renders with the correct type, placeholder, and className", () => {
    render(
      <SearchBox
        type="text"
        placeholder="Search here"
        value=""
        onChange={() => {}}
        className="search-box"
      />
    );

    const input = screen.getByPlaceholderText("Search here");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveClass("search-box");
  });

  it("handles change events correctly", () => {
    const handleChange = jest.fn();
    render(
      <SearchBox
        type="text"
        placeholder="Search here"
        value=""
        onChange={handleChange}
        className="search-box"
      />
    );

    const input = screen.getByPlaceholderText("Search here");
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders with the correct value", () => {
    render(
      <SearchBox
        type="text"
        placeholder="Search here"
        value="test value"
        onChange={() => {}}
        className="search-box"
      />
    );

    const input = screen.getByDisplayValue("test value");
    expect(input).toBeInTheDocument();
  });
});
