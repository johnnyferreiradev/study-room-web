import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCommunications, deleteCommunicated } from 'api/communicated';

import showSnackbar from 'store/actions/snackbar/showSnackbar';
import showGlobalModal from 'store/actions/modal/showGlobalModal';
import hideGlobalModal from 'store/actions/modal/hideGlobalModal';

import EmptyMessage from 'components/EmptyMessage';
import NewCommunicated from 'components/NewCommunicated';
import Communicated from 'components/Communicated';
import Loading from 'components/Loading';
import ConfirmDelete from 'components/ConfirmDelete';

import StyledStudentClassPage from './styles';

function StudentClassPage({ match }) {
  const dispatch = useDispatch();

  const [communications, setCommunications] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [loadingNewCommunicated, setLoadingNewCommunicated] = useState(false);
  const [inFocus, setInFocus] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const addNewCommunicated = (communicated) => {
    // setLoadingNewCommunicated(true);

    // createCommunicated(match.params.id, {
    //   title: 'Comunicado',
    //   description: communicated.description,
    // })
    //   .then((response) => {
    //     communicated.id = response.data.id;

    //   })
    //   .catch(() => {
    //     dispatch(showSnackbar('Ocorreu um erro ao publicar o comunicado', 'danger'));
    //   })
    //   .finally(() => {
    //     setLoadingNewCommunicated(false);
    //   });

    setCommunications((lastCommunications) => [communicated, ...lastCommunications]);
    setInFocus(false);
  };

  const handleRemoveCommunicated = (communicationId) => {
    setDeleteLoading(true);
    dispatch(hideGlobalModal());

    deleteCommunicated(communicationId)
      .then(() => {
        setCommunications((lastCommunications) => lastCommunications
          .filter((communication) => communication.id !== communicationId));
      })
      .catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao remover o comunicado. Tente novamente', 'danger'));
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  };

  const removeCommunicated = (communicationId) => {
    dispatch(showGlobalModal(
      <ConfirmDelete
        title="Remover este comunicado?"
        subtitle="Ao realizar esta a????o os anexos adicionados tamb??m ser??o removidos"
        onDelete={() => handleRemoveCommunicated(communicationId)}
      />,
    ));
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
        //   dispatch(showSnackbar('Este E-mail j?? est?? sendo utilizado', 'danger'));
        // }

        dispatch(showSnackbar('Ocorreu um erro ao carregar o conte??do do mural. Tente novamente mais tarde', 'danger'));
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
            classId={match.params.id}
            onSend={addNewCommunicated}
            // sendLoading={loadingNewCommunicated}
            inFocus={inFocus}
            setInFocus={setInFocus}
          />

          {communications.map((communicated) => (
            <Communicated
              key={communicated.id}
              communicatedId={communicated.id}
              owner={communicated.user.name}
              ownerAvatar={communicated.user.avatar_url}
              ownerId={communicated.user.id}
              deadline={communicated.created_at}
              content={communicated.description}
              communicatedComments={communicated.commentsContents}
              classId={match.params.id}
              createdAt={communicated.created_at}
              materials={[...communicated.contentLinks, ...communicated.contentAttachments]}
              onDelete={removeCommunicated}
              deleteLoading={deleteLoading}
            />
          ))}
        </>
      )}

      {!loading && communications.length === 0 && (
        <EmptyMessage
          title="Nenhum comunicado publicado"
          description="Aguarde at?? a publica????o de um novo comunicado ou crie um novo"
        />
      )}
    </StyledStudentClassPage>
  );
}

export default StudentClassPage;
