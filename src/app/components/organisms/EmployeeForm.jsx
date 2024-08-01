"use client";

import React from "react";
import { Form } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Button from "@/app/components/atoms/Button";
import EmployeeFormGroup from "../molecules/EmployeeFormGroup";
import Icon from "@/app/components/atoms/Icon";

const EmployeeForm = ({
  employee,
  setEmployee,
  handleSubmit,
  mode,
  errors,
}) => {
  const router = useRouter();

  const handleCancel = () => {
    router.push("/employee/list"); // Adjust the path as needed
  };

  return (
    <div className="page-container">
      <Form className="employee-form">
        <EmployeeFormGroup
          controlId="formFirstName"
          label="First Name"
          type="text"
          placeholder="Enter first name"
          value={employee.firstName}
          onChange={(e) =>
            setEmployee({ ...employee, firstName: e.target.value })
          }
          isInvalid={errors.firstName}
          feedback={errors.firstName}
        />
        <EmployeeFormGroup
          controlId="formLastName"
          label="Last Name"
          type="text"
          placeholder="Enter last name"
          value={employee.lastName}
          onChange={(e) =>
            setEmployee({ ...employee, lastName: e.target.value })
          }
          isInvalid={errors.lastName}
          feedback={errors.lastName}
        />
        <EmployeeFormGroup
          controlId="formEmailAddress"
          label="Email Address"
          type="email"
          placeholder="Enter email address  ( format: username@domain.tld )"
          value={employee.emailAddress}
          onChange={(e) =>
            setEmployee({ ...employee, emailAddress: e.target.value })
          }
          isInvalid={errors.emailAddress}
          feedback={errors.emailAddress}
        />
        <EmployeeFormGroup
          controlId="formPhoneNumber"
          label="Phone Number"
          type="text"
          placeholder="Enter phone number  ( format: +94xxxxxxxxx )"
          value={employee.phoneNumber}
          onChange={(e) =>
            setEmployee({ ...employee, phoneNumber: e.target.value })
          }
          isInvalid={errors.phoneNumber}
          feedback={errors.phoneNumber}
        />
        <EmployeeFormGroup
          controlId="formGender"
          label="Gender"
          as="select"
          value={employee.gender}
          onChange={(e) => setEmployee({ ...employee, gender: e.target.value })}
          isInvalid={errors.gender}
          feedback={errors.gender}
          options={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
          ]}
        />
        <EmployeeFormGroup
          controlId="formEmployeeId"
          label="Employee ID"
          type="number"
          placeholder="Enter employee ID"
          value={employee.employeeId}
          onChange={(e) => {
            const value = e.target.value === "" ? "" : Number(e.target.value);
            setEmployee({ ...employee, employeeId: value });
          }}
          isInvalid={errors.employeeId}
          feedback={errors.employeeId}
        />
        <Button
          onClick={handleSubmit}
          variant="primary"
          type="button"
          className="mt-3 submit-btn"
        >
          <Icon name={mode === "add" ? "add" : "edit"} className="me-2" />
          {mode === "add" ? "Add Employee" : "Update Employee"}
        </Button>
        <Button
          onClick={handleCancel}
          variant="secondary"
          type="button"
          className="mt-3 cancel-btn ms-2"
        >
          <Icon name="cancel" className="me-2" />
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default EmployeeForm;
