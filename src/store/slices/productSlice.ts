import { createSlice } from '@reduxjs/toolkit';
import DUMMY_PRODUCTS from '../../data/products.json';

const initialState = {
  products: DUMMY_PRODUCTS,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
