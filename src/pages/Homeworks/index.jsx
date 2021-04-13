import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getHomeworks } from 'api/homeworks';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import HomeworkCard from 'components/HomeworkCard';
import EmptyMessage from 'components/EmptyMessage';
import Loading from 'components/Loading';

import StyledHomeworks from './styles';

function Homeworks({ match }) {
  const dispatch = useDispatch();

  const [homeworkList, setHomeworkList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getHomeworks(match.params.id)
      .then((response) => {
        setHomeworkList(response.data);
      })
      .catch(() => {
        // const [error] = response.data;

        // if (error.field === 'classroom' && error.validation === 'not found') {
        //   dispatch(showSnackbar('Este E-mail já está sendo utilizado', 'danger'));
        // }

        dispatch(showSnackbar('Ocorreu um erro ao carregar a lista de materiais. Tente novamente mais tarde', 'danger'));
        setHomeworkList([]);
      }).finally(() => {
        setLoading(false);
      });
  }, [match.params.id, dispatch]);

  return (
    <StyledHomeworks>
      {loading && (
        <Loading type="bubbles" height={96} width={96} fluid color="#8CC8F3" />
      )}

      {!loading && (
        <>
          {homeworkList.map((homework) => (
            <HomeworkCard
              key={homework.id}
              id={homework.id}
              title={homework.title}
              owner={homework.user.name}
              deadline={homework.homework.dateLimit}
              classId={match.params.id}
              createdAt={homework.created_at}
            />
          ))}
        </>
      )}

      {!loading && homeworkList.length === 0 && (
        <EmptyMessage
          title="Não há novas atividades"
          description="Aguarde até a publicação de uma nova atividade"
        />
      )}
    </StyledHomeworks>
  );
}

export default Homeworks;
