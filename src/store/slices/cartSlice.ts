import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {},
    removeItem(state) {},
    updateItem(state, action) {},
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
