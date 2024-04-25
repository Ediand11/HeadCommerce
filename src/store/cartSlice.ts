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
    changeQuantity: (state, action: PayloadAction<{ id: number; operation: "up" | "down" }>) => {
      const { id, operation } = action.payload;
      const itemToModify = state.find((item) => item.id === id);

      if (itemToModify) {
        itemToModify.quantity += operation === "up" ? 1 : operation === "down" ? -1 : 0;
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

export const { addToCart, removeFromCart, changeQuantity, clearCart } = cartSlice.actions;

export const selectProducts = (state: RootState) => state.cartSlice;
export const selectProductLength = (state: RootState) => state.cartSlice.length;
export const selectTotalPrice = (state: RootState) =>
  state.cartSlice.reduce((acc, item) => (acc += item.price * item.quantity), 0);
export const selectDiscount = (state: RootState) =>
  state.cartSlice.reduce((acc, item) => (acc += item.discountedPrice * item.quantity), 0);

export default cartSlice.reducer;
