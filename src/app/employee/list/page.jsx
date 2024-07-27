
// "use client";

// import "bootstrap/dist/css/bootstrap.min.css";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { Button, Table, Form, Modal } from "react-bootstrap";
// import { fetchData } from "@/app/utils/fetchApiUtils";

// const SERVER_URL = process.env.NEXT_PUBLIC_API_BASE_URL_POST;

// const Page = () => {
//   const [employees, setEmployees] = useState([]);
//   const [search, setSearch] = useState('');
//   const [sort, setSort] = useState({ field: '', order: '' });
//   const [pagination, setPagination] = useState({
//     currentPage: 1,
//     pageSize: 10,
//     totalPages: 1,
//   });
//   const [showModal, setShowModal] = useState(false);
//   const [employeeToDelete, setEmployeeToDelete] = useState(null);

//   const getEmployeeList = async () => {
//     const queryParams = new URLSearchParams({
//       search,
//       sort: sort.order,
//       sortBy: sort.field,
//       page: pagination.currentPage,
//       limit: pagination.pageSize,
//     }).toString();
  
//     try {
//       const data = await fetchData(`${SERVER_URL}?${queryParams}`);
//       if (data && Array.isArray(data.data)) {
//         setEmployees(data.data);
//         setPagination({
//           currentPage: data.pagination.currentPage,
//           pageSize: data.pagination.pageSize,
//           totalPages: data.pagination.totalPages,
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching employees:", error);
//     }
//   };

//   const handleDelete = async () => {
//     if (employeeToDelete) {
//       try {
//         await fetchData(`${SERVER_URL}/${employeeToDelete.employeeId}`, "DELETE");
//         getEmployeeList();
//         handleCloseModal();
//       } catch (error) {
//         console.error("Error deleting employee:", error);
//       }
//     }
//   };

//   const handleShowModal = (employee) => {
//     setEmployeeToDelete(employee);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setEmployeeToDelete(null);
//     setShowModal(false);
//   };

//   useEffect(() => {
//     getEmployeeList();
//   }, [search, sort, pagination.currentPage]);

//   return (
//     <div>
//       <h1>Employee List</h1>
//       <Link href="/employee/add">
//         <Button className="mb-3">Add New Employee</Button>
//       </Link>
  
//       {/* Search Box */}
//       <Form.Control
//         type="text"
//         placeholder="Search by first name, last name, or email"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="mb-3"
//       />
  
//       {/* Sort Dropdown */}
//       <Form.Select
//         value={`${sort.field}-${sort.order}`}
//         onChange={(e) => {
//           const [field, order] = e.target.value.split('-');
//           setSort({ field, order });
//         }}
//         className="mb-3"
//       >
//         <option value="">Sort by</option>
//         <option value="firstName-asc">First Name (Asc)</option>
//         <option value="firstName-desc">First Name (Desc)</option>
//         <option value="createdAt-asc">Created At (Asc)</option>
//         <option value="createdAt-desc">Created At (Desc)</option>
//       </Form.Select>
  
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Employee #</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Phone Number</th>
//             <th>Gender</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.length > 0 ? employees.map((item, index) => {
//             const { employeeId, firstName, lastName, emailAddress, phoneNumber, gender } = item;
//             return (
//               <tr key={index}>
//                 <td>{employeeId}</td>
//                 <td>{firstName}</td>
//                 <td>{lastName}</td>
//                 <td>{emailAddress}</td>
//                 <td>{phoneNumber}</td>
//                 <td>{gender}</td>
//                 <td>
//                   <Link href={`edit/${employeeId}`}>
//                     <Button className="me-2">Edit</Button>
//                   </Link>
//                   <Button onClick={() => handleShowModal(item)} className="me-2">
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             );
//           }) : (
//             <tr>
//               <td colSpan="7" className="text-center">No employees found</td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
  
//       {/* Pagination Controls */}
//       <div className="d-flex justify-content-between">
//         <Button
//           disabled={pagination.currentPage === 1}
//           onClick={() => setPagination((prev) => ({ ...prev, currentPage: prev.currentPage - 1 }))}
//         >
//           Previous
//         </Button>
//         <span>Page {pagination.currentPage} of {pagination.totalPages}</span>
//         <Button
//           disabled={pagination.currentPage === pagination.totalPages}
//           onClick={() => setPagination((prev) => ({ ...prev, currentPage: prev.currentPage + 1 }))}
//         >
//           Next
//         </Button>
//       </div>

//       {/* Confirmation Modal */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Delete Employee</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to delete the employee <strong>{employeeToDelete ? `${employeeToDelete.firstName} ${employeeToDelete.lastName}` : ''}</strong> from the system?
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="danger" onClick={handleDelete}>
//             Confirm, Delete
//           </Button>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Cancel
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Page;





"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { fetchData } from "@/app/utils/fetchApiUtils";
import Navbar from "../../components/Navbar.jsx";
import EmployeeTable from "../../components/EmployeeTable.jsx";
import EmployeeGrid from "../../components/EmployeeGrid.jsx";

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
  const [view, setView] = useState('table');

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
  }, [search, sort, pagination.currentPage]);

  return (
    <div>
      <Navbar view={view} setView={setView} />

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
            Confirm, Delete
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Page;
