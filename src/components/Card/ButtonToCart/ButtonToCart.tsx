import { addToCart, ProductSlice } from "@/src/store/cartSlice";
import { useAppDispatch } from "@/src/store/hooks";
import classNames from "classnames";
import { CartIcon } from "../../icons/CartIcon";

type ToCartType = ProductSlice & { className: string };

const ButtonToCart = ({
  id,
  title,
  price,
  discountedPrice,
  thumbnail,
  quantity,
  className,
}: ToCartType) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className={classNames(className)}
      onClick={() =>
        dispatch(addToCart({ id, title, price, discountedPrice, thumbnail, quantity }))
      }
    >
      <CartIcon />
    </button>
  );
};

export default ButtonToCart;
