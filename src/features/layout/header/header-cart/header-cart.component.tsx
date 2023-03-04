import { HeaderIcon } from "../header-icon/header-icon.component";
import style from "./header-cart.module.css";

type HeaderCartProps = {
  openModal: () => void;
};

const HeaderCart = function ({ openModal }: HeaderCartProps) {
  return (
    <button className={style["button"]} onClick={openModal}>
      <span className={style["icon"]}>
        <HeaderIcon />
      </span>
      <span>Your Cart</span>
      <span className={style["badge"]}>3</span>
    </button>
  );
};

export { HeaderCart };
