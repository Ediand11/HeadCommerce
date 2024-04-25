import { ProductSlice } from "@/src/store/cartSlice";
import Image from "next/image";
import { ButtonToCart } from "./ButtonToCart";
import style from "./Card.module.scss";

const Card = ({ id, title, price, discountedPrice, thumbnail, quantity }: ProductSlice) => {
  const items = {
    id,
    title,
    price,
    discountedPrice,
    thumbnail,
    quantity,
  };
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
          <ButtonToCart {...items} className={style.cart} />
        </div>
      </div>
    </article>
  );
};

export default Card;
