"use client";

import React from "react";
import Button from "@/app/components/atoms/Button";
import Icon from "@/app/components/atoms/Icon";
import { useDispatch } from "react-redux";
import { setPagination } from "@/app/redux/employeeSlice";

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

export default PaginationControls;
