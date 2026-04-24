import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (item) item.quantity += 1;
    },

    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;