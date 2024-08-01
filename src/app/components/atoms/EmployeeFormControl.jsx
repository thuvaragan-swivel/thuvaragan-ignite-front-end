"use client";

import React from "react";
import { Form } from "react-bootstrap";

const EmployeeFormControl = ({ controlId, label, type, placeholder, value, onChange, isInvalid, feedback, as = "input", options = [] }) => {
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
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Control>
      )}
      <Form.Control.Feedback type="invalid">
        {feedback}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default EmployeeFormControl;
