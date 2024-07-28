"use client";

import React from "react";
import { Table, Button, Image } from "react-bootstrap";
import Link from "next/link";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

// Function to get the appropriate image URL based on gender
const getPhotoUrl = (gender) => {
  return gender === "M" ? "/icons/male-grid.png" : "/icons/female-grid.png";
};

const EmployeeTable = ({ employees, handleShowModal }) => {
  return (
    <Table striped bordered hover>
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
        {employees.length > 0 ? employees.map((item, index) => {
          const { employeeId, firstName, lastName, emailAddress, phoneNumber, gender } = item;
          return (
            <tr key={index}>
              <td>
                <Image 
                  src={getPhotoUrl(gender)} 
                  alt={`${gender} icon`} 
                  style={{ width: "40px", height: "40px", objectFit: "cover" }} 
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
                  <Button className="me-2">
                    <FaEdit className="me-2" />
                    Edit
                  </Button>
                </Link>
                <Button onClick={() => handleShowModal(item)} className="me-2">
                  <FaTrashAlt className="me-2" />
                  Delete
                </Button>
              </td>
            </tr>
          );
        }) : (
          <tr>
            <td colSpan="8" className="text-center">Oops...<br />No Employees Found in the System.</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default EmployeeTable;
