import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface WalletState {
  coin: number;
  dollar: number;
}

const initialState: WalletState = {
  coin: 1000,
  dollar: 1000,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    purchase: (state, action: PayloadAction<{ currency: "coin" | "dollar"; price: number }>) => {
      const { currency, price } = action.payload;
      if (state[currency] < price) return;
      state[currency] -= price;
    },
    addCoin: (state, action: PayloadAction<number>) => {
      const amount = action.payload;
      if (state.dollar < 0) return;
      state.dollar -= amount;
      state.coin += amount;
    },
  },
});

export const { purchase, addCoin } = walletSlice.actions;

export const selectDollar = (state: RootState) => state.walletSlice.dollar;
export const selectCoin = (state: RootState) => state.walletSlice.coin;

export default walletSlice.reducer;
