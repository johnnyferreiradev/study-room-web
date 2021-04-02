import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPeople } from 'api/people';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import PeopleSection from 'components/PeopleSection';
import EmptyMessage from 'components/EmptyMessage';
import Loading from 'components/Loading';

import StyledPeoplePage from './styles';

function PeoplePage({ match }) {
  const dispatch = useDispatch();

  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPeople(match.params.id)
      .then((response) => {
        const { users } = response.data;

        users.forEach((user) => {
          if (user.pivot.is_teacher) {
            setTeachers((lastTeachers) => [...lastTeachers, user]);
          } else {
            setStudents((lastStudents) => [...lastStudents, user]);
          }
        });
      })
      .catch(() => {
        // const [error] = response.data;

        // if (error.field === 'classroom' && error.validation === 'not found') {
        //   dispatch(showSnackbar('Este E-mail já está sendo utilizado', 'danger'));
        // }

        dispatch(showSnackbar('Ocorreu um erro ao carregar os participantes da turma. Tente novamente mais tarde', 'danger'));
        setStudents([]);
        setTeachers([]);
      }).finally(() => {
        setLoading(false);
      });
  }, [match.params.id, dispatch]);

  return (
    <StyledPeoplePage>
      {loading && (
        <Loading type="bubbles" height={96} width={96} fluid color="#8CC8F3" />
      )}

      {!loading && teachers.length > 0 && (
        <PeopleSection
          title="Professores"
          peopleList={teachers}
        />
      )}

      {!loading && students.length > 0 && (
        <PeopleSection
          title="Alunos"
          peopleList={students}
          quantity={students.length}
          quantityLabel="alunos"
        />
      )}

      {!loading && students.length === 0 && teachers.length === 0 && (
        <EmptyMessage
          title="Não há pessoas nesta turma"
        />
      )}
    </StyledPeoplePage>
  );
}

export default PeoplePage;
