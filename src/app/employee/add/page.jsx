"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { API_SERVER_URL } from "../../../utils/apiServerUrl.js";
import useEmployeeForm from "../../../hooks/useEmployeeForm.js";
import Button from "../../../components/atoms/Button.jsx";
import Icon from "../../../components/atoms/Icon.jsx";
import EmployeeForm from "../../../components/organisms/EmployeeForm.jsx";
import { FORM_MODES } from "../../../config/constantsConfig.js";
import log from "../../../config/loggerConfig.js";

// Page component for adding a new employee.
const Page = () => {
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
    FORM_MODES.ADD
  );

  // Logging when the add employee component is mounted.
  useEffect(() => {
    log.info("Page Component Mounted for Adding a New Employee.\n");
  }, []);

  // Function to handle adding employee details.
  const addEmployeeDetail = async () => {
    await submitForm(API_SERVER_URL, "POST");
  };

  return (
    <div className="add-container">
      <Link href="/" passHref>
        <Button variant="secondary" className="mt-3 go-home-btn">
          <Icon name="arrowLeft" className="me-2" />
          Home
        </Button>
      </Link>
      <EmployeeForm
        employee={employee}
        setEmployee={setEmployee}
        handleSubmit={addEmployeeDetail}
        mode={FORM_MODES.ADD}
        errors={errors}
      />
    </div>
  );
};

export default Page;
