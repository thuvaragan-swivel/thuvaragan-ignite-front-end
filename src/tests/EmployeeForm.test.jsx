import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EmployeeForm from "@/app/components/organisms/EmployeeForm";
import { useRouter } from "next/navigation";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "@/app/redux/employeeSlice";

// Mock useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

describe("EmployeeForm component", () => {
  const mockRouter = {
    push: jest.fn(),
  };
  useRouter.mockReturnValue(mockRouter);

  const initialEmployee = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    gender: "",
    employeeId: "",
  };

  const errors = {};

  const setEmployee = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    render(
      <Provider store={store}>
        <EmployeeForm
          employee={initialEmployee}
          setEmployee={setEmployee}
          handleSubmit={handleSubmit}
          mode="add"
          errors={errors}
        />
      </Provider>
    );
  });

  it("Renders the form with all fields and buttons.", () => {
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Gender/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Employee ID/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Employee/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
  });

  it("Calls handleSubmit when the submit button is clicked.", () => {
    fireEvent.click(screen.getByText(/Add Employee/i));
    expect(handleSubmit).toHaveBeenCalled();
  });

  it("Calls router.push when the cancel button is clicked.", () => {
    fireEvent.click(screen.getByText(/Cancel/i));
    expect(mockRouter.push).toHaveBeenCalledWith("/employee/list");
  });
});
