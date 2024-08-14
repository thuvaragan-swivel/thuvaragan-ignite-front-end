"use client";

import React from "react";
import PropTypes from "prop-types";
import SearchBox from "../atoms/SearchBox.jsx";
import SortDropdown from "../atoms/SortDropdown.jsx";
import { SORT_OPTIONS, PLACEHOLDERS } from "../../config/constantsConfig.js";

// SearchSortControls component for rendering search and sort controls.
const SearchSortControls = ({ search, onSearchChange, sort, onSortChange }) => {
  return (
    <div className="search-sort-container mb-3">
      <SearchBox
        type="text"
        placeholder={PLACEHOLDERS.searchBox}
        value={search}
        onChange={onSearchChange}
        className="mb-3"
      />
      <SortDropdown
        value={`${sort.field}-${sort.order}`}
        onChange={onSortChange}
        options={SORT_OPTIONS}
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
