import Image from "next/image";
import style from "./Cart.module.scss";

interface Item {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
}

const Item = ({ thumbnail, title, price, quantity }: Item) => {
  return (
    <div className={style.item}>
      <div className={style.info}>
        <div className={style.image}>
          <Image src={thumbnail} alt="item" width={53} height={60} />
        </div>
        <div>
          <h2 className={style.title}>{title}</h2>
          <button className={style.remove}>Remove</button>
        </div>
      </div>
      <div className={style.detail}>
        <p className={style.price}>${price}</p>
        <div className={style.count}>
          <button>-</button>
          <span>{quantity}</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
