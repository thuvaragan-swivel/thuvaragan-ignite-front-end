"use client";

import React from "react";
import {
  FaPlusCircle,
  FaEdit,
  FaTimesCircle,
  FaTrashAlt,
  FaArrowLeft,
  FaArrowRight,
  FaTable,
  FaTh,
  FaList,
} from "react-icons/fa";

// Icon component to render specific icons based on the "name" prop.
const Icon = ({ name, className }) => {
  const icons = {
    add: <FaPlusCircle className={className} data-testid="add" />,
    edit: <FaEdit className={className} data-testid="edit" />,
    cancel: <FaTimesCircle className={className} data-testid="cancel" />,
    trash: <FaTrashAlt className={className} data-testid="trash" />,
    arrowLeft: <FaArrowLeft className={className} data-testid="arrowLeft" />,
    arrowRight: <FaArrowRight className={className} data-testid="arrowRight" />,
    table: <FaTable className={className} data-testid="table" />,
    grid: <FaTh className={className} data-testid="grid" />,
    view: <FaList className={className} data-testid="view" />,
  };

  return icons[name] || null;
};

export default Icon;
