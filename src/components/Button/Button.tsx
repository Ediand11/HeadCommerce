"use client";

import classNames from "classnames";
import Link from "next/link";
import { MouseEventHandler } from "react";
import style from "./Button.module.scss";

interface IButton {
  theme?: "primary";
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  url?: string;
  children: React.ReactNode;
}

const Button = ({ theme, className, url, disabled, onClick, children }: IButton) => {
  const cls = classNames(style.root, className, { [style[`root_${theme}`]]: theme });
  return (
    <>
      {url ? (
        <Link className={cls} href={url}>
          {children}
        </Link>
      ) : (
        <button disabled={disabled} className={cls} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
