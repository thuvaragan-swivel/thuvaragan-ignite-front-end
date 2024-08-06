"use client";

import React from "react";
import Link from "next/link";
import Button from "@/app/components/atoms/Button";
import Icon from "@/app/components/atoms/Icon";
import SearchSortControls from "@/app/components/molecules/SearchSortControls";
import PropTypes from "prop-types";

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
