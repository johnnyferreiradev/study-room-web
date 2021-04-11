/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { storeComment, deleteComment } from 'api/comments';

import { getAuthData } from 'services/auth';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import { Row, Column } from 'components/Grid';
// import { Button } from 'components/Buttons';
import ProfileIcon from 'components/ProfileIcon';
import Comments from 'components/Comments';
import StyledCommunicated from './styles';

function Communicated({
  communicatedId,
  owner,
  content,
  ownerAvatar,
  communicatedComments,
  classId,
  createdAt,
  // deadline,
}) {
  const dispatch = useDispatch();
  const { userId, userAvatar, userName } = getAuthData();

  const [comments, setComments] = useState(communicatedComments || []);
  const [sendLoading, setSendLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

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
    setDeleteLoading(true);
    deleteComment(commentId)
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

  return (
    <StyledCommunicated className="card">
      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex">
          <ProfileIcon profileImage={ownerAvatar} />
          <div className="homework-info flex">
            <h3>{owner}</h3>
            <p className="txt-primary">{moment(createdAt).format('DD/MM/YYYY HH:mm')}</p>
          </div>
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
        <Column desktop="12" tablet="12" mobile="12" className="flex j-c-between a-i-center mt-2 footer">
          <Comments
            comments={comments}
            onSend={addNewComment}
            onDelete={removeComment}
            sendLoading={sendLoading}
            deleteLoading={deleteLoading}
          />
        </Column>
      </Row>
    </StyledCommunicated>
  );
}

export default Communicated;
