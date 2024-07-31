import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer position="top-center" autoClose={4000} />
    </>
  );
};

export default ToastProvider;
