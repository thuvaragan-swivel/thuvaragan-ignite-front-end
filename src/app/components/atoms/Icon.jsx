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

const Icon = ({ name, className }) => {
  const icons = {
    add: <FaPlusCircle className={className} />,
    edit: <FaEdit className={className} />,
    cancel: <FaTimesCircle className={className} />,
    trash: <FaTrashAlt className={className} />,
    arrowLeft: <FaArrowLeft className={className} />,
    arrowRight: <FaArrowRight className={className} />,
    table: <FaTable className={className} />,
    grid: <FaTh className={className} />,
    view: <FaList className={className} />,
  };

  return icons[name] || null;
};

export default Icon;
