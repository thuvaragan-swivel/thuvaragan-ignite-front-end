import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SortDropdown from "../../../src/components/atoms/SortDropdown.jsx";

describe("SortDropdown component", () => {
  it("renders with the correct options and value", () => {
    const options = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Select an option", value: "" },
    ];

    render(
      <SortDropdown
        value="1"
        onChange={() => {}}
        options={options}
        className="sort-dropdown"
      />
    );

    // Checking if the dropdown is in the document.
    expect(screen.getByRole("combobox")).toBeInTheDocument();

    // Checking if the selected value is correct.
    expect(screen.getByRole("combobox")).toHaveValue("1");

    // Checking if the options are rendered correctly.
    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it("handles change events correctly", () => {
    const options = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
    ];
    const handleChange = jest.fn();

    render(
      <SortDropdown
        value="1"
        onChange={handleChange}
        options={options}
        className="sort-dropdown"
      />
    );

    // Simulating an event change.
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "2" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it("applies the correct className", () => {
    render(
      <SortDropdown
        value="1"
        onChange={() => {}}
        options={[]}
        className="sort-dropdown"
      />
    );

    expect(screen.getByRole("combobox")).toHaveClass("sort-dropdown");
  });
});
