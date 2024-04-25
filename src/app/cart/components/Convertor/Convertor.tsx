"use client";

import { useAppDispatch } from "@/src/store/hooks";
import { addCoin } from "@/src/store/walletSlice";
import { useState } from "react";
import { Button } from "../../../../components/Button";
import style from "./Convertor.module.scss";

const Convertor = () => {
  const [convert, setConvert] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setConvert(inputValue);
  };

  const handleSubmit = () => {
    const convertedValue = parseInt(convert, 10);
    if (!isNaN(convertedValue)) {
      dispatch(addCoin(convertedValue));
      setConvert("");
    }
  };

  return (
    <>
      <h2 className={style.title}>Convertor Dollar to Coin</h2>
      <div className={style.form}>
        <input
          className={style.input}
          placeholder="1000"
          type="number"
          value={convert}
          onChange={handleChange}
        />
        <Button className={style.button} onClick={handleSubmit}>
          Apply
        </Button>
      </div>
    </>
  );
};

export default Convertor;
