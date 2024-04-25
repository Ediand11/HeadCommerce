"use client";

import { clearCart, selectProducts } from "@/src/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { Button } from "../../../../components/Button";
import { ArrowBack } from "../../../../components/icons/ArrowBack";
import style from "./Cart.module.scss";
import Item from "./Item";

const Cart = () => {
  const cartItems = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  return (
    <div className={style.root}>
      <div className={style.cartItems}>
        {cartItems.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
      <div className={style.buttons}>
        <Button className={style.button} theme="primary" url="/">
          <ArrowBack />
          Back to shop
        </Button>

        <Button className={style.button} onClick={() => dispatch(clearCart())}>
          Remove all
        </Button>
      </div>
    </div>
  );
};

export default Cart;
