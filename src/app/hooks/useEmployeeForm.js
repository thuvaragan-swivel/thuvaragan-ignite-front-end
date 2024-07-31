// hooks/useEmployeeForm.js
import { useState, useEffect } from "react";
import { handleApiError, formatEmployeeData, performApiRequest } from "@/app/utils/employeeUtils";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { API_SERVER_URL } from "../utils/apiServerUrl";

const useEmployeeForm = (initialEmployee, mode, employeeId = null) => {
  const [employee, setEmployee] = useState(initialEmployee);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (mode === "edit" && employeeId) {
      const fetchEmployeeData = async () => {
        try {
          const data = await performApiRequest(`${API_SERVER_URL}/${employeeId}`, "GET");
          setEmployee(data);
        } catch (error) {
          const errorMessages = handleApiError(error);
          setErrors(errorMessages);
        }
      };

      fetchEmployeeData();
    }
  }, [employeeId, mode]);

  const submitForm = async (url, method) => {
    const formattedEmployee = formatEmployeeData(employee);

    try {
      const data = await performApiRequest(url, method, formattedEmployee);

      const successMessage =
        data.message ||
        (mode === "add"
          ? `A New Employee named ${data.data.firstName} ${data.data.lastName} has been Successfully Added to the System.`
          : "The Employee Data has been Successfully Updated.");

      toast.success(successMessage);

      if (mode === "add") {
        setEmployee(initialEmployee);
      } else {
        router.push("/employee/list");
      }
      setErrors({});
    } catch (error) {
      const errorMessages = handleApiError(error);
      setErrors(errorMessages);
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
