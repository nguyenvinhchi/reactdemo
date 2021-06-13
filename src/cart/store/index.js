import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
export { sendCartData, fetchCartData } from './cartActions';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer
  }
})

export const uiActions = uiSlice.actions;
export const cartActions = cartSlice.actions;

export default store;