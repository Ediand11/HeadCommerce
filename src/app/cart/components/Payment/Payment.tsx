"use client";

import { selectDiscount, selectTotalPrice } from "@/src/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { successPurchase } from "@/src/store/walletSlice";
import { useState } from "react";
import style from "./Payment.module.scss";

const Payment = () => {
  const totalPrice = useAppSelector(selectTotalPrice);
  const discountedPrice = useAppSelector(selectDiscount);
  const dispatch = useAppDispatch();

  const [currencySelected, setCurrencySelected] = useState<"coin" | "dollar">("dollar");
  const symbolCurrency = currencySelected === "coin" ? "C" : "$";

  const totalPriceWithSymbol = symbolCurrency + totalPrice;
  const discountedPriceWithSymbol = symbolCurrency + discountedPrice;
  const discountWithSymbol = symbolCurrency + (discountedPrice - totalPrice);

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrencySelected(event.target.value as "coin" | "dollar");
  };
  return (
    <>
      <div className={style.check}>
        <p className={style.row}>
          Subtotal:
          <span>{discountedPriceWithSymbol}</span>
        </p>
        <p className={style.row}>
          Discount:
          <span className={style.discount}>-{discountWithSymbol}</span>
        </p>
      </div>

      <div className={style.sum}>
        <h2 className={style.title}>
          Total: <span>{totalPriceWithSymbol}</span>
        </h2>
        <select className={style.currency} value={currencySelected} onChange={handleCurrencyChange}>
          <option value="dollar">Dollar</option>
          <option value="coin">Coin</option>
        </select>
        <button
          className={style.button}
          onClick={() =>
            dispatch(successPurchase({ price: totalPrice, currency: currencySelected }))
          }
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default Payment;
