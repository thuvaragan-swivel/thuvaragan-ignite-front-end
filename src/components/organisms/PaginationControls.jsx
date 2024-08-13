"use client";

import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { setPagination } from "../../redux/employeeSlice.js";
import Button from "../atoms/Button.jsx";
import Icon from "../atoms/Icon.jsx";

// PaginationControls component for navigating between pages.
const PaginationControls = ({ pagination }) => {
  const dispatch = useDispatch();

  const handlePrevious = () => {
    dispatch(
      setPagination({
        ...pagination,
        currentPage: pagination.currentPage - 1,
      })
    );
  };

  const handleNext = () => {
    dispatch(
      setPagination({
        ...pagination,
        currentPage: pagination.currentPage + 1,
      })
    );
  };

  return (
    <div className="d-flex justify-content-between pagination-controls">
      <Button disabled={pagination.currentPage === 1} onClick={handlePrevious}>
        <Icon name="arrowLeft" className="me-2" />
        Previous
      </Button>
      <span>
        Page {pagination.currentPage} of {pagination.totalPages}
      </span>
      <Button
        disabled={pagination.currentPage === pagination.totalPages}
        onClick={handleNext}
      >
        Next
        <Icon name="arrowRight" className="ms-2" />
      </Button>
    </div>
  );
};

// Defining PropTypes for the PaginationControls component.
PaginationControls.propTypes = {
  pagination: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
  }).isRequired,
};

export default PaginationControls;
