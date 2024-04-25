"use client";

import { EmptyIcon } from "@/src/components/icons/EmptyIcon";
import { clearCart, selectProducts } from "@/src/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { Button } from "../../../../components/Button";
import { ArrowBack } from "../../../../components/icons/ArrowBackIcon";
import style from "./Cart.module.scss";
import Item from "./Item";

const Cart = () => {
  const cartItems = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  return (
    <div className={style.root}>
      <div className={style.items}>
        {cartItems.map((item) => (
          <Item {...item} key={item.id} />
        ))}
        {cartItems.length === 0 && (
          <div className={style.notFound}>
            <EmptyIcon />
            <p>Cart is empty</p>
          </div>
        )}
      </div>
      <div className={style.buttons}>
        <Button className={style.button} theme="primary" url="/">
          <ArrowBack />
          Back to shop
        </Button>
        {cartItems.length > 0 && (
          <Button className={style.button} onClick={() => dispatch(clearCart())}>
            Remove all
          </Button>
        )}
      </div>
    </div>
  );
};

export default Cart;
