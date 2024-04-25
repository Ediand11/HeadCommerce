"use client";

import classNames from "classnames";
import Link from "next/link";
import style from "./Button.module.scss";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary";
  url?: string;
}

const Button = ({ theme, url, ...props }: IButton) => {
  const cls = classNames(style.root, props.className, { [style[`root_${theme}`]]: theme });
  return (
    <>
      {url ? (
        <Link className={cls} href={url}>
          {props.children}
        </Link>
      ) : (
        <button disabled={props.disabled} className={cls} onClick={props.onClick}>
          {props.children}
        </button>
      )}
    </>
  );
};

export default Button;
