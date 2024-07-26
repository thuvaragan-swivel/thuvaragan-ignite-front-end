// "use client";

// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState } from "react";
// import EmployeeForm from "@/components/EmployeeForm";
// import { fetchData } from "@/utils/api";

// const Page = () => {
//   const [employee, setEmployee] = useState({
//     firstName: "",
//     lastName: "",
//     emailAddress: "",
//     phoneNumber: "",
//     gender: "",
//     employeeId: "",
//   });

//   const addEmployeeDetail = async () => {
//     const data = await fetchData("http://localhost:8000/api/employee", "POST", employee);

//     const { message, error } = data;
//     if (error) {
//       alert(error);
//     } else {
//       alert(message);
//       setEmployee({
//         firstName: "",
//         lastName: "",
//         emailAddress: "",
//         phoneNumber: "",
//         gender: "",
//         employeeId: "",
//       });
//     }
//   };

//   return (
//     <>
//       <h1>ADD EMPLOYEE DATA</h1>
//       <EmployeeForm employee={employee} setEmployee={setEmployee} handleSubmit={addEmployeeDetail} mode="add" />
//     </>
//   );
// };

// export default Page;


"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import EmployeeForm from "@/components/EmployeeForm";
import { fetchData } from "@/utils/api";
import { toast } from "react-toastify";

const Page = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    gender: "",
    employeeId: "",
  });

  const addEmployeeDetail = async () => {
    try {
      const data = await fetchData("http://localhost:8000/api/employee", "POST", employee);
      toast.success(data.message || "The Employee has been Added Successfully.");
      setEmployee({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        gender: "",
        employeeId: "",
      });
    } catch (error) {
      const errorMessage = JSON.parse(error.message);
      
      if (typeof errorMessage === 'string') {
        toast.error(errorMessage);
      } else if (typeof errorMessage === 'object') {
        Object.values(errorMessage).forEach((msg) => {
          toast.error(msg);
        });
      } else {
        toast.error("An error occurred");
      }
    }
  };

  return (
    <>
      <h1>ADD EMPLOYEE DATA</h1>
      <EmployeeForm employee={employee} setEmployee={setEmployee} handleSubmit={addEmployeeDetail} mode="add" />
    </>
  );
};

export default Page;
