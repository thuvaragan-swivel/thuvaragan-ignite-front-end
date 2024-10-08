"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { API_SERVER_URL } from "../../../utils/apiServerUrl.js";
import { fetchData } from "../../../utils/fetchApiUtils.js";
import {
  setSearch,
  setSort,
  setPagination,
} from "../../../redux/employeeSlice.js";
import LoadingSpinner from "../../../components/atoms/LoadingSpinner.jsx";
import CustomNavbar from "../../../components/organisms/CustomNavbar.jsx";
import EmployeeTable from "../../../components/organisms/EmployeeTable.jsx";
import EmployeeGrid from "../../../components/organisms/EmployeeGrid.jsx";
import ConfirmationModal from "../../../components/organisms/ConfirmationModal.jsx";
import PaginationControls from "../../../components/organisms/PaginationControls.jsx";
import AddSearchSortWrapper from "../../../components/organisms/AddSearchSortWrapper.jsx";
import { VIEW_OPTIONS } from "../../../config/constantsConfig.js";
import log from "../../../config/loggerConfig.js";

// Page component for displaying the list of employees.
const Page = () => {
  const dispatch = useDispatch();
  const { view, search, sort, pagination } = useSelector(
    (state) => state.employee
  );
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [hasInitialError, setHasInitialError] = useState(false);
  const [hasErrorOccurred, setHasErrorOccurred] = useState(false);

  // Function to fetch the employee list from the API.
  const getEmployeeList = async () => {
    const queryParams = new URLSearchParams({
      search,
      sort: sort.order,
      sortBy: sort.field,
      page: pagination.currentPage,
      limit: pagination.pageSize,
    }).toString();

    try {
      setLoading(true);
      log.info("Fetching Employee List with Query Params:", queryParams, "\n");
      const data = await fetchData(`${API_SERVER_URL}?${queryParams}`);
      if (data && Array.isArray(data.data)) {
        setEmployees(data.data);
        log.info("Employee List Fetched Successfully.\n");
        dispatch(
          setPagination({
            currentPage: data.pagination.currentPage,
            pageSize: data.pagination.pageSize,
            totalPages: data.pagination.totalPages,
          })
        );
        setHasErrorOccurred(false);
        if (hasInitialError) {
          setHasInitialError(false);
        }
      } else if (!hasErrorOccurred) {
        toast.error("Employee Data Unavailable.");
        setHasErrorOccurred(true);
      }
    } catch (error) {
      if (!hasInitialError) {
        toast.error(
          "Error Fetching the Employees. \nPlease Check your API Connection."
        );
        setHasInitialError(true);
      }
      setHasErrorOccurred(true);
    } finally {
      setLoading(false);
      if (isInitialLoad) {
        setIsInitialLoad(false);
      }
    }
  };

  // Function to handle employee deletion.
  const handleDelete = async () => {
    if (employeeToDelete) {
      try {
        log.info(
          "Attempting to Delete Employee with ID:",
          employeeToDelete.employeeId,
          "\n"
        );
        const response = await fetchData(
          `${API_SERVER_URL}/${employeeToDelete.employeeId}`,
          "DELETE"
        );
        response?.message
          ? toast.success(response.message)
          : toast.error("Failed to Delete the Employee!");
        getEmployeeList();
        handleCloseModal();
      } catch (error) {
        toast.error("An error occurred while Deleting the Employee!");
        log.error("Error Deleting Employee:", error, "\n");
      }
    }
  };

  // Function to show the confirmation modal.
  const handleShowModal = (employee) => {
    log.info("Opening Delete Confirmation Modal for Employee:", employee, "\n");
    setEmployeeToDelete(employee);
    setShowModal(true);
  };

  // Function to close the confirmation modal.
  const handleCloseModal = () => {
    log.info("Closing Delete Confirmation Modal.\n");
    setEmployeeToDelete(null);
    setShowModal(false);
  };

  // Fetch employee list whenever search, sort, or pagination changes.
  useEffect(() => {
    log.info(
      "Search, Sort, or Pagination Modified; Fetching Employee List...\n"
    );
    getEmployeeList();
  }, [search, sort, pagination.currentPage, pagination.pageSize]);

  // For the loading spinner to not show during view, search, sort, and page changes.
  let employeeContent;

  if (loading && isInitialLoad) {
    employeeContent = <LoadingSpinner />;
  } else if (view === VIEW_OPTIONS.TABLE) {
    employeeContent = (
      <EmployeeTable employees={employees} handleShowModal={handleShowModal} />
    );
    log.info("Displaying Employee List in Table View.\n");
  } else {
    employeeContent = (
      <EmployeeGrid employees={employees} handleShowModal={handleShowModal} />
    );
    log.info("Displaying Employee List in Grid View.\n");
  }

  return (
    <div className="center-container">
      <CustomNavbar />

      {/* Add New Employee, Search Field, Sort Dropdown */}
      <AddSearchSortWrapper
        search={search}
        onSearchChange={(e) => dispatch(setSearch(e.target.value))}
        sort={sort}
        onSortChange={(e) => {
          const [field, order] = e.target.value.split("-");
          dispatch(setSort({ field, order }));
        }}
        onAddEmployeeClick={() => {}}
      />

      {/* Employee List */}
      {employeeContent}

      {/* Pagination Controls */}
      <PaginationControls pagination={pagination} />

      {/* Confirmation Modal */}
      <ConfirmationModal
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirm={handleDelete}
        employee={employeeToDelete}
      />
    </div>
  );
};

export default Page;
