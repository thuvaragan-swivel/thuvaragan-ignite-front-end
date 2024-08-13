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
import PropTypes from "prop-types";

// Icon component to render specific icons based on the "name" prop.
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

// Defining PropTypes for the Icon component.
Icon.propTypes = {
  name: PropTypes.oneOf([
    "add",
    "edit",
    "cancel",
    "trash",
    "arrowLeft",
    "arrowRight",
    "table",
    "grid",
    "view",
  ]).isRequired,
  className: PropTypes.string,
};

export default Icon;
