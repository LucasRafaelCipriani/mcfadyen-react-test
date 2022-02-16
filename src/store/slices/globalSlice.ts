import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSize: '',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    saveSize(state, payload) {},
  },
});

export const globalReducer = globalSlice.reducer;
export const globalActions = globalSlice.actions;
