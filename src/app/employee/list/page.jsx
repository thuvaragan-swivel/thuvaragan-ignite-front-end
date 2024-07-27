"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { fetchData } from "@/utils/fetchApiUtils";

const SERVER_URL = process.env.NEXT_PUBLIC_API_BASE_URL_POST;


const Page = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState({ field: 'firstName', order: 'asc' });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 10,
    totalPages: 1,
  });

  const getEmployeeList = async () => {
    const queryParams = new URLSearchParams({
      search,
      sortField: sort.field,
      sortOrder: sort.order,
      page: pagination.currentPage,
      pageSize: pagination.pageSize,
    }).toString();
  
    console.log("Query Params:", queryParams);
    
    try {
      const data = await fetchData(`${SERVER_URL}?${queryParams}`);
      console.log("Fetched employees:", data);
      if (data && Array.isArray(data.data)) {
        setEmployees(data.data);
        setPagination({
          currentPage: data.pagination.currentPage,
          pageSize: data.pagination.pageSize,
          totalPages: data.pagination.totalPages,
        });
      } else {
        console.error("Expected data with employees array but received:", data);
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleDelete = async (employeeId) => {
    try {
      await fetchData(`${SERVER_URL}/${employeeId}`, "DELETE");
      getEmployeeList();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  useEffect(() => {
    getEmployeeList();
  }, [search, sort, pagination.currentPage]);
  
  return (
    <div>
      <h1>Employee List</h1>
      <Link href="/employee/add">
        <Button className="mb-3">Add New Employee</Button>
      </Link>
  
      {/* Search Box */}
      <Form.Control
        type="text"
        placeholder="Search by first name, last name, or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-3"
      />
  
      {/* Sort Dropdown */}
      <Form.Select
        value={`${sort.field}-${sort.order}`}
        onChange={(e) => {
          const [field, order] = e.target.value.split('-');
          setSort({ field, order });
        }}
        className="mb-3"
      >
        <option value="firstName-asc">Sort by First Name (Asc)</option>
        <option value="firstName-desc">Sort by First Name (Desc)</option>
        <option value="createdAt-asc">Sort by Created At (Asc)</option>
        <option value="createdAt-desc">Sort by Created At (Desc)</option>
      </Form.Select>
  
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Employee #</th>
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
                <td>{employeeId}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{emailAddress}</td>
                <td>{phoneNumber}</td>
                <td>{gender}</td>
                <td>
                  <Link href={`edit/${employeeId}`}>
                    <Button className="me-2">Edit</Button>
                  </Link>
                  <Button onClick={() => handleDelete(employeeId)} className="me-2">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          }) : (
            <tr>
              <td colSpan="7" className="text-center">No employees found</td>
            </tr>
          )}
        </tbody>
      </Table>
  
      {/* Pagination Controls */}
      <div className="d-flex justify-content-between">
        <Button
          disabled={pagination.currentPage === 1}
          onClick={() => setPagination((prev) => ({ ...prev, currentPage: prev.currentPage - 1 }))}
        >
          Previous
        </Button>
        <span>Page {pagination.currentPage} of {pagination.totalPages}</span>
        <Button
          disabled={pagination.currentPage === pagination.totalPages}
          onClick={() => setPagination((prev) => ({ ...prev, currentPage: prev.currentPage + 1 }))}
        >
          Next
        </Button>
      </div>
    </div>
  );
  
};

export default Page;
