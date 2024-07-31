// pages/addEmployee.js
"use client";

// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import EmployeeForm from "@/app/components/EmployeeForm";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "react-bootstrap";
import useEmployeeForm from '@/app/hooks/useEmployeeForm';
import { API_SERVER_URL } from "@/app/utils/apiServerUrl";


const Page = () => {
  const initialEmployee = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    gender: "",
    employeeId: "",
  };

  const { employee, setEmployee, errors, submitForm } = useEmployeeForm(initialEmployee, 'add');

  const addEmployeeDetail = async () => {
    await submitForm(API_SERVER_URL, 'POST');
  };

  return (
    <>
    <div className="add-container">
      <Link href="/" passHref>
        <Button variant="secondary" className="mt-3 go-home-btn">
          <FaArrowLeft className="me-2" />
          Home
        </Button>
      </Link>
      {/* <h1>ADD EMPLOYEE DATA</h1> */}
      <EmployeeForm
        employee={employee}
        setEmployee={setEmployee}
        handleSubmit={addEmployeeDetail}
        mode="add"
        errors={errors}
      />
      </div>
    </>
  );
};

export default Page;
