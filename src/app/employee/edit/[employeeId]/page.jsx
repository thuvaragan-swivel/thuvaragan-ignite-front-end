"use client";

import React from "react";
import { useParams } from "next/navigation";
import useEmployeeForm from "@/app/hooks/useEmployeeForm";
import { API_SERVER_URL } from "@/app/utils/apiServerUrl";
import EmployeeForm from "@/app/components/organisms/EmployeeForm";

// Page component for editing an existing employee.
const Page = () => {
  const { employeeId } = useParams();

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
    "edit",
    employeeId
  );

  // Function to handle updating employee details.
  const updateEmployeeData = async () => {
    await submitForm(`${API_SERVER_URL}/${employeeId}`, "PUT");
  };

  return (
    <>
      <EmployeeForm
        employee={employee}
        setEmployee={setEmployee}
        handleSubmit={updateEmployeeData}
        mode="edit"
        errors={errors}
      />
    </>
  );
};

export default Page;
