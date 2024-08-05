"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ToastProvider component to provide toast notifications.
const ToastProvider = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer position="top-center" autoClose={4000} />
    </>
  );
};

export default ToastProvider;
