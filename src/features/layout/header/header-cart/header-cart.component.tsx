import { HeaderIcon } from "../header-icon/header-icon.component";
import style from "./header-cart.module.css";

const HeaderCart = function () {
  return (
    <button className={style["button"]}>
      <span className={style["icon"]}>
        <HeaderIcon />
      </span>
      <span>Your Cart</span>
      <span className={style["badge"]}>3</span>
    </button>
  );
};

export { HeaderCart };
