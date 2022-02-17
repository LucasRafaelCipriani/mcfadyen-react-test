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
    addItem(state: any, action: any) {
      const itemFound = state.cart.items.findIndex(
        (item: any) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (itemFound >= 0) {
        state.cart.items[itemFound].quantity++;
      } else {
        state.cart.items.push(action.payload);
      }

      state.cart.totalPrice = state.cart.items.reduce(
        (acc: number, cur: any) => {
          return acc + cur.price * cur.quantity;
        },
        0
      );

      state.cart.totalQuantity = state.cart.items.reduce(
        (acc: number, cur: any) => {
          return acc + cur.quantity;
        },
        0
      );
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
