


// pages/editEmployee.js
"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import EmployeeForm from "@/app/components/EmployeeForm";
import { performApiRequest } from "@/app/utils/employeeUtils";
import useEmployeeForm from '@/app/hooks/useEmployeeForm';

const SERVER_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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

  const { employee, setEmployee, errors, submitForm } = useEmployeeForm(initialEmployee, 'edit');

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const data = await performApiRequest(`${SERVER_URL}/${employeeId}`, "GET");
        setEmployee(data);
      } catch (error) {
        handleApiError(error);
      }
    };

    if (employeeId) {
      fetchEmployeeData();
    }
  }, [employeeId]);

  const updateEmployeeData = async () => {
    await submitForm(`${SERVER_URL}/${employeeId}`, "PUT");
  };

  return (
    <>
      <h1>UPDATE EMPLOYEE DATA</h1>
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
