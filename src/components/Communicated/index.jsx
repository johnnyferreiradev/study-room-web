/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { FaTrash } from 'react-icons/fa';

import { storeComment, deleteComment } from 'api/comments';

import { getAuthData } from 'services/auth';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import { Row, Column } from 'components/Grid';
// import { Button } from 'components/Buttons';
import ProfileIcon from 'components/ProfileIcon';
import Comments from 'components/Comments';
import MaterialList from 'components/MaterialList';
import SuspendedMenu from 'components/SuspendedMenu';
import { Button } from 'components/Buttons';
import Loading from 'components/Loading';

import StyledCommunicated from './styles';

function Communicated({
  communicatedId,
  owner,
  ownerAvatar,
  ownerId,
  content,
  communicatedComments,
  classId,
  createdAt,
  // deadline,
  materials,
  onDelete,
  deleteLoading,
}) {
  const dispatch = useDispatch();
  const { userId, userAvatar, userName } = getAuthData();

  const [comments, setComments] = useState(communicatedComments || []);
  const [sendLoading, setSendLoading] = useState(false);
  const [deleteCommentLoading, setDeleteCommentLoading] = useState(false);

  const addNewComment = (newComment) => {
    setSendLoading(true);
    storeComment(classId, communicatedId, newComment.comment)
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

  const removeComment = (commentId) => {
    setDeleteCommentLoading(true);
    deleteComment(commentId)
      .then(() => {
        setComments((lastComments) => lastComments
          .filter((comment) => comment.id !== commentId));
      })
      .catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao remover o comentário. Tente novamente', 'danger'));
      })
      .finally(() => {
        setDeleteCommentLoading(false);
      });
  };

  return (
    <StyledCommunicated className="card">
      <Row className="a-i-center">
        <Column desktop="10" tablet="10" mobile="10" className="flex">
          <ProfileIcon profileImage={ownerAvatar} />
          <div className="homework-info flex">
            <h3>{owner}</h3>
            <p className="txt-primary">{moment(createdAt).format('DD/MM/YYYY HH:mm')}</p>
          </div>
        </Column>
        <Column desktop="2" tablet="2" mobile="2" className="flex j-c-end a-i-center">
          {userId === `${ownerId}` && (
            !deleteLoading ? (
              <SuspendedMenu>
                <Button theme="link" className="remove-comment" onClick={() => onDelete(communicatedId)}>
                  <FaTrash />
                  Excluir
                </Button>
              </SuspendedMenu>
            ) : (
              <Loading type="bubbles" height={32} width={32} color="#8CC8F3" />
            )
          )}
        </Column>
      </Row>

      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex">
          <div className="content txt-secondary">
            <div
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </Column>
      </Row>

      <Row>
        <Column desktop="12" tablet="12" mobile="12">
          {materials && materials.length > 0 && (
            <MaterialList materials={materials} />
          )}
        </Column>
      </Row>

      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex j-c-between a-i-center mt-2 footer">
          <Comments
            comments={comments}
            onSend={addNewComment}
            onDelete={removeComment}
            sendLoading={sendLoading}
            deleteLoading={deleteCommentLoading}
          />
        </Column>
      </Row>
    </StyledCommunicated>
  );
}

export default Communicated;
