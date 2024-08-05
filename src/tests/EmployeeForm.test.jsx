import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmployeeForm from '../app/components/organisms/EmployeeForm';
import { useRouter } from 'next/navigation';

// Mock the useRouter hook from next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('EmployeeForm component', () => {
  const mockRouterPush = jest.fn();

  beforeAll(() => {
    useRouter.mockReturnValue({
      push: mockRouterPush,
    });
  });

  const mockEmployee = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    gender: '',
    employeeId: '',
  };

  const mockSetEmployee = jest.fn();
  const mockHandleSubmit = jest.fn();
  const mockErrors = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    gender: '',
    employeeId: '',
  };

  it('renders correctly', () => {
    render(
      <EmployeeForm
        employee={mockEmployee}
        setEmployee={mockSetEmployee}
        handleSubmit={mockHandleSubmit}
        mode="add"
        errors={mockErrors}
      />
    );

    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Gender/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Employee ID/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Employee/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
  });

  it('handles input changes', () => {
    render(
      <EmployeeForm
        employee={mockEmployee}
        setEmployee={mockSetEmployee}
        handleSubmit={mockHandleSubmit}
        mode="add"
        errors={mockErrors}
      />
    );

    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: 'Jonathan' },
    });
    expect(mockSetEmployee).toHaveBeenCalledWith({
      ...mockEmployee,
      firstName: 'Jonathan',
    });

    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: 'Davidson' },
    });
    expect(mockSetEmployee).toHaveBeenCalledWith({
      ...mockEmployee,
      lastName: 'Davidson',
    });

    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'john.dav@example.com' },
    });
    expect(mockSetEmployee).toHaveBeenCalledWith({
      ...mockEmployee,
      emailAddress: 'john.dav@example.com',
    });

    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: '+94123456789' },
    });
    expect(mockSetEmployee).toHaveBeenCalledWith({
      ...mockEmployee,
      phoneNumber: '+94123456789',
    });

    fireEvent.change(screen.getByLabelText(/Gender/i), {
      target: { value: 'Male' },
    });
    expect(mockSetEmployee).toHaveBeenCalledWith({
      ...mockEmployee,
      gender: 'Male',
    });

    fireEvent.change(screen.getByLabelText(/Employee ID/i), {
      target: { value: '123' },
    });
    expect(mockSetEmployee).toHaveBeenCalledWith({
      ...mockEmployee,
      employeeId: 123,
    });
  });

  it('calls handleSubmit when the form is submitted', () => {
    render(
      <EmployeeForm
        employee={mockEmployee}
        setEmployee={mockSetEmployee}
        handleSubmit={mockHandleSubmit}
        mode="add"
        errors={mockErrors}
      />
    );

    const submitButton = screen.getByText(/Add Employee/i);
    fireEvent.click(submitButton);

    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  it('redirects to the employee list when cancel button is clicked', () => {
    render(
      <EmployeeForm
        employee={mockEmployee}
        setEmployee={mockSetEmployee}
        handleSubmit={mockHandleSubmit}
        mode="add"
        errors={mockErrors}
      />
    );

    const cancelButton = screen.getByText(/Cancel/i);
    fireEvent.click(cancelButton);

    expect(mockRouterPush).toHaveBeenCalledWith('/employee/list');
  });
});
