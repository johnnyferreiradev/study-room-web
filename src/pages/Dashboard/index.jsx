import React, { useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import showGlobalModal from 'store/actions/modal/showGlobalModal';
// import setClasses from 'store/actions/classes/setClasses';

import { Container, Row } from 'components/Grid';
import StudentClassCard from 'components/StudentClassCard';
import EmptyMessage from 'components/EmptyMessage';
import { Button } from 'components/Buttons';
import JoinAClass from 'components/JoinAClass';

import StyledDashboard from './styles';

function Dashboard() {
  const dispatch = useDispatch();
  const { classes, loaded } = useSelector((state) => state.classes);

  const handleJoinAClassModal = () => {
    dispatch(showGlobalModal(
      <JoinAClass />,
    ));
  };

  useEffect(() => {
    if (!loaded) {
      // const mockClasses = [
      //   {
      //     id: 1,
      //     title: 'Turma 1',
      //     description: 'Descrição da turma 1',
      //   },
      // ];

      // dispatch(setClasses(mockClasses));
    }
  }, [dispatch, loaded]);

  return (
    <StyledDashboard>
      <Container>
        <Row>
          {classes.length === 0 && (
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
          )}

          {classes.map((classItem) => (
            <StudentClassCard
              key={classItem.id}
              id={classItem.id}
              title={classItem.title}
              description={classItem.description}
              // notification={0}
            />
          ))}

          {/*
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
