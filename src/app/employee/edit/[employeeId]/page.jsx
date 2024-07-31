"use client";

import React from "react";
import { useParams } from "next/navigation";
import EmployeeForm from "@/app/components/EmployeeForm";
import useEmployeeForm from "@/app/hooks/useEmployeeForm";
import { API_SERVER_URL } from "@/app/utils/apiServerUrl";

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

  const { employee, setEmployee, errors, submitForm } = useEmployeeForm(
    initialEmployee,
    "edit",
    employeeId
  );

  const updateEmployeeData = async () => {
    await submitForm(`${API_SERVER_URL}/${employeeId}`, "PUT");
  };

  return (
    <>
      {/* <h1>UPDATE EMPLOYEE DATA</h1> */}
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
