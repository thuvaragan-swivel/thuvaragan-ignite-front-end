import { createSlice } from "@reduxjs/toolkit";

// Default state values.
const initialState = {
  view: "table",
  search: "",
  sort: { field: "", order: "" },
  pagination: {
    currentPage: 1,
    pageSize: 12,
    totalPages: 1,
  },
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    // Set the view mode (table or grid).
    setView: (state, action) => {
      state.view = action.payload;
    },
    // Toggle between table and grid view.
    resetView: (state) => {
      state.view = state.view === "table" ? "grid" : "table";
    },
    // Update search query.
    setSearch: (state, action) => {
      state.search = action.payload;
      state.pagination.currentPage = 1;
    },
    // Update sort configuration.
    setSort: (state, action) => {
      state.sort = action.payload;
      state.pagination.currentPage = 1;
    },
    // Update pagination state.
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
  },
});

export const { setView, resetView, setSearch, setSort, setPagination } =
  employeeSlice.actions;
export default employeeSlice.reducer;
