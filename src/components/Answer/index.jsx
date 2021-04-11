import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';

import { storePrivateComment, deletePrivateComment } from 'api/comments';

import { getCurrentDateAndHourInApiFormat, checkArrear } from 'services/time';
import { getAuthData } from 'services/auth';

import showSnackbar from 'store/actions/snackbar/showSnackbar';
import showGlobalModal from 'store/actions/modal/showGlobalModal';

import { Row, Column } from 'components/Grid';
import Card from 'components/Card';
import { Button } from 'components/Buttons';
import MaterialList from 'components/MaterialList';
import Comments from 'components/Comments';
import SuspendedMenu from 'components/SuspendedMenu';
import Upload from 'components/Upload';
import NewLink from 'components/NewLink';

import StyledAnswer from './styles';

function Answer({
  deadline,
  privateComments,
  classId,
  homeworkId,
}) {
  const dispatch = useDispatch();
  const currentTime = getCurrentDateAndHourInApiFormat();
  const isArrear = checkArrear(currentTime, moment(deadline).format('YYYY-MM-DD HH:mm:ss'));
  const { userId, userAvatar, userName } = getAuthData();

  // comments logic
  const [comments, setComments] = useState(privateComments || []);
  const [sendLoading, setSendLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const addNewComment = (newComment) => {
    setSendLoading(true);
    storePrivateComment(classId, homeworkId, newComment.comment)
      .then((response) => {
        const comment = response.data;

        setComments(() => [...comments, {
          id: comment.id,
          comment: comment.comment,
          created_at: comment.created_at,
          user: {
            id: userId,
            avatar_url: userAvatar,
            name: userName,
          },
        }]);
      })
      .catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao adicionar um comentário. Tente novamente.', 'danger'));
      }).finally(() => {
        setSendLoading(false);
      });
  };

  const removePrivateComment = (commentId) => {
    setDeleteLoading(true);
    deletePrivateComment(commentId)
      .then(() => {
        setComments((lastComments) => lastComments
          .filter((comment) => comment.id !== commentId));
      })
      .catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao remover o comentário. Tente novamente', 'danger'));
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  };

  // upload logic
  const newUpload = () => {
    dispatch(showGlobalModal(
      <Upload />,
      true,
    ));
  };

  const newLink = () => {
    dispatch(showGlobalModal(
      <NewLink />,
      false,
    ));
  };

  return (
    <StyledAnswer>
      <Card>
        <Row>
          <Column desktop="6" tablet="6" mobile="6" className="flex">
            <h3>Responder</h3>
          </Column>
          <Column desktop="6" tablet="6" mobile="6" className="flex j-c-end">
            <p className={isArrear ? 'txt-danger' : 'txt-primary'}>
              Pendente
            </p>
          </Column>
        </Row>
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex">
            <MaterialList />
          </Column>
        </Row>
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex">
            <SuspendedMenu
              openButton={(
                <Button theme="secondary" className="add-button" fluid>
                  <FaPlus />
                  Adicionar
                </Button>
              )}
            >
              <Button theme="link" onClick={newUpload}>Arquivo</Button>
              <Button theme="link" onClick={newLink}>Link</Button>
            </SuspendedMenu>
          </Column>
        </Row>
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex">
            <Button theme="primary" fluid>
              {isArrear ? 'Enviar com atraso' : 'Enviar'}
            </Button>
          </Column>
        </Row>
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex">
            <Comments
              comments={comments.sort((a, b) => {
                if (a.created_at > b.created_at) {
                  return 1;
                }

                if (a.created_at < b.created_at) {
                  return -1;
                }

                return 0;
              })}
              placeholder="Novo comentário para o professor"
              onSend={addNewComment}
              onDelete={removePrivateComment}
              sendLoading={sendLoading}
              deleteLoading={deleteLoading}
            />
          </Column>
        </Row>
      </Card>
    </StyledAnswer>
  );
}

export default Answer;
