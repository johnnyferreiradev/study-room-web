import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

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
  large,
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
      <ModalContent className="modal-content" ref={modalContent} large={large}>
        <ModalHeader className="modal-header">
          <button type="button" onClick={() => onClose()}>
            <FaTimes />
          </button>
        </ModalHeader>
        <ModalBody className="modal-body">
          {children}
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
