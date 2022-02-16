import { createSlice } from '@reduxjs/toolkit';
import DUMMY_PRODUCTS from '../../data/products.json';

const initialState = {
  products: DUMMY_PRODUCTS,
  selectedProduct: null,
  selectedSKU: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    selectProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    selectSKU(state, action) {
      state.selectedSKU = action.payload;
    },
  },
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
