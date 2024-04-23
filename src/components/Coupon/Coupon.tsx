import { Button } from "../Button";
import style from "./Coupon.module.scss";

const Coupon = () => {
  return (
    <>
      <h2 className={style.title}>Have coupon?</h2>
      <div className={style.form}>
        <input className={style.input} type="text" />
        <Button className={style.button}>Apply</Button>
      </div>
    </>
  );
};

export default Coupon;
