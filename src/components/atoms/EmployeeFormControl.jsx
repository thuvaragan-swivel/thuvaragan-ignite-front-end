"use client";

import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

// EmployeeFormControl component for handling different form controls.
const EmployeeFormControl = ({
  controlId,
  label,
  type,
  placeholder,
  value,
  onChange,
  isInvalid,
  feedback,
  as = "input",
  options = [],
}) => {
  return (
    <Form.Group controlId={controlId} className="mt-3">
      <Form.Label>{label}</Form.Label>
      {as === "input" && (
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          isInvalid={isInvalid}
        />
      )}
      {as === "select" && (
        <Form.Control
          as="select"
          value={value}
          onChange={onChange}
          required
          isInvalid={isInvalid}
        >
          <option value="">Select</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Control>
      )}
      <Form.Control.Feedback type="invalid">{feedback}</Form.Control.Feedback>
    </Form.Group>
  );
};

// Defining PropTypes for the EmployeeFormControl component.
EmployeeFormControl.propTypes = {
  controlId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool,
  feedback: PropTypes.string,
  as: PropTypes.oneOf(["input", "select"]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default EmployeeFormControl;
