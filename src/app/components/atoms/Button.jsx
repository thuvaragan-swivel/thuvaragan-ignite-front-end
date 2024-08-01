"use client";

import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";

const Button = ({ variant, className, children, ...props }) => {
  return (
    <BootstrapButton variant={variant} className={className} {...props}>
      {children}
    </BootstrapButton>
  );
};

export default Button;
