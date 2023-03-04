import { DUMMY_MEALS } from "./dummy_data";
import { MealsItem } from "../meals-item/meals-item.component";
import { Card } from "@features/ui";
import style from "./available-meals.module.css";

const AvailableMeals = function () {
  return (
    <section className={style["meals"]}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((DUMMY_MEAL) => (
            <MealsItem key={DUMMY_MEAL.id} {...DUMMY_MEAL} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export { AvailableMeals };
