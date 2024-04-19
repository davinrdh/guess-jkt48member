import { configureStore } from '@reduxjs/toolkit';
import { reduxSlice } from './reducers/redux';

const store = configureStore({
  reducer: {
    redux: reduxSlice.reducer,
  }
});

export default store;
