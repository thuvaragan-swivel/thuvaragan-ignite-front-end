"use client";

import React from 'react';
import Link from 'next/link';
import Button from '@/app/components/atoms/Button';
import Icon from '@/app/components/atoms/Icon';
import SearchSortControls from '@/app/components/molecules/SearchSortControls';

const AddSearchSortWrapper = ({ search, onSearchChange, sort, onSortChange, onAddEmployeeClick }) => {
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

export default AddSearchSortWrapper;
