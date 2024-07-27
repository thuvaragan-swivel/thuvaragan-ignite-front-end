// "use client";

// import "bootstrap/dist/css/bootstrap.min.css";
// import { useParams, useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import EmployeeForm from "@/components/EmployeeForm";
// import { fetchData } from "@/utils/api";

// const Page = () => {
//   const router = useRouter();
//   const { employeeId } = useParams();

//   const [employee, setEmployee] = useState({
//     firstName: "",
//     lastName: "",
//     emailAddress: "",
//     phoneNumber: "",
//     gender: "",
//     employeeId: "",
//   });

//   const fetchEmployeeData = async (employeeId) => {
//     const data = await fetchData(`http://localhost:8000/api/employee/${employeeId}`);
//     setEmployee(data);
//   };

//   const updateEmployeeData = async () => {
//     const data = await fetchData(`http://localhost:8000/api/employee/${employeeId}`, "PUT", employee);

//     if (data.error) {
//       alert(data.error);
//     } else {
//       alert(data.message);
//       router.push("/employee/list");
//     }
//   };

//   useEffect(() => {
//     if (employeeId) {
//       fetchEmployeeData(employeeId);
//     }
//   }, [employeeId]);

//   return (
//     <>
//       <h1>UPDATE EMPLOYEE DATA</h1>
//       <EmployeeForm employee={employee} setEmployee={setEmployee} handleSubmit={updateEmployeeData} mode="edit" />
//     </>
//   );
// };

// export default Page;

"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import EmployeeForm from "@/components/EmployeeForm";
import { fetchData } from "@/utils/api";
import { toast } from "react-toastify";

const Page = () => {
  const router = useRouter();
  const { employeeId } = useParams();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    gender: "",
    employeeId: "",
  });

  const fetchEmployeeData = async (employeeId) => {
    const data = await fetchData(`http://localhost:8000/api/employee/${employeeId}`);
    setEmployee(data);
  };

  const updateEmployeeData = async () => {
    // Convert employeeId to a number if it's not an empty string
    const formattedEmployee = {
      ...employee,
      employeeId: employee.employeeId === "" ? null : Number(employee.employeeId),
    };

    
    try {
      const data = await fetchData(`http://localhost:8000/api/employee/${employeeId}`, "PUT", formattedEmployee);
      toast.success(data.message || "The Employee has been Updated Successfully.");
      router.push("/employee/list");
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

  useEffect(() => {
    if (employeeId) {
      fetchEmployeeData(employeeId);
    }
  }, [employeeId]);

  return (
    <>
      <h1>UPDATE EMPLOYEE DATA</h1>
      <EmployeeForm employee={employee} setEmployee={setEmployee} handleSubmit={updateEmployeeData} mode="edit" />
    </>
  );
};

export default Page;
