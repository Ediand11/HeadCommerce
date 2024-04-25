"use client";

import { selectProductLength } from "@/src/store/cartSlice";
import { useAppSelector } from "@/src/store/hooks";
import classNames from "classnames";
import { ShoppingBasketIcon } from "../../icons/ShoppingBasketIcon";

const ShoppingBasket = ({ className }: { className?: string }) => {
  const count = useAppSelector(selectProductLength);

  return (
    <>
      <ShoppingBasketIcon />
      <span>My Cart</span>
      {count ? <span className={classNames(className)}>{count}</span> : ""}
    </>
  );
};

export default ShoppingBasket;
