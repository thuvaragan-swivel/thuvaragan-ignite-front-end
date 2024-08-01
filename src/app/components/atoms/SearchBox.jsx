"use client";

import React from "react";
import { Form } from "react-bootstrap";

const SearchBox = ({ type, placeholder, value, onChange, className }) => {
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

export default SearchBox;
