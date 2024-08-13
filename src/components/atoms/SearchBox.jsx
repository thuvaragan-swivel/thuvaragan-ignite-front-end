"use client";

import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

// SearchBox component for search input field.
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

// Defining PropTypes for the SearchBox component.
SearchBox.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default SearchBox;
