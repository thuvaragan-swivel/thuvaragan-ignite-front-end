"use client";

import React from 'react';
import { Form } from 'react-bootstrap';

const SortDropdown = ({ value, onChange, options, className }) => {
  return (
    <Form.Select value={value} onChange={onChange} className={className}>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          style={{ display: option.value === '' ? 'none' : 'block' }}
        >
          {option.label}
        </option>
      ))}
    </Form.Select>
  );
};

export default SortDropdown;
