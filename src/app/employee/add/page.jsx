"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import EmployeeForm from "@/components/EmployeeForm";
import { fetchData } from "@/utils/api";

const Page = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    gender: "",
    employeeId: "",
  });

  const addEmployeeDetail = async () => {
    const data = await fetchData("http://localhost:8000/api/employee", "POST", employee);

    const { message, error } = data;
    if (error) {
      alert(error);
    } else {
      alert(message);
      setEmployee({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        gender: "",
        employeeId: "",
      });
    }
  };

  return (
    <>
      <h1>ADD EMPLOYEE DATA</h1>
      <EmployeeForm employee={employee} setEmployee={setEmployee} handleSubmit={addEmployeeDetail} mode="add" />
    </>
  );
};

export default Page;
