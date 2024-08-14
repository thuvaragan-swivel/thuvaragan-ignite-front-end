"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { API_SERVER_URL } from "../utils/apiServerUrl.js";
import {
  handleApiError,
  formatEmployeeData,
  performApiRequest,
} from "../utils/employeeUtils.js";
import EmployeeFormValidation from "../validation/employeeFormValidation.js";
import log from "../config/loggerConfig.js";

// Custom hook to manage employee form state and submission.
const useEmployeeForm = (initialEmployee, mode, employeeId = null) => {
  const [employee, setEmployee] = useState(initialEmployee);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  // Fetch employee data when in edit mode and employeeId is provided.
  useEffect(() => {
    if (mode === "edit" && employeeId) {
      const fetchEmployeeData = async () => {
        log.info(`Fetching Employee Data for ID: ${employeeId}\n`);
        try {
          const data = await performApiRequest(
            `${API_SERVER_URL}/${employeeId}`,
            "GET"
          );
          setEmployee(data);
        } catch (error) {
          const errorMessages = handleApiError(error);
          setErrors(errorMessages);
        }
      };

      fetchEmployeeData();
    }
  }, [employeeId, mode]);

  // Function to handle form submission.
  const submitForm = async (url, method) => {
    const formattedEmployee = formatEmployeeData(employee);

    // Validating the form data before submission.
    const validationErrors = await EmployeeFormValidation.validate(
      formattedEmployee
    );

    if (validationErrors) {
      setErrors(validationErrors);
      log.warn(`Form Validation Errors:\n${JSON.stringify(validationErrors, null, 2)}\n`);
      return;
    }

    // Performing the API call after the validation.
    try {
      const data = await performApiRequest(url, method, formattedEmployee);

      const successMessage =
        data.message ||
        (mode === "add"
          ? `A New Employee named ${data.data.firstName} ${data.data.lastName} has been Successfully Added to the System.`
          : "The Employee Data has been Successfully Updated.");

      toast.success(successMessage);
      log.info(`Form Submission is Successful: ${successMessage}\n`);

      // Redirect or reset form based on mode.
      if (mode === "add") {
        setEmployee(initialEmployee);
      } else {
        router.push("/employee/list");
      }
      setErrors({});
    } catch (error) {
      const errorMessages = handleApiError(error);
      setErrors(errorMessages);
      log.error(`Error Submitting Form:\n${error.message}\n`);
    }
  };

  return {
    employee,
    setEmployee,
    errors,
    submitForm,
  };
};

export default useEmployeeForm;
