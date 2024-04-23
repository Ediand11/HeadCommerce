"use client";
import { useState } from "react";
import { AccountIcon } from "../../icons/AccountIcon";
import style from "./Dropdown.module.scss";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currencies = ["USD", "Coin"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCurrencySelection = (currency: string) => {
    console.log("Выбрана валюта:", currency);
    setIsOpen(false);
  };

  return (
    <div className={style.dropdown}>
      <div className={style.link} onClick={toggleDropdown}>
        <AccountIcon />
        <span>Wallet</span>
      </div>
      {isOpen && (
        <ul className={style.dropdownMenu}>
          {currencies.map((currency, index) => (
            <li key={index} onClick={() => handleCurrencySelection(currency)}>
              {currency}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
