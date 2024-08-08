import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="custom-spinner" data-testid="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
