import React from "react";
import style from "./Modal.module.scss";

interface Props {
  children: any;
  isOpen: any;
  onClose: any;
  onUpdate?: any;
}

const Modal = ({ children, onClose, isOpen, onUpdate }: Props) => {
  return (
    isOpen && (
      <div className={style.modal}>
        <div className="relative h-full w-full">
          <div className={style.modal__wrapper}>
            <div className={style.modal__content}>
              {children}

              <div className="flex gap-3">
                <button
                  type="button"
                  className={style.modal__close}
                  onClick={onClose}
                >
                  Close
                </button>

                <button
                  type="button"
                  className={style.modal__update}
                  onClick={onUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
