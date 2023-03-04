import { CartContainer } from "@features/cart/cart-container/cart-container.component";
import { Header } from "@features/layout";
import { MealsList } from "@features/meals";
import { Modal } from "@features/ui/modal/modal.component";
import { Fragment, useState } from "react";

const App = function () {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = function () {
    setIsModalOpen(false);
  };
  const openModal = function () {
    setIsModalOpen(true);
  };

  return (
    <Fragment>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <CartContainer closeModal={closeModal} />
        </Modal>
      )}
      <Header openModal={openModal} />
      <main>
        <MealsList />
      </main>
    </Fragment>
  );
};

export { App };
