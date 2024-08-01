"use client";

import React from "react";
import Link from "next/link";
import useEmployeeForm from "@/app/hooks/useEmployeeForm";
import { API_SERVER_URL } from "@/app/utils/apiServerUrl";
import EmployeeForm from "@/app/components/organisms/EmployeeForm";
import Button from "@/app/components/atoms/Button";
import Icon from "@/app/components/atoms/Icon";

const Page = () => {
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
    "add"
  );

  const addEmployeeDetail = async () => {
    await submitForm(API_SERVER_URL, "POST");
  };

  return (
    <>
      <div className="add-container">
        <Link href="/" passHref>
          <Button variant="secondary" className="mt-3 go-home-btn">
            <Icon name="arrowLeft" className="me-2" />
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
