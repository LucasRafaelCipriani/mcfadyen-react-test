import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './slices/cartSlice';
import { globalReducer } from './slices/globalSlice';
import { productReducer } from './slices/productSlice';

const store = configureStore({
  reducer: {
    productSlice: productReducer,
    cartSlice: cartReducer,
    globalSlice: globalReducer,
  },
});

export default store;
