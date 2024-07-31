import { fetchData } from "./fetchApiUtils";

export const handleApiError = (error) => {
  let errorMessage;

  try {
    errorMessage = JSON.parse(error.message);
  } catch (e) {
    errorMessage = { general: "An unexpected error occurred" };
  }

  if (typeof errorMessage === "string") {
    // Return string error messages
    return { general: errorMessage }; // Return as a general error
  } else if (typeof errorMessage === "number") {
    // Return number error messages
    return { general: errorMessage.toString() }; // Return as a general error
  } else if (typeof errorMessage === "object") {
    // Return field-specific errors
    return errorMessage; // Return as field-specific errors
  } else {
    // Return a general error for unexpected cases
    return { general: "An error occurred" };
  }
};

// Function to format employee data
export const formatEmployeeData = (employee) => {
  return {
    ...employee,
    employeeId: employee.employeeId === "" ? null : Number(employee.employeeId),
  };
};

// Function to perform the API request
export const performApiRequest = async (url, method, employee) => {
  const data = await fetchData(url, method, employee);
  return data;
};
