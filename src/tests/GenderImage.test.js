import React from 'react';
import { render, screen } from '@testing-library/react';
import GenderImage from '../app/components/atoms/GenderImage.jsx'; // Adjust the import path if necessary

describe('GenderImage component', () => {
  it('renders an image with the correct src and alt attributes', () => {
    render(<GenderImage src="/path/to/image.jpg" alt="Profile Picture" />);

    // Check if the image is in the document
    const imgElement = screen.getByAltText('Profile Picture');
    expect(imgElement).toBeInTheDocument();

    // Check if the image src is correct
    expect(imgElement).toHaveAttribute('src', '/path/to/image.jpg');
  });

  it('applies the correct className', () => {
    render(<GenderImage src="/path/to/image.jpg" alt="Profile Picture" className="test-class" />);

    // Check if the image has the correct className
    const imgElement = screen.getByAltText('Profile Picture');
    expect(imgElement).toHaveClass('test-class');
  });
});
