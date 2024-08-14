"use client";

import React from "react";
import { Form } from "react-bootstrap";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import Button from "../atoms/Button.jsx";
import Icon from "../atoms/Icon.jsx";
import EmployeeFormGroup from "../molecules/EmployeeFormGroup.jsx";
import { GENDER_OPTIONS, PLACEHOLDERS, FORM_MODES } from "../../config/constantsConfig.js";

// EmployeeForm component for adding/editing employee details.
const EmployeeForm = ({
  employee,
  setEmployee,
  handleSubmit,
  mode,
  errors,
}) => {
  const router = useRouter();

  const handleCancel = () => {
    router.push("/employee/list");
  };

  return (
    <div className="page-container">
      <Form className="employee-form">
        <EmployeeFormGroup
          controlId="formFirstName"
          label="First Name"
          type="text"
          placeholder={PLACEHOLDERS.firstName}
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
          placeholder={PLACEHOLDERS.lastName}
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
          placeholder={PLACEHOLDERS.emailAddress}
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
          placeholder={PLACEHOLDERS.phoneNumber}
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
          options={GENDER_OPTIONS}
        />
        {mode === FORM_MODES.EDIT && (
          <div>
            <br />
            Employee ID : <strong>{employee.employeeId}</strong>
          </div>
        )}
        <Button
          onClick={handleSubmit}
          variant="primary"
          type="button"
          className="mt-3 submit-btn"
        >
          <Icon name={mode === FORM_MODES.ADD ? "add" : "edit"} className="me-2" />
          {mode === FORM_MODES.ADD ? "Add Employee" : "Update Employee"}
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

// Defining PropTypes for the EmployeeForm component.
EmployeeForm.propTypes = {
  employee: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    emailAddress: PropTypes.string,
    phoneNumber: PropTypes.string,
    gender: PropTypes.string,
    employeeId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
  setEmployee: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(["add", "edit"]).isRequired,
  errors: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    emailAddress: PropTypes.string,
    phoneNumber: PropTypes.string,
    gender: PropTypes.string,
    employeeId: PropTypes.string,
  }).isRequired,
};

export default EmployeeForm;
