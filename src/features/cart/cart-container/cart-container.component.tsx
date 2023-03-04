import style from "./cart-container.module.css";

type CartContainerProps = {
  closeModal: () => void;
};

const CartContainer = function ({ closeModal }: CartContainerProps) {
  const cartItems = 3;

  return (
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
  );
};

export { CartContainer };
