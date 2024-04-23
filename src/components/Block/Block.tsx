import React from "react";
import style from "./Block.module.scss";

export const Block = ({ children }: { children: React.ReactNode }) => (
  <div className={style.root}>{children}</div>
);
