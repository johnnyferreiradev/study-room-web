import React, { useEffect, useRef } from 'react';

import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
} from './styles';

const Modal = ({
  children,
  className,
  id,
  onClose,
}) => {
  const modalContent = useRef(null);

  const clickAwayListener = (e) => {
    if (e.target.classList.contains('modal-on-blur')) {
      onClose();
    }
  };

  useEffect(() => {
    modalContent.current.style.opacity = 1;
  }, []);

  return (
    <ModalContainer onClick={(e) => clickAwayListener(e)} className={`modal-on-blur ${className}`} id={id}>
      <ModalContent className="modal-content" ref={modalContent}>
        <ModalHeader className="modal-header">
          <button type="button" onClick={() => onClose()}>X</button>
        </ModalHeader>
        <ModalBody className="modal-body">
          {children}
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
