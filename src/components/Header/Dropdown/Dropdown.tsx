"use client";
import { useAppSelector } from "@/src/store/hooks";
import { selectCoin, selectDollar } from "@/src/store/walletSlice";
import { useState } from "react";
import { AccountIcon } from "../../icons/AccountIcon";
import style from "./Dropdown.module.scss";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const walletCoin = useAppSelector(selectCoin);
  const walletDollar = useAppSelector(selectDollar);
  const currencies = [
    {
      currency: "Coin",
      wallet: walletCoin,
    },
    {
      currency: "USD",
      wallet: walletDollar,
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCurrencySelection = () => {
    setIsOpen(false);
  };

  return (
    <div className={style.dropdown} onMouseLeave={handleCurrencySelection}>
      <div className={style.link} onClick={toggleDropdown}>
        <AccountIcon />
        <span>Wallet</span>
      </div>
      {isOpen && (
        <ul className={style.dropdownMenu}>
          {currencies.map((currency, index) => (
            <li key={index} onClick={() => handleCurrencySelection()}>
              {`${currency.currency} ${currency.wallet}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
