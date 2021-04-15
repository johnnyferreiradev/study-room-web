import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCommunications, createCommunicated } from 'api/communicated';

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
  const [loadingNewCommunicated, setLoadingNewCommunicated] = useState(false);
  const [inFocus, setInFocus] = useState(false);

  const addNewCommunicated = (communicated) => {
    if (communicated.description === '') {
      dispatch(showSnackbar('A descrição do comunicado não pode ser vazia', 'danger'));
      return;
    }

    setLoadingNewCommunicated(true);
    createCommunicated(match.params.id, {
      title: 'Comunicado',
      description: communicated.description,
    })
      .then((response) => {
        communicated.id = response.data.id;

        setCommunications((lastCommunications) => [communicated, ...lastCommunications]);
        setInFocus(false);
      })
      .catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao publicar o comunicado', 'danger'));
      })
      .finally(() => {
        setLoadingNewCommunicated(false);
      });
  };

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
            onSend={addNewCommunicated}
            sendLoading={loadingNewCommunicated}
            inFocus={inFocus}
            setInFocus={setInFocus}
          />

          {communications.map((communicated) => (
            <Communicated
              key={communicated.id}
              communicatedId={communicated.id}
              owner={communicated.user.name}
              ownerAvatar={communicated.user.avatar_url}
              deadline={communicated.created_at}
              content={communicated.description}
              communicatedComments={communicated.commentsContents}
              classId={match.params.id}
              createdAt={communicated.created_at}
              materials={communicated.materials}
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
