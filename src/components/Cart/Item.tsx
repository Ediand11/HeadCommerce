import Image from "next/image";
import style from "./Cart.module.scss";

interface Item {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  count: number;
}

const Item = ({ imageUrl, title, price, count }: Item) => {
  return (
    <div className={style.item}>
      <div className={style.info}>
        <div className={style.image}>
          <Image src={imageUrl} alt="item" width={53} height={60} />
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
          <span>{count}</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
