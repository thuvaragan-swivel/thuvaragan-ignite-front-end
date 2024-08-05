"use client";

import React from "react";
import { Image } from "react-bootstrap";

// GenderImage component for displaying images with the optional gender classes.
const GenderImage = ({ src, alt, className }) => {
  return <Image src={src} alt={alt} className={className} />;
};

export default GenderImage;
