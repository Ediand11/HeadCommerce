import classNames from "classnames";
import Skeleton from "../Skeleton/Skeleton";
import style from "./Card.module.scss";

const CardSkeleton = () => {
  return (
    <div className={style.root}>
      <div className={classNames(style.image, style.image_skeleton)}>
        <Skeleton />
      </div>
      <div className={style.info}>
        <Skeleton className={classNames(style.title, style.title_skeleton)} />
        <Skeleton className={classNames(style.price, style.price_skeleton)} />
      </div>
    </div>
  );
};

export default CardSkeleton;
