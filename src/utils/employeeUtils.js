// utils/employeeUtils.js

import { toast } from 'react-toastify';
import { fetchData } from './fetchApiUtils';

// Function to handle errors and display toasts
export const handleApiError = (error) => {
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
