"use client";

import React from "react";
import Link from "next/link";
import useEmployeeForm from "@/app/hooks/useEmployeeForm";
import { API_SERVER_URL } from "@/app/utils/apiServerUrl";
import EmployeeForm from "@/app/components/organisms/EmployeeForm";
import Button from "@/app/components/atoms/Button";
import Icon from "@/app/components/atoms/Icon";

// Page component for adding a new employee.
const Page = () => {
  const initialEmployee = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    gender: "",
    employeeId: "",
  };

  // Custom hook to manage employee form state and submission.
  const { employee, setEmployee, errors, submitForm } = useEmployeeForm(
    initialEmployee,
    "add"
  );

  // Function to handle adding employee details.
  const addEmployeeDetail = async () => {
    await submitForm(API_SERVER_URL, "POST");
  };

  return (
    <div className="add-container">
      <Link href="/" passHref>
        <Button variant="secondary" className="mt-3 go-home-btn">
          <Icon name="arrowLeft" className="me-2" />
          Home
        </Button>
      </Link>
      <EmployeeForm
        employee={employee}
        setEmployee={setEmployee}
        handleSubmit={addEmployeeDetail}
        mode="add"
        errors={errors}
      />
    </div>
  );
};

export default Page;
