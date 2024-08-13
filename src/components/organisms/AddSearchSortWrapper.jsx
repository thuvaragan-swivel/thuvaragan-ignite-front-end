"use client";

import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Button from "../atoms/Button.jsx";
import Icon from "../atoms/Icon.jsx";
import SearchSortControls from "../molecules/SearchSortControls.jsx";

// AddSearchSortWrapper component that includes a button to add a new employee along with the search/sort controls.
const AddSearchSortWrapper = ({
  search,
  onSearchChange,
  sort,
  onSortChange,
  onAddEmployeeClick,
}) => {
  return (
    <div className="add-search-wrapper">
      <Link href="/employee/add" passHref className="add-employee-link">
        <Button className="mb-3 add-employee-btn" onClick={onAddEmployeeClick}>
          <Icon name="add" className="me-2" />
          Add New Employee
        </Button>
      </Link>
      <SearchSortControls
        search={search}
        onSearchChange={onSearchChange}
        sort={sort}
        onSortChange={onSortChange}
      />
    </div>
  );
};

// Defining PropTypes for the AddSearchSortWrapper component.
AddSearchSortWrapper.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  sort: PropTypes.shape({
    field: PropTypes.string.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  }).isRequired,
  onSortChange: PropTypes.func.isRequired,
  onAddEmployeeClick: PropTypes.func.isRequired,
};

export default AddSearchSortWrapper;
