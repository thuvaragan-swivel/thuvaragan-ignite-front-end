// components/EmployeeForm.js
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { FaPlusCircle, FaEdit, FaTimesCircle } from "react-icons/fa";

const EmployeeForm = ({ employee, setEmployee, handleSubmit, mode, errors }) => {

  const router = useRouter();

  const handleCancel = () => {
    router.push('/employee/list'); // Adjust the path as needed
  };

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
          isInvalid={errors.firstName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.firstName}
        </Form.Control.Feedback>
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
          isInvalid={errors.lastName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.lastName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formEmailAddress" className="mt-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email address  ( format: username@domain.tld )"
          value={employee.emailAddress}
          onChange={(e) =>
            setEmployee({ ...employee, emailAddress: e.target.value })
          }
          required
          isInvalid={errors.emailAddress}
        />
        <Form.Control.Feedback type="invalid">
          {errors.emailAddress}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formPhoneNumber" className="mt-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone number  ( format: +94xxxxxxxxx )"
          value={employee.phoneNumber}
          onChange={(e) =>
            setEmployee({ ...employee, phoneNumber: e.target.value })
          }
          required
          isInvalid={errors.phoneNumber}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phoneNumber}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formGender" className="mt-3">
        <Form.Label>Gender</Form.Label>
        <Form.Control
          as="select"
          value={employee.gender}
          onChange={(e) => setEmployee({ ...employee, gender: e.target.value })}
          required
          isInvalid={errors.gender}
        >
          <option value="">Select</option>
          <option value="Male">M</option>
          <option value="Female">F</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.gender}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formEmployeeId" className="mt-3">
        <Form.Label>Employee ID</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter employee ID"
          value={employee.employeeId}
          onChange={(e) => {
            const value = e.target.value === "" ? "" : Number(e.target.value);
            setEmployee({ ...employee, employeeId: value });
          }}
          required
          isInvalid={errors.employeeId}
        />
        <Form.Control.Feedback type="invalid">
          {errors.employeeId}
        </Form.Control.Feedback>
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="button" className="mt-3">
        {mode === "add" ? <FaPlusCircle className="me-2" /> : <FaEdit className="me-2" />}
        {mode === "add" ? "Add Employee" : "Update Employee"}
      </Button>
      <Button onClick={handleCancel} variant="secondary" type="button" className="mt-3 ms-2">
        <FaTimesCircle className="me-2" />
        Cancel
      </Button>
    </Form>
  );
};

export default EmployeeForm;
