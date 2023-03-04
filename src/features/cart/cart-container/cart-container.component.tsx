import { Modal } from "@features/ui/modal/modal.component";
import style from "./cart-container.module.css";

type CartContainerProps = {
  isModalOpen: boolean;
  closeModal: () => void;
};

const CartContainer = function ({
  isModalOpen,
  closeModal,
}: CartContainerProps) {
  const cartItems = 3;

  if (!isModalOpen) return null;

  return (
    <Modal closeModal={closeModal}>
      <div>
        {cartItems}
        <div className={style["total"]}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={style["actions"]}>
          <button className={style["button--alt"]} onClick={closeModal}>
            Close
          </button>
          <button className={style["button"]}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export { CartContainer };
