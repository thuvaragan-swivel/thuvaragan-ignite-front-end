"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import EmployeeForm from "@/components/EmployeeForm";
import { fetchData } from "@/utils/api";

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

  const fetchEmployeeData = async (employeeId) => {
    const data = await fetchData(`http://localhost:8000/api/employee/${employeeId}`);
    setEmployee(data);
  };

  const updateEmployeeData = async () => {
    const data = await fetchData(`http://localhost:8000/api/employee/${employeeId}`, "PUT", employee);

    if (data.error) {
      alert(data.error);
    } else {
      alert(data.message);
      router.push("/employee/list");
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
      <EmployeeForm employee={employee} setEmployee={setEmployee} handleSubmit={updateEmployeeData} />
    </>
  );
};

export default Page;
