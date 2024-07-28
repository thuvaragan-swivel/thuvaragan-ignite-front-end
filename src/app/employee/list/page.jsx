"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { fetchData } from "@/app/utils/fetchApiUtils";
import Navbar from "../../components/Navbar.jsx";
import EmployeeTable from "../../components/EmployeeTable.jsx";
import EmployeeGrid from "../../components/EmployeeGrid.jsx";
import { FaPlusCircle, FaArrowLeft, FaArrowRight, FaTrashAlt, FaTimesCircle } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { setView } from '@/app/redux/viewSlice';

const SERVER_URL = process.env.NEXT_PUBLIC_API_BASE_URL_POST;

const Page = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState({ field: '', order: '' });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 12,
    totalPages: 1,
  });
  const [showModal, setShowModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const view = useSelector((state) => state.view.view);
  const dispatch = useDispatch();

  const getEmployeeList = async () => {
    const queryParams = new URLSearchParams({
      search,
      sort: sort.order,
      sortBy: sort.field,
      page: pagination.currentPage,
      limit: pagination.pageSize,
    }).toString();

    try {
      const data = await fetchData(`${SERVER_URL}?${queryParams}`);
      if (data && Array.isArray(data.data)) {
        setEmployees(data.data);
        setPagination({
          currentPage: data.pagination.currentPage,
          pageSize: data.pagination.pageSize,
          totalPages: data.pagination.totalPages,
        });
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleDelete = async () => {
    if (employeeToDelete) {
      try {
        await fetchData(`${SERVER_URL}/${employeeToDelete.employeeId}`, "DELETE");
        getEmployeeList();
        handleCloseModal();
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    }
  };

  const handleShowModal = (employee) => {
    setEmployeeToDelete(employee);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setEmployeeToDelete(null);
    setShowModal(false);
  };

  useEffect(() => {
    getEmployeeList();
  }, [search, sort, pagination.currentPage, pagination.pageSize]);

  return (
    <div>
      <Navbar view={view} setView={(newView) => dispatch(setView(newView))} />

      <h1>Employee List</h1>
      <Link href="/employee/add" passHref>
        <Button className="mb-3">
          <FaPlusCircle className="me-2" />
          Add New Employee
        </Button>
      </Link>

      {/* Search Box */}
      <Form.Control
        type="text"
        placeholder="Search by first name, last name, or email"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPagination((prev) => ({ ...prev, currentPage: 1 })); // Reset to first page
        }}
        className="mb-3"
      />

      {/* Sort Dropdown */}
      <Form.Select
        value={`${sort.field}-${sort.order}`}
        onChange={(e) => {
          const [field, order] = e.target.value.split('-');
          setSort({ field, order });
          setPagination((prev) => ({ ...prev, currentPage: 1 })); // Reset to first page
        }}
        className="mb-3"
      >
        <option value="">Sort by</option>
        <option value="firstName-asc">First Name (Asc)</option>
        <option value="firstName-desc">First Name (Desc)</option>
        <option value="createdAt-asc">Created At (Asc)</option>
        <option value="createdAt-desc">Created At (Desc)</option>
      </Form.Select>

      {/* Employee List */}
      {view === 'table' ? (
        <EmployeeTable employees={employees} handleShowModal={handleShowModal} />
      ) : (
        <EmployeeGrid employees={employees} handleShowModal={handleShowModal} />
      )}

      {/* Pagination Controls */}
      <div className="d-flex justify-content-between">
        <Button
          disabled={pagination.currentPage === 1}
          onClick={() => setPagination((prev) => ({ ...prev, currentPage: prev.currentPage - 1 }))}
        >
          <FaArrowLeft className="me-2" />
          Previous
        </Button>
        <span>Page {pagination.currentPage} of {pagination.totalPages}</span>
        <Button
          disabled={pagination.currentPage === pagination.totalPages}
          onClick={() => setPagination((prev) => ({ ...prev, currentPage: prev.currentPage + 1 }))}
        >
          Next
          <FaArrowRight className="ms-2" />
        </Button>
      </div>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the employee <strong>{employeeToDelete ? `${employeeToDelete.firstName} ${employeeToDelete.lastName}` : ''}</strong> from the system?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            <FaTrashAlt className="me-2" />
            Confirm, Delete
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            <FaTimesCircle className="me-2" />
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Page;
