import React, { useState, useRef } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import showGlobalModal from 'store/actions/modal/showGlobalModal';

import useOutsideEvent from 'hooks/useOutsideEvent';

import { Button } from 'components/Buttons';
import Card from 'components/Card';
import ConfirmUnsubscribe from 'components/ConfirmUnsubscribe';

import StyledStudentClassMenu from './styles';

function StudentClassMenu() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideEvent(wrapperRef, () => {
    setIsOpen(false);
  });

  const unsubscribe = () => {
    setIsOpen(false);
    dispatch(showGlobalModal(<ConfirmUnsubscribe />));
  };

  return (
    <StyledStudentClassMenu isOpen={isOpen} ref={wrapperRef}>
      <Button theme="link" onClick={() => setIsOpen(!isOpen)}>
        <FaEllipsisV />
      </Button>

      <Card className="suspended-content">
        <Button theme="link" onClick={unsubscribe}>Sair da turma</Button>
      </Card>
    </StyledStudentClassMenu>
  );
}

export default StudentClassMenu;
