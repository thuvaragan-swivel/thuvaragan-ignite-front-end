import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for extended matchers
import SortDropdown from '../app/components/atoms/SortDropdown.jsx'; // Adjust the import path if necessary

describe('SortDropdown component', () => {
  const options = [
    { value: '', label: 'Select an option' },
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ];

  it('renders correctly with options', () => {
    render(
      <SortDropdown
        value=""
        onChange={() => {}}
        options={options}
        className="test-class"
      />
    );

    // Check if all options are rendered
    expect(screen.getByText('Select an option')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('applies the correct value', () => {
    render(
      <SortDropdown
        value="option1"
        onChange={() => {}}
        options={options}
        className="test-class"
      />
    );

    const selectElement = screen.getByRole('combobox');

    // Check if the select element has the correct value
    expect(selectElement).toHaveValue('option1');
  });

  it('calls onChange handler with the correct value when an option is selected', () => {
    const handleChange = jest.fn();

    render(
      <SortDropdown
        value="option2"
        onChange={handleChange}
        options={options}
        className="test-class"
      />
    );

    const selectElement = screen.getByRole('combobox');

    // Simulate selecting an option
    fireEvent.change(selectElement, { target: { value: 'option2' } });

    // Assert that the handleChange function was called
    expect(handleChange).toHaveBeenCalled();

    // Check if handleChange was called with the correct value
    const callArgs = handleChange.mock.calls[0][0];
    expect(callArgs.target.value).toBe('option2');
  });
});
