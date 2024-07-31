"use client";

import React from "react";
import { Table, Button, Image } from "react-bootstrap";
import Link from "next/link";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const getPhotoUrl = (gender) => {
  return gender === "Male" ? "/icons/male-grid.png" : "/icons/female-grid.png";
};

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
          employees.map((item, index) => {
            const {
              employeeId,
              firstName,
              lastName,
              emailAddress,
              phoneNumber,
              gender,
            } = item;
            return (
              <tr key={index}>
                <td>
                  <Image
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
                      <FaEdit className="me-2" />
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="outline-danger"
                    onClick={() => handleShowModal(item)}
                    className="me-2"
                  >
                    <FaTrashAlt className="me-2" />
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

export default EmployeeTable;
