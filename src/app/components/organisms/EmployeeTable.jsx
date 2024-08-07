"use client";

import React from "react";
import { Table } from "react-bootstrap";
import Link from "next/link";
import GenderImage from "@/app/components/atoms/GenderImage";
import Button from "@/app/components/atoms/Button";
import Icon from "@/app/components/atoms/Icon";
import PropTypes from "prop-types";

// Helper function to get the appropriate gender photo URL.
const getPhotoUrl = (gender) => {
  return gender === "Male" ? "/icons/male-grid.png" : "/icons/female-grid.png";
};

// EmployeeTable component for displaying employees in a table layout.
const EmployeeTable = ({ employees, handleShowModal }) => {
  return (
    <Table striped bordered hover className="employee-table">
      <thead>
        <tr>
          <th>Photo</th>
          <th>Employee ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.length > 0 ? (
          employees.map((item) => {
            const {
              employeeId,
              firstName,
              lastName,
              emailAddress,
              phoneNumber,
              gender,
            } = item;
            return (
              <tr key={employeeId}>
                <td>
                  <GenderImage
                    src={getPhotoUrl(gender)}
                    alt={`${gender} icon`}
                    className="employee-photo"
                  />
                </td>
                <td>{employeeId}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{emailAddress}</td>
                <td>{phoneNumber}</td>
                <td>{gender}</td>
                <td>
                  <Link href={`edit/${employeeId}`} passHref>
                    <Button variant="outline-primary" className="me-2">
                      <Icon name="edit" className="me-2" />
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="outline-danger"
                    onClick={() => handleShowModal(item)}
                    className="me-2"
                  >
                    <Icon name="trash" className="me-2" />
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="8" className="text-center">
              Oops...
              <br />
              No Employees Found in the System.
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

// Defining PropTypes for the EmployeeTable component.
EmployeeTable.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      employeeId: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      emailAddress: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      gender: PropTypes.oneOf(["Male", "Female"]).isRequired,
    })
  ).isRequired,
  handleShowModal: PropTypes.func.isRequired,
};

export default EmployeeTable;
