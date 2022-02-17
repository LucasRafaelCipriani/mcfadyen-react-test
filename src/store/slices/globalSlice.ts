import { createSlice } from '@reduxjs/toolkit';
import DUMMY_CATEGORIES from '../../data/categories.json';

const initialState = {
  categories: DUMMY_CATEGORIES,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
});

export const globalReducer = globalSlice.reducer;
export const globalActions = globalSlice.actions;
