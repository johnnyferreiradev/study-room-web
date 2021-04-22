import React, { useState, useRef } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import showGlobalModal from 'store/actions/modal/showGlobalModal';

import useOutsideEvent from 'hooks/useOutsideEvent';

import { Button } from 'components/Buttons';
import Card from 'components/Card';
import ConfirmUnsubscribe from 'components/ConfirmUnsubscribe';

import StyledStudentClassMenu from './styles';

function StudentClassMenu({ classId }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideEvent(wrapperRef, () => {
    setIsOpen(false);
  });

  const goTo = (destination) => {
    setIsOpen(false);
    history.push(destination);
  };

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
        <Button theme="link" className="show-mobile" onClick={() => goTo(`/class/${classId}`)}>Mural</Button>
        <Button theme="link" className="show-mobile" onClick={() => goTo(`/class/${classId}/homeworks`)}>Atividades</Button>
        <Button theme="link" className="show-mobile" onClick={() => goTo(`/class/${classId}/materials`)}>Materiais</Button>
        <Button theme="link" className="show-mobile" onClick={() => goTo(`/class/${classId}/people`)}>Pessoas</Button>
        <Button theme="link" onClick={unsubscribe}>Sair da turma</Button>
      </Card>
    </StyledStudentClassMenu>
  );
}

export default StudentClassMenu;
