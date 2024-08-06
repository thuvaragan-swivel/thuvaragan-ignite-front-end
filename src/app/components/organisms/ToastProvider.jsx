"use client";

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

// ToastProvider component to provide toast notifications.
const ToastProvider = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer position="top-center" autoClose={4000} />
    </>
  );
};

// Defining PropTypes for the ToastProvider component.
ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToastProvider;
