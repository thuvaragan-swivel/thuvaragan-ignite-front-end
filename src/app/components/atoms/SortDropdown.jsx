"use client";

import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

// SortDropdown component for sorting options.
const SortDropdown = ({ value, onChange, options, className }) => {
  return (
    <Form.Select value={value} onChange={onChange} className={className}>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          style={{ display: option.value === "" ? "none" : "block" }}
        >
          {option.label}
        </option>
      ))}
    </Form.Select>
  );
};

// Defining PropTypes for the SortDropdown component.
SortDropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

// Default props.
SortDropdown.defaultProps = {
  className: "",
};

export default SortDropdown;
