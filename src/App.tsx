import { Header } from "@features/layout";
import { MealsList } from "@features/meals";
import { Fragment } from "react";

const App = function () {
  return (
    <Fragment>
      <Header />
      <main>
        <MealsList />
      </main>
    </Fragment>
  );
};

export { App };
