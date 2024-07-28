import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const EmployeeGrid = ({ employees, handleShowModal }) => {
  return (
    <Row>
      {employees.length > 0 ? employees.map((item, index) => {
        const { employeeId, firstName, lastName, emailAddress, phoneNumber, gender } = item;
        return (
          <Col key={index} sm={12} md={6} lg={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{firstName} {lastName}</Card.Title>
                <Card.Text>
                  <strong>Employee ID:</strong> {employeeId}<br/>
                  <strong>Email:</strong> {emailAddress}<br/>
                  <strong>Phone:</strong> {phoneNumber}<br/>
                  <strong>Gender:</strong> {gender}
                </Card.Text>
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
              </Card.Body>
            </Card>
          </Col>
        );
      }) : (
        <Col>
          <p className="text-center">No employees found</p>
        </Col>
      )}
    </Row>
  );
};

export default EmployeeGrid;
