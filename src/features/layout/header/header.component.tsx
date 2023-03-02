import { Fragment } from "react";
import { HeaderCart } from "./header-cart/header-cart.component";
import mealsImage from "./../../../assets/images/meals.jpg";
import style from "./header.module.css";

const Header = function () {
  return (
    <Fragment>
      <header className={style["header"]}>
        <h1>ReactMeals</h1>
        <HeaderCart />
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export { Header };
