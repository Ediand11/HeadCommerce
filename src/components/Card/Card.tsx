import Image from "next/image";
import { CartIcon } from "../icons/CartIcon";
import style from "./Card.module.scss";

const Card = () => {
  return (
    <article className={style.root}>
      <div className={style.image}>
        <Image
          width={200}
          height={200}
          src="https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
          alt="item"
        />
      </div>
      <div className={style.info}>
        <h2 className={style.title}>Spring and summer shoes</h2>
        <div className={style.price}>
          <div>
            <strong>$91119.50</strong>
            <span>$111111112811111111</span>
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
