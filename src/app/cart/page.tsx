import { Block } from "@/src/components/Block";
import { Cart } from "@/src/components/Cart";
import { Container } from "@/src/components/Container";
import Coupon from "@/src/components/Coupon/Coupon";
import { Payment } from "@/src/components/Payment";
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
