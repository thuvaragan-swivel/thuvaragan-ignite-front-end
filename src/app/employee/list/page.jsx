"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { API_SERVER_URL } from "../../../utils/apiServerUrl.js";
import { fetchData } from "../../../utils/fetchApiUtils.js";
import { setSearch, setSort, setPagination } from "../../../redux/employeeSlice.js";
import LoadingSpinner from "../../../components/atoms/LoadingSpinner.jsx";
import CustomNavbar from "../../../components/organisms/CustomNavbar.jsx";
import EmployeeTable from "../../../components/organisms/EmployeeTable.jsx";
import EmployeeGrid from "../../../components/organisms/EmployeeGrid.jsx";
import ConfirmationModal from "../../../components/organisms/ConfirmationModal.jsx";
import PaginationControls from "../../../components/organisms/PaginationControls.jsx";
import AddSearchSortWrapper from "../../../components/organisms/AddSearchSortWrapper.jsx";

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
      const data = await fetchData(`${API_SERVER_URL}?${queryParams}`);
      if (data && Array.isArray(data.data)) {
        setEmployees(data.data);
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
      }
    }
  };

  // Function to show the confirmation modal.
  const handleShowModal = (employee) => {
    setEmployeeToDelete(employee);
    setShowModal(true);
  };

  // Function to close the confirmation modal.
  const handleCloseModal = () => {
    setEmployeeToDelete(null);
    setShowModal(false);
  };

  // Fetch employee list whenever search, sort, or pagination changes.
  useEffect(() => {
    getEmployeeList();
  }, [search, sort, pagination.currentPage, pagination.pageSize]);

  // For the loading spinner to not show during view, search, sort, and page changes.
  let employeeContent;

  if (loading && isInitialLoad) {
    employeeContent = <LoadingSpinner />;
  } else if (view === "table") {
    employeeContent = (
      <EmployeeTable employees={employees} handleShowModal={handleShowModal} />
    );
  } else {
    employeeContent = (
      <EmployeeGrid employees={employees} handleShowModal={handleShowModal} />
    );
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
