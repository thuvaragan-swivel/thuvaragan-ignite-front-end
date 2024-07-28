// src/app/store/viewSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  view: 'table', // Default view
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    },
    resetView: (state) => {
      state.view = state.view === 'table' ? 'grid' : 'table';
    },
  },
});

export const { setView, resetView } = viewSlice.actions;
export default viewSlice.reducer;
