"use client";

import React from "react";
import { Image } from "react-bootstrap";

const GenderImage = ({ src, alt, className }) => {
  return <Image src={src} alt={alt} className={className} />;
};

export default GenderImage;
