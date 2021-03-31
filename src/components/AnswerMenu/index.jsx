import React, { useState, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import showGlobalModal from 'store/actions/modal/showGlobalModal';

import useOutsideEvent from 'hooks/useOutsideEvent';

import { Button } from 'components/Buttons';
import Card from 'components/Card';
import Upload from 'components/Upload';
import NewLink from 'components/NewLink';

import StyledAnswerMenu from './styles';

function AnswerMenu() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideEvent(wrapperRef, () => {
    setIsOpen(false);
  });

  const newUpload = () => {
    dispatch(showGlobalModal(
      <Upload />,
      true,
    ));
  };

  const newLink = () => {
    dispatch(showGlobalModal(
      <NewLink />,
      false,
    ));
  };

  return (
    <StyledAnswerMenu isOpen={isOpen} ref={wrapperRef}>
      <Button theme="secondary" className="add-button" fluid onClick={() => setIsOpen(!isOpen)}>
        <FaPlus />
        Adicionar
      </Button>

      <Card className="suspended-content">
        <Button theme="link" onClick={newUpload}>Arquivo</Button>
        <Button theme="link" onClick={newLink}>Link</Button>
        <Button theme="link" onClick={() => {}}>Texto</Button>
      </Card>
    </StyledAnswerMenu>
  );
}

export default AnswerMenu;
