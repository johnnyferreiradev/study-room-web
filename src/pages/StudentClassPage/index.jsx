import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCommunications } from 'api/communicated';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import EmptyMessage from 'components/EmptyMessage';
import NewCommunicated from 'components/NewCommunicated';
import Communicated from 'components/Communicated';
import Loading from 'components/Loading';

import StyledStudentClassPage from './styles';

function StudentClassPage({ match }) {
  const dispatch = useDispatch();

  const [communications, setCommunications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCommunications(match.params.id)
      .then((response) => {
        setCommunications(response.data);
      })
      .catch(() => {
        // const [error] = response.data;

        // if (error.field === 'classroom' && error.validation === 'not found') {
        //   dispatch(showSnackbar('Este E-mail já está sendo utilizado', 'danger'));
        // }

        dispatch(showSnackbar('Ocorreu um erro ao carregar o conteúdo do mural. Tente novamente mais tarde', 'danger'));
        setCommunications([]);
      }).finally(() => {
        setLoading(false);
      });
  }, [match.params.id, dispatch]);

  return (
    <StyledStudentClassPage>
      {loading && (
        <Loading type="bubbles" height={96} width={96} fluid color="#8CC8F3" />
      )}

      {!loading && (
        <>
          <NewCommunicated
            list={communications}
            onSend={setCommunications}
          />

          {communications.map((communicated) => (
            <Communicated
              key={communicated.id}
              owner={communicated.user.name}
              ownerAvatar={communicated.user.avatar_url}
              deadline={communicated.created_at}
              content={communicated.description}
              communicatedComments={communicated.commentsContents}
            />
          ))}
        </>
      )}

      {!loading && communications.length === 0 && (
        <EmptyMessage
          title="Nenhum comunicado publicado"
          description="Aguarde até a publicação de um novo comunicado ou crie um novo"
        />
      )}
    </StyledStudentClassPage>
  );
}

export default StudentClassPage;
