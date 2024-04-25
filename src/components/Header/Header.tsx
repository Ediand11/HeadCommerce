import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo-colored.svg";
import { Container } from "../Container";
import { Dropdown } from "./Dropdown";
import style from "./Header.module.scss";
import { ShoppingBasket } from "./ShoppingBasket";

const Header = () => {
  return (
    <header className={style.root}>
      <Container>
        <div className={style.inner}>
          <Link className={style.logo} href={"/"}>
            <Image src={logo} width={126} height={46} alt="logo" />
          </Link>

          <div className={style.link}>
            <Dropdown />
          </div>
          <Link className={style.link} href={"/cart"}>
            <ShoppingBasket className={style.count} />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
