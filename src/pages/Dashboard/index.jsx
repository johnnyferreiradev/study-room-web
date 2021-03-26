import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import showGlobalModal from 'store/actions/modal/showGlobalModal';

import { Container, Row } from 'components/Grid';
// import StudentClassCard from 'components/StudentClassCard';
import EmptyMessage from 'components/EmptyMessage';
import { Button } from 'components/Buttons';
import JoinAClass from 'components/JoinAClass';

import StyledDashboard from './styles';

function Dashboard() {
  const dispatch = useDispatch();

  const handleJoinAClassModal = () => {
    dispatch(showGlobalModal(
      <JoinAClass />,
    ));
  };

  return (
    <StyledDashboard>
      <Container>
        <Row>
          <EmptyMessage
            title="Não há turmas"
            description="Adicione uma nova turma inserindo o seu código"
            className="empty-class-list"
          >
            <Button theme="primary" className="new-class" onClick={handleJoinAClassModal}>
              <p>Nova Turma</p>
              <FaPlus />
            </Button>
          </EmptyMessage>

          {/* <StudentClassCard
            title="Turma 1"
            description="Descrição 1"
            notification={2}
          />
          <StudentClassCard
            title="Turma 2"
            description="Descrição 2"
          />
          <StudentClassCard
            title="Turma 3"
            description="Descrição 3"
          />
          <StudentClassCard
            title="Turma 4"
            description="Descrição 4"
          />
          <StudentClassCard
            title="Turma 5"
            description="Descrição 5"
          />
          <StudentClassCard
            title="Turma 6"
            description="Descrição 6"
          />
          <StudentClassCard
            title="Turma 7"
            description="Descrição 7"
            notification={3}
          /> */}
        </Row>
      </Container>
    </StyledDashboard>
  );
}

export default Dashboard;
