"use client";

import { useAppDispatch } from "@/src/store/hooks";
import { addCoin } from "@/src/store/walletSlice";
import { useState } from "react";
import { Button } from "../../../../components/Button";
import style from "./Convertor.module.scss";

const Coupon = () => {
  const [convert, setConvert] = useState<number>(0);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const convertedValue = parseInt(inputValue, 10);

    setConvert(convertedValue);
  };

  return (
    <>
      <h2 className={style.title}>Convertor Dollar to Coin</h2>
      <div className={style.form}>
        <input className={style.input} type="number" value={convert} onChange={handleChange} />
        <Button
          className={style.button}
          onClick={() => {
            dispatch(addCoin(convert));
            setConvert(0);
          }}
        >
          Apply
        </Button>
      </div>
    </>
  );
};

export default Coupon;
