"use client";

import { Button } from "../Button";
import { ArrowBack } from "../icons/ArrowBack";
import style from "./Cart.module.scss";
import Item from "./Item";

const moc = [
  {
    id: 1,
    title: "Cart",
    price: 100100,
    imageUrl: "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg",
    count: 40,
  },
  {
    id: 2,
    title: "lorem Ipsum",
    price: 100,
    imageUrl: "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg",
    count: 1000,
  },
  {
    id: 3,
    title: "lorem lorem Ipsum lorem Ipsum Ipsum lorem Ipsum",
    price: 100,
    imageUrl: "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg",
    count: 4,
  },
  {
    id: 4,
    title: "Cart Ipsum lorem Ipsum Ipsum lorem Ipsum Ipsum lorem Ipsum Ipsum lorem Ipsum",
    price: 100100,
    imageUrl: "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg",
    count: 4,
  },
];

const Cart = () => {
  return (
    <>
      <div className={style.root}>
        {moc.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
      <div className={style.buttons}>
        <Button className={style.button} theme="primary" url="/">
          <ArrowBack />
          Back to shop
        </Button>

        <Button className={style.button} onClick={() => console.log("test")}>
          Remove all
        </Button>
      </div>
    </>
  );
};

export default Cart;
