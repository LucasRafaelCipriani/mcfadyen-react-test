import { createSlice } from '@reduxjs/toolkit';
import DUMMY_CATEGORIES from '../../data/categories.json';

const initialState = {
  categories: DUMMY_CATEGORIES,
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
