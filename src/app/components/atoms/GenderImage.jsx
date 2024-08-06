"use client";

import React from "react";
import { Image } from "react-bootstrap";
import PropTypes from "prop-types";

// GenderImage component for displaying images with the optional gender classes.
const GenderImage = ({ src, alt, className }) => {
  return <Image src={src} alt={alt} className={className} />;
};

// Defining PropTypes for the GenderImage component.
GenderImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default GenderImage;
