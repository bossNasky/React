import { Fragment } from "react";
import { AvailableMeals } from "../available-meals/available-meals.component";
import { MealsSummary } from "../meals-summary/meals-summary.component";

const MealsList = function () {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export { MealsList };
