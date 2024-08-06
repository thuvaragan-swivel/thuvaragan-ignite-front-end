"use client";

import React from "react";
import EmployeeFormControl from "@/app/components/atoms/EmployeeFormControl";
import PropTypes from "prop-types";

// EmployeeFormGroup component that wraps EmployeeFormControl with specific props.
const EmployeeFormGroup = ({
  controlId,
  label,
  type,
  placeholder,
  value,
  onChange,
  isInvalid,
  feedback,
  as,
  options,
}) => {
  return (
    <EmployeeFormControl
      controlId={controlId}
      label={label}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      isInvalid={isInvalid}
      feedback={feedback}
      as={as}
      options={options}
    />
  );
};

// Defining PropTypes for the EmployeeFormGroup component.
EmployeeFormGroup.propTypes = {
  controlId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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

// Default props.
EmployeeFormGroup.defaultProps = {
  type: "text",
  placeholder: "",
  value: "",
  isInvalid: false,
  feedback: "",
  as: "input",
  options: [],
};

export default EmployeeFormGroup;
