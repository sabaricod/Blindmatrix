// store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';

// Combine reducers if you have more than one reducer
const rootReducer = {
  data: dataReducer,
};

// Create the Redux store using the root reducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;
