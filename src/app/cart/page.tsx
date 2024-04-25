import { Cart } from "@/src/app/cart/components/Cart";
import Coupon from "@/src/app/cart/components/Coupon/Coupon";
import { Payment } from "@/src/app/cart/components/Payment";
import { Block } from "@/src/components/Block";
import { Container } from "@/src/components/Container";
import style from "./page.module.scss";

const page = () => {
  return (
    <Container>
      <div className={style.cart}>
        <h1>My cart</h1>

        <div className={style.cont}>
          <Block>
            <Cart />
          </Block>
          <div className={style.blocks}>
            <Block>
              <Coupon />
            </Block>
            <Block>
              <Payment />
            </Block>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
