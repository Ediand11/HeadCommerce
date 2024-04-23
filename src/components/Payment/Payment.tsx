import style from "./Payment.module.scss";

const Payment = () => {
  return (
    <>
      <div className={style.check}>
        <p className={style.row}>
          Subtotal:
          <span>$1534.97</span>
        </p>
        <p className={style.row}>
          Discount:
          <span className={style.discount}>- $44.00</span>
        </p>
      </div>

      <div className={style.sum}>
        <h2 className={style.title}>
          Total: <span>$1357.97</span>
        </h2>
        <select className={style.currency}>
          <option value="dollar">Dollar</option>
          <option value="Coin">Coin</option>
        </select>
        <button className={style.button}>Checkout</button>
      </div>
    </>
  );
};

export default Payment;
