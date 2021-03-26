import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { getStudentClasses } from 'api/studentClasses';

import showGlobalModal from 'store/actions/modal/showGlobalModal';
import setClasses from 'store/actions/classes/setClasses';
import showSnackbar from 'store/actions/snackbar/showSnackbar';

import { Container, Row } from 'components/Grid';
import StudentClassCard from 'components/StudentClassCard';
import EmptyMessage from 'components/EmptyMessage';
import { Button } from 'components/Buttons';
import JoinAClass from 'components/JoinAClass';
import Loading from 'components/Loading';

import StyledDashboard from './styles';

function Dashboard() {
  const dispatch = useDispatch();
  const { classes, loaded } = useSelector((state) => state.classes);

  const [loading, setLoading] = useState(false);

  const handleJoinAClassModal = () => {
    dispatch(showGlobalModal(
      <JoinAClass />,
    ));
  };

  useEffect(() => {
    if (!loaded) {
      setLoading(true);
      getStudentClasses()
        .then((response) => {
          const { classrooms } = response.data;

          dispatch(setClasses(classrooms));
        })
        .catch(() => {
          dispatch(showSnackbar('Ocorreu um erro inesperado ao carregar as turmas', 'danger'));
          dispatch(setClasses([]));
        }).finally(() => {
          setLoading(false);
        });
    }
  }, [dispatch, loaded]);

  return (
    <StyledDashboard>
      <Container>
        <Row>
          {loading && (
            <Loading type="bubbles" height={96} width={96} fluid color="#8CC8F3" />
          )}

          {classes.length === 0 && !loading && (
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
              // notification={2}
            />
          ))}
        </Row>
      </Container>
    </StyledDashboard>
  );
}

export default Dashboard;
