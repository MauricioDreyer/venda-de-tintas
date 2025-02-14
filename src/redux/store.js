import { configureStore } from '@reduxjs/toolkit';
import pinturaReducer from './slices/pinturaSlice';

const store = configureStore({
  reducer: {
    pintura: pinturaReducer,
  },
});

export default store;