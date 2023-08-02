import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('https://run.mocky.io/v3/560eeb0c-85b7-40be-9f30-ed8878720f76');
  return response.data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        console.log("executed reject")
        state.loading = false;
        state.items = [];
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
