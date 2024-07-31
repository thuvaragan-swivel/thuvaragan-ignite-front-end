import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: "table", // Default view
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
    setView: (state, action) => {
      state.view = action.payload;
    },
    resetView: (state) => {
      state.view = state.view === "table" ? "grid" : "table";
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.pagination.currentPage = 1; // Reset to first page
    },
    setSort: (state, action) => {
      state.sort = action.payload;
      state.pagination.currentPage = 1; // Reset to first page
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
  },
});

export const { setView, resetView, setSearch, setSort, setPagination } =
  employeeSlice.actions;
export default employeeSlice.reducer;
