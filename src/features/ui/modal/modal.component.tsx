import { Fragment, ReactNode } from "react";
import ReactDOM from "react-dom";
import style from "./modal.module.css";

type ModalProps = {
  children: ReactNode;
  closeModal: () => void;
};

const Backdrop = function ({ closeModal }: Pick<ModalProps, "closeModal">) {
  return <div className={style["backdrop"]} onClick={closeModal} />;
};

const ModalOverlay = function ({ children }: Pick<ModalProps, "children">) {
  return (
    <div className={style["modal"]}>
      <div className={style["content"]}>{children}</div>
    </div>
  );
};

const Modal = function ({ closeModal, children }: ModalProps) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        document.querySelector("#modal") as HTMLDivElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.querySelector("#modal") as HTMLDivElement
      )}
    </Fragment>
  );
};

export { Modal };
