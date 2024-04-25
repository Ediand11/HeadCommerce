import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";
import { RootState } from "./store";

export type ProductSlice = Pick<
  Product,
  "id" | "title" | "price" | "discountedPrice" | "thumbnail" | "quantity"
>;

const initialState: ProductSlice[] = [];

export const cartSlice = createSlice({
  name: "cart",

  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductSlice>) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    },

    clearCart: (state) => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectProducts = (state: RootState) => state.cartSlice;
export const selectProductLength = (state: RootState) => state.cartSlice.length;

export default cartSlice.reducer;
