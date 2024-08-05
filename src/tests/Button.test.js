// src/app/components/atoms/Button/Button.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../app/components/atoms/Button.jsx'; // adjust the import path as needed

describe('Button component', () => {
  it('renders correctly with children', () => {
    render(<Button variant="primary">Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies the correct variant class', () => {
    render(<Button variant="secondary">Click Me</Button>);
    expect(screen.getByText('Click Me')).toHaveClass('btn-secondary');
  });

  it('applies additional class names', () => {
    render(<Button variant="primary" className="extra-class">Click Me</Button>);
    expect(screen.getByText('Click Me')).toHaveClass('extra-class');
  });

  it('spreads additional props to the button element', () => {
    render(<Button variant="primary" data-testid="custom-id">Click Me</Button>);
    expect(screen.getByTestId('custom-id')).toBeInTheDocument();
  });
});
