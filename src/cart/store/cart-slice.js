import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const existingItem = state.items.find(
        (it) => it.productId === action.payload.productId
      );
      const product = action.payload;

      if (!existingItem) {
        state.items.push({
          productId: product.productId,
          productName: product.productName,
          price: product.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity += 1;
      }
      state.totalQuantity += 1;
      state.changed = true;
    },
    removeItemFromCart(state, action) {
      const existingItem = state.items.find(
        (it) => it.productId === action.payload.productId
      );
      const product = action.payload;
      if (!existingItem) {
        throw Error("Item not exist to remove");
      }
      if (!existingItem) return;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (it) => it.productId !== product.productId
        );
      } else {
        existingItem.quantity -= 1;
      }
      state.totalQuantity -= 1;
      state.changed = true;
    },
  },
});

export default cartSlice;
