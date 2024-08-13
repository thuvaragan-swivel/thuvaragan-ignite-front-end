import { configureStore } from "@reduxjs/toolkit";
import employeeReducer, {
  setView,
  resetView,
  setSearch,
  setSort,
  setPagination,
} from "../../src/redux/employeeSlice.js";

describe("employeeSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { employee: employeeReducer } });
  });

  it("should handle initial state", () => {
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

    expect(store.getState().employee).toEqual(initialState);
  });

  it("should handle setView", () => {
    store.dispatch(setView("grid"));
    expect(store.getState().employee.view).toBe("grid");
  });

  it("should handle resetView", () => {
    store.dispatch(setView("grid"));
    store.dispatch(resetView());
    expect(store.getState().employee.view).toBe("table");

    store.dispatch(resetView());
    expect(store.getState().employee.view).toBe("grid");
  });

  it("should handle setSearch", () => {
    store.dispatch(setSearch("new search query"));
    const state = store.getState().employee;
    expect(state.search).toBe("new search query");
    expect(state.pagination.currentPage).toBe(1);
  });

  it("should handle setSort", () => {
    const sortConfig = { field: "name", order: "asc" };
    store.dispatch(setSort(sortConfig));
    const state = store.getState().employee;
    expect(state.sort).toEqual(sortConfig);
    expect(state.pagination.currentPage).toBe(1);
  });

  it("should handle setPagination", () => {
    const paginationConfig = {
      currentPage: 2,
      pageSize: 10,
      totalPages: 5,
    };
    store.dispatch(setPagination(paginationConfig));
    expect(store.getState().employee.pagination).toEqual(paginationConfig);
  });
});
