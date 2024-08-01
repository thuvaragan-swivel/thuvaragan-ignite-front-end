"use client";

import React from "react";
import EmployeeFormControl from "@/app/components/atoms/EmployeeFormControl";

const EmployeeFormGroup = ({ controlId, label, type, placeholder, value, onChange, isInvalid, feedback, as, options }) => {
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

export default EmployeeFormGroup;
