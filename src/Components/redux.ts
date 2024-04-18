import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeFilters: null,
};

export const reduxSlice = createSlice({
  name: "redux",
  initialState,
  reducers: {
    setActiveFilters: (state, { payload }) => {
      state.activeFilters = payload;
    },
  },
});

export const { setActiveFilters } = reduxSlice.actions;
