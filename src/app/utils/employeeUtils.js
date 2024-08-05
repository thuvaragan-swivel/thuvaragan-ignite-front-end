import { fetchData } from "./fetchApiUtils";

// Function to handle API errors and parse error messages.
export const handleApiError = (error) => {
  let errorMessage;

  try {
    errorMessage = JSON.parse(error.message); // Attempt to parse the error message as JSON.
  } catch (e) {
    errorMessage = { general: "An unexpected error occurred" }; // Fallback to a general error message if JSON parsing fails.
  }

  // Determining the type of errorMessage and return appropriate error object.
  if (typeof errorMessage === "string") {
    return { general: errorMessage };
  } else if (typeof errorMessage === "number") {
    return { general: errorMessage.toString() };
  } else if (typeof errorMessage === "object") {
    return errorMessage;
  } else {
    return { general: "An error occurred" };
  }
};

// Function to format employee data.
export const formatEmployeeData = (employee) => {
  return {
    ...employee,
    employeeId: employee.employeeId === "" ? null : Number(employee.employeeId),
  };
};

// Function to perform the API request.
export const performApiRequest = async (url, method, employee) => {
  const data = await fetchData(url, method, employee);
  return data;
};
