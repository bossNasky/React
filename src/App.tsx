import { CartContainer } from "@features/cart/cart-container/cart-container.component";
import { Header } from "@features/layout";
import { MealsList } from "@features/meals";
import { Fragment, useState } from "react";

const App = function () {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = function () {
    console.log("close");
    setIsModalOpen(false);
  };
  const openModal = function () {
    setIsModalOpen(true);
  };

  return (
    <Fragment>
      <CartContainer isModalOpen={isModalOpen} closeModal={closeModal} />
      <Header openModal={openModal} />
      <main>
        <MealsList />
      </main>
    </Fragment>
  );
};

export { App };
