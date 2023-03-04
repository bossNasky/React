import { ReactNode } from "react";
import style from "./card.module.css";

type CardProps = {
  children: ReactNode;
};

const Card = function ({ children }: CardProps) {
  return <div className={style["card"]}>{children}</div>;
};

export { Card };
