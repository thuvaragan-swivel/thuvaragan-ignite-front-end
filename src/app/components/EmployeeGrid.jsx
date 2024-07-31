// "use client";

// import React from "react";
// import { Card, Button, Row, Col, Image } from "react-bootstrap";
// import Link from "next/link";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";

// // Function to get the appropriate image based on gender
// const getGenderPhoto = (gender) => {
//   return gender === "Male" ? "/icons/male-grid.png" : "/icons/female-grid.png";
// };

// const EmployeeGrid = ({ employees, handleShowModal }) => {
//   return (
//     <Row>
//       {employees.length > 0 ? employees.map((item, index) => {
//         const { employeeId, firstName, lastName, emailAddress, phoneNumber, gender } = item;
//         return (
//           <Col key={index} sm={12} md={6} lg={4} className="mb-3">
//             <Card>
//               <Card.Body className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <Card.Title>{firstName} {lastName}</Card.Title>
//                   <Card.Text>
//                     <strong>Employee ID:</strong> {employeeId}<br/>
//                     <strong>Email:</strong> {emailAddress}<br/>
//                     <strong>Phone:</strong> {phoneNumber}<br/>
//                     <strong>Gender:</strong> {gender}
//                   </Card.Text>
//                   <Link href={`edit/${employeeId}`} passHref>
//                     <Button className="me-2">
//                       <FaEdit className="me-2" />
//                       Edit
//                     </Button>
//                   </Link>
//                   <Button onClick={() => handleShowModal(item)} className="me-2">
//                     <FaTrashAlt className="me-2" />
//                     Delete
//                   </Button>
//                 </div>
//                 <Image 
//                   src={getGenderPhoto(gender)} 
//                   alt={`${gender} icon`} 
//                   style={{ width: "150px", height: "150px", objectFit: "cover", marginLeft: "15px" }} 
//                 />
//               </Card.Body>
//             </Card>
//           </Col>
//         );
//       }) : (
//         <Col>
//           <p className="text-center">Oops...<br />No Employees Found in the System.</p>
//         </Col>
//       )}
//     </Row>
//   );
// };

// export default EmployeeGrid;




"use client";

import React from "react";
import { Card, Button, Row, Col, Image } from "react-bootstrap";
import Link from "next/link";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const getGenderPhoto = (gender) => {
  return gender === "Male" ? "/icons/male-grid.png" : "/icons/female-grid.png";
};

const EmployeeGrid = ({ employees, handleShowModal }) => {
  return (
    <Row className="employee-grid">
      {employees.length > 0 ? employees.map((item, index) => {
        const { employeeId, firstName, lastName, emailAddress, phoneNumber, gender } = item;
        return (
          <Col key={index} sm={12} md={6} lg={4} className="mb-3">
            <Card className="employee-card">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <Card.Title>{firstName} {lastName}</Card.Title>
                  <Card.Text>
                    <strong>Employee ID:</strong> {employeeId}<br/>
                    <strong>Email:</strong> {emailAddress}<br/>
                    <strong>Phone:</strong> {phoneNumber}<br/>
                    <strong>Gender:</strong> {gender}
                  </Card.Text>
                  <Link href={`edit/${employeeId}`} passHref>
                    <Button variant="outline-primary" className="me-2">
                      <FaEdit className="me-2" />
                      Edit
                    </Button>
                  </Link>
                  <Button variant="outline-danger" onClick={() => handleShowModal(item)} className="me-2">
                    <FaTrashAlt className="me-2" />
                    Delete
                  </Button>
                </div>
                <Image 
                  src={getGenderPhoto(gender)} 
                  alt={`${gender} icon`} 
                  className="employee-photo" 
                />
              </Card.Body>
            </Card>
          </Col>
        );
      }) : (
        <Col>
          <p className="text-center">Oops...<br />No Employees Found in the System.</p>
        </Col>
      )}
    </Row>
  );
};

export default EmployeeGrid;
