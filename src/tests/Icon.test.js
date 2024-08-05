import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for extended matchers
import Icon from '../app/components/atoms/Icon.jsx'; // Adjust the import path if necessary
import { FaPlusCircle, FaEdit, FaTimesCircle, FaTrashAlt, FaArrowLeft, FaArrowRight, FaTable, FaTh, FaList } from 'react-icons/fa';

describe('Icon component', () => {
  it('renders the correct icon based on the name prop', () => {
    const icons = {
      add: FaPlusCircle,
      edit: FaEdit,
      cancel: FaTimesCircle,
      trash: FaTrashAlt,
      arrowLeft: FaArrowLeft,
      arrowRight: FaArrowRight,
      table: FaTable,
      grid: FaTh,
      view: FaList,
    };

    Object.keys(icons).forEach((iconName) => {
      render(<Icon name={iconName} />);
      const iconElement = screen.getByTestId(iconName);
      expect(iconElement).toBeInTheDocument();
    });
  });

  it('applies the correct className', () => {
    render(<Icon name="add" className="test-class" />);
    const iconElement = screen.getByTestId('add');
    expect(iconElement).toHaveClass('test-class');
  });

  it('applies the correct className', () => {
    render(<Icon name="edit" className="test-class" />);
    const iconElement = screen.getByTestId('edit');
    expect(iconElement).toHaveClass('test-class');
  });

  it('applies the correct className', () => {
    render(<Icon name="cancel" className="test-class" />);
    const iconElement = screen.getByTestId('cancel');
    expect(iconElement).toHaveClass('test-class');
  });
});
