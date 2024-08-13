"use client";

import React from "react";
import { useParams } from "next/navigation";
import { API_SERVER_URL } from "../../../../utils/apiServerUrl.js";
import useEmployeeForm from "../../../../hooks/useEmployeeForm.js";
import EmployeeForm from "../../../../components/organisms/EmployeeForm.jsx";

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
    <EmployeeForm
      employee={employee}
      setEmployee={setEmployee}
      handleSubmit={updateEmployeeData}
      mode="edit"
      errors={errors}
    />
  );
};

export default Page;
