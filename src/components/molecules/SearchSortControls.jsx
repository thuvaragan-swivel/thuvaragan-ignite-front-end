"use client";

import React from "react";
import PropTypes from "prop-types";
import SearchBox from "../atoms/SearchBox.jsx";
import SortDropdown from "../atoms/SortDropdown.jsx";

// SearchSortControls component for rendering search and sort controls.
const SearchSortControls = ({ search, onSearchChange, sort, onSortChange }) => {
  const sortOptions = [
    { value: "", label: "Sort by" },
    { value: "firstName-asc", label: "First Name (Asc)" },
    { value: "firstName-desc", label: "First Name (Desc)" },
    { value: "createdAt-asc", label: "Created At (Asc)" },
    { value: "createdAt-desc", label: "Created At (Desc)" },
  ];

  return (
    <div className="search-sort-container mb-3">
      <SearchBox
        type="text"
        placeholder="Search by First Name, Last Name, or Email"
        value={search}
        onChange={onSearchChange}
        className="mb-3"
      />
      <SortDropdown
        value={`${sort.field}-${sort.order}`}
        onChange={onSortChange}
        options={sortOptions}
        className="mb-3"
      />
    </div>
  );
};

// Defining PropTypes for the SearchSortControls component.
SearchSortControls.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  sort: PropTypes.shape({
    field: PropTypes.string.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  }).isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default SearchSortControls;
