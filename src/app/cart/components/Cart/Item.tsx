import { changeQuantity, removeFromCart } from "@/src/store/cartSlice";
import { useAppDispatch } from "@/src/store/hooks";
import Image from "next/image";
import style from "./Cart.module.scss";

interface Item {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
}

const Item = ({ id, thumbnail, title, price, quantity }: Item) => {
  const dispatch = useAppDispatch();

  return (
    <div className={style.item}>
      <div className={style.info}>
        <div className={style.image}>
          <Image src={thumbnail} alt="item" width={53} height={60} />
        </div>
        <div>
          <h2 className={style.title}>{title}</h2>
          <button className={style.remove} onClick={() => dispatch(removeFromCart({ id }))}>
            Remove
          </button>
        </div>
      </div>
      <div className={style.detail}>
        <p className={style.price}>${price}</p>
        <div className={style.count}>
          <button
            onClick={() =>
              quantity === 1
                ? dispatch(removeFromCart({ id }))
                : dispatch(changeQuantity({ id, operation: "down" }))
            }
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => dispatch(changeQuantity({ id, operation: "up" }))}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
