// components/EmployeeForm.js

"use client";

import React from "react";
import { Button, Form } from "react-bootstrap";

const EmployeeForm = ({ employee, setEmployee, handleSubmit }) => {
  return (
    <Form>
      <Form.Group controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          value={employee.firstName}
          onChange={(e) =>
            setEmployee({ ...employee, firstName: e.target.value })
          }
          required
        />
      </Form.Group>
      <Form.Group controlId="formLastName" className="mt-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          value={employee.lastName}
          onChange={(e) =>
            setEmployee({ ...employee, lastName: e.target.value })
          }
          required
        />
      </Form.Group>
      <Form.Group controlId="formEmailAddress" className="mt-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email address"
          value={employee.emailAddress}
          onChange={(e) =>
            setEmployee({ ...employee, emailAddress: e.target.value })
          }
          required
        />
      </Form.Group>
      <Form.Group controlId="formPhoneNumber" className="mt-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone number"
          value={employee.phoneNumber}
          onChange={(e) =>
            setEmployee({ ...employee, phoneNumber: e.target.value })
          }
          required
        />
      </Form.Group>
      <Form.Group controlId="formGender" className="mt-3">
        <Form.Label>Gender</Form.Label>
        <Form.Control
          as="select"
          value={employee.gender}
          onChange={(e) => setEmployee({ ...employee, gender: e.target.value })}
          required
        >
          <option value="">Select</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formEmployeeId" className="mt-3">
        <Form.Label>Employee ID</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter employee ID"
          value={employee.employeeId}
          onChange={(e) =>
            setEmployee({ ...employee, employeeId: e.target.value })
          }
          required
        />
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="button" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default EmployeeForm;
