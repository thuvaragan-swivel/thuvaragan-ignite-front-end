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
    // Convert employeeId to a number if it's not an empty string
    const formattedEmployee = {
      ...employee,
      employeeId: employee.employeeId === "" ? null : Number(employee.employeeId),
    };

    try {
      const data = await fetchData("http://localhost:8000/api/employee", "POST", formattedEmployee);
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
      let errorMessage;

      try {
        errorMessage = JSON.parse(error.message);
      } catch (e) {
        errorMessage = { general: "An unexpected error occurred" };
      }

      if (typeof errorMessage === 'string') {
        toast.error(errorMessage);
      } else if (typeof errorMessage === 'number') {
        toast.error(errorMessage.toString());
      } else if (typeof errorMessage === 'object') {
        Object.entries(errorMessage).forEach(([field, msg]) => {
          toast.error(typeof msg === 'string' ? msg : msg.toString());
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
