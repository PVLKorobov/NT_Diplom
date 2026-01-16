import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

import styles from "./ModalContainer.module.scss";

const ModalContext = createContext(null);

const ModalContainer = ({ children, onClose }) => {
  if (children === null) return null;
  else {
    return createPortal(
      <div className={styles["modal-overlay"]} onClick={onClose}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>,
      document.body
    );
  }
};

const ModalProvider = ({ children }) => {
  const [modalContents, setModalContents] = useState(null);

  const openModal = (contents) => {
    setModalContents(contents);
  };

  const closeModal = () => {
    setModalContents(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ModalContainer onClose={closeModal}>{modalContents}</ModalContainer>
    </ModalContext.Provider>
  );
};

const useModal = () => {
  return useContext(ModalContext);
};

export { ModalProvider, useModal };
