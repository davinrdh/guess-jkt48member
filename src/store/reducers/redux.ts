import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeFilters: null,
  score: [],
};

export const reduxSlice = createSlice({
  name: "redux",
  initialState,
  reducers: {
    setActiveFilters: (state, { payload }) => {
      state.activeFilters = payload;
    },
    setScore: (state, { payload }) => {
      state.score.push(payload);
    },
  },
});

export const { setActiveFilters, setScore } = reduxSlice.actions;
