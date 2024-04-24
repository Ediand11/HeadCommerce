import Image from "next/image";
import { CartIcon } from "../icons/CartIcon";
import { Product } from "../types";
import style from "./Card.module.scss";

const Card = ({
  title,
  price,
  discountedPrice,
  thumbnail,
}: Pick<Product, "title" | "price" | "discountedPrice" | "thumbnail">) => {
  return (
    <article className={style.root}>
      <div className={style.image}>
        <Image width={200} height={200} src={thumbnail} alt="item" />
      </div>
      <div className={style.info}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.price}>
          <div>
            <strong>${price}</strong>
            <span>${discountedPrice}</span>
          </div>
          <button className={style.cart}>
            <CartIcon />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
