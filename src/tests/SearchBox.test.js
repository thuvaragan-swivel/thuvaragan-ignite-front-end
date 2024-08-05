import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Use userEvent for better simulation
import '@testing-library/jest-dom'; // for extended matchers
import SearchBox from '../app/components/atoms/SearchBox.jsx'; // Adjust the import path if necessary

describe('SearchBox component', () => {
  it('renders correctly with placeholder, value, and className', () => {
    render(
      <SearchBox
        type="text"
        placeholder="Search..."
        value="Test"
        onChange={() => {}}
        className="test-class"
      />
    );

    const inputElement = screen.getByPlaceholderText('Search...');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('Test');
    expect(inputElement).toHaveClass('test-class');
  });

  it('calls onChange handler when input value changes', async () => {
    const handleChange = jest.fn();

    render(
      <SearchBox
        type="text"
        placeholder="Search..."
        value="New value"
        onChange={handleChange}
        className="test-class"
      />
    );

    const inputElement = screen.getByPlaceholderText('Search...');

    // Use userEvent to simulate typing
    await userEvent.type(inputElement, 'New value');

    // Assert that the handleChange function was called
    expect(handleChange).toHaveBeenCalled();
    
    // Check if handleChange was called with the expected event object
    // As the input value changes letter by letter, check the latest call
    const callArgs = handleChange.mock.calls[handleChange.mock.calls.length - 1][0];
    expect(callArgs.target.value).toBe('New value'); // Assert that the value is as expected
  });
});
