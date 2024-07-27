// pages/editEmployee.js

"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import EmployeeForm from "@/app/components/EmployeeForm";
import { handleApiError, formatEmployeeData, performApiRequest } from "@/app/utils/employeeUtils";
import { toast } from "react-toastify";

const SERVER_URL = process.env.NEXT_PUBLIC_API_BASE_URL_POST;

const Page = () => {
  const router = useRouter();
  const { employeeId } = useParams();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    gender: "",
    employeeId: "",
  });
  const [errors, setErrors] = useState({});

  const fetchEmployeeData = async (employeeId) => {
    try {
      const data = await performApiRequest(`${SERVER_URL}/${employeeId}`, "GET");
      setEmployee(data);
    } catch (error) {
      handleApiError(error);
    }
  };

  const updateEmployeeData = async () => {
    const formattedEmployee = formatEmployeeData(employee);

    try {
      const data = await performApiRequest(`${SERVER_URL}/${employeeId}`, "PUT", formattedEmployee);
      toast.success(data.message || "The Employee has been Updated Successfully.");
      router.push("/employee/list");
      setErrors({});
    } catch (error) {
      const errorMessages = handleApiError(error);
      setErrors(errorMessages);
    }
  };

  useEffect(() => {
    if (employeeId) {
      fetchEmployeeData(employeeId);
    }
  }, [employeeId]);

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
