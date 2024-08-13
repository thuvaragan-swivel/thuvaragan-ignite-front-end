"use client";

import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import PropTypes from "prop-types";

// Button component wrapping Bootstrap Button with custom props.
const Button = ({ variant, className, children, ...props }) => {
  return (
    <BootstrapButton variant={variant} className={className} {...props}>
      {children}
    </BootstrapButton>
  );
};

// Defining prop types for the Button component.
Button.propTypes = {
  variant: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
