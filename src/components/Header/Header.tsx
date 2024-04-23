import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo-colored.svg";
import { Container } from "../Container";
import { AccountIcon } from "../icons/AccountIcon";
import { ShoppingBasketIcon } from "../icons/ShoppingBasketIcon";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.root}>
      <Container>
        <div className={style.inner}>
          <Link className={style.logo} href={"/"}>
            <Image src={logo} width={126} height={46} alt="logo" />
          </Link>

          <div className={style.link}>
            <AccountIcon />
            <span>Coin</span>
          </div>
          <Link className={style.link} href={"/cart"}>
            <ShoppingBasketIcon />
            <span>My Cart</span>
            <span className={style.count}>4</span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
