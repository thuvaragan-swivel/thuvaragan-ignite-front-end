"use client";

import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Link from "next/link";
import GenderImage from "@/app/components/atoms/GenderImage";
import Button from "@/app/components/atoms/Button";
import Icon from "@/app/components/atoms/Icon";

const getGenderPhoto = (gender) => {
  return gender === "Male" ? "/icons/male-grid.png" : "/icons/female-grid.png";
};

const EmployeeGrid = ({ employees, handleShowModal }) => {
  return (
    <Row className="employee-grid">
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
            <Col key={index} sm={12} md={6} lg={4} className="mb-3">
              <Card className="employee-card">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title>
                      {firstName} {lastName}
                    </Card.Title>
                    <Card.Text>
                      <strong>Employee ID:</strong> {employeeId}
                      <br />
                      <strong>Email:</strong> {emailAddress}
                      <br />
                      <strong>Phone:</strong> {phoneNumber}
                      <br />
                      <strong>Gender:</strong> {gender}
                    </Card.Text>
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
                  </div>
                  <GenderImage
                    src={getGenderPhoto(gender)}
                    alt={`${gender} icon`}
                    className="employee-photo"
                  />
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <Col>
          <p className="text-center">
            Oops...
            <br />
            No Employees Found in the System.
          </p>
        </Col>
      )}
    </Row>
  );
};

export default EmployeeGrid;
