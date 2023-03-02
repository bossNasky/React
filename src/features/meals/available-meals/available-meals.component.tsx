import { DUMMY_MEALS } from "./dummy_data";
import style from "./available-meals.module.css";

const AvailableMeals = function () {
  return (
    <section className={style["meals"]}>
      <ul>
        {DUMMY_MEALS.map((DUMMY_MEAL) => (
          <li>{DUMMY_MEAL.name}</li>
        ))}
      </ul>
    </section>
  );
};

export { AvailableMeals };
