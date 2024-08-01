"use client";

import React from "react";
import { Modal } from "react-bootstrap";
import Button from "@/app/components/atoms/Button";
import Icon from "@/app/components/atoms/Icon";

const ConfirmationModal = ({ show, handleClose, handleConfirm, employee }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete the employee{" "}
        <strong>
          {employee ? `${employee.firstName} ${employee.lastName}` : ""}
        </strong>{" "}
        from the system?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleConfirm}>
          <Icon name="trash" className="me-2" />
          Confirm, Delete
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          <Icon name="times" className="me-2" />
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
