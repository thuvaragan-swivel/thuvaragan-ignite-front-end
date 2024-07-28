// pages/addEmployee.js

"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import EmployeeForm from "@/app/components/EmployeeForm";
import { handleApiError, formatEmployeeData, performApiRequest } from "@/app/utils/employeeUtils";
import { toast } from "react-toastify";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "react-bootstrap";

const SERVER_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Page = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    gender: "",
    employeeId: "",
  });
  const [errors, setErrors] = useState({});

  const addEmployeeDetail = async () => {
    const formattedEmployee = formatEmployeeData(employee);

    try {
      const data = await performApiRequest(SERVER_URL, "POST", formattedEmployee);
      toast.success(data.message || "A New Employee has been Successfully Added to the System.");
      // router.push("/employee/list");
      setEmployee({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        gender: "",
        employeeId: "",
      });
      setErrors({});
    } catch (error) {
      const errorMessages = handleApiError(error);
      setErrors(errorMessages);
    }
  };

  return (
    <>
    <Link href="/" passHref>
        <Button variant="secondary" className="mt-3">
          <FaArrowLeft className="me-2" />
          Home
        </Button>
      </Link>
      <h1>ADD EMPLOYEE DATA</h1>
      <EmployeeForm
        employee={employee}
        setEmployee={setEmployee}
        handleSubmit={addEmployeeDetail}
        mode="add"
        errors={errors}
      />
      
    </>
  );
};

export default Page;
