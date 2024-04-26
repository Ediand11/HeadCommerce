import { throttle } from "@/src/helper/throttle";
import { addToCart, ProductSlice } from "@/src/store/cartSlice";
import { useAppDispatch } from "@/src/store/hooks";
import Image from "next/image";
import { CartIcon } from "../icons/CartIcon";
import style from "./Card.module.scss";

const Card = ({ id, title, price, discountedPrice, thumbnail, quantity }: ProductSlice) => {
  const dispatch = useAppDispatch();
  const throttledFunction = throttle(
    () => dispatch(addToCart({ id, title, price, discountedPrice, thumbnail, quantity })),
    1000
  );

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
          <button className={style.cart} onClick={throttledFunction}>
            <CartIcon />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
