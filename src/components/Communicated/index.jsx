import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { storeComment } from 'api/comments';

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
  // deadline,
}) {
  const dispatch = useDispatch();
  const { userAvatar, userName } = getAuthData();

  const [comments, setComments] = useState(communicatedComments || []);
  const [loading, setLoading] = useState(false);

  const addNewCommunicated = (newComment) => {
    setLoading(true);
    storeComment(classId, communicatedId, newComment.comment)
      .then((response) => {
        const comment = response.data;

        setComments(() => [...comments, {
          id: comment.id,
          comment: comment.comment,
          created_at: comment.created_at,
          user: {
            avatar_url: userAvatar,
            name: userName,
          },
        }]);
      })
      .catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao adicionar um comentário. Tente novamente.', 'danger'));
      }).finally(() => {
        setLoading(false);
      });
  };

  return (
    <StyledCommunicated className="card">
      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex">
          <ProfileIcon profileImage={ownerAvatar} />
          <div className="homework-info flex">
            <h3>{owner}</h3>
          </div>
        </Column>
      </Row>

      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex">
          <p className="content txt-secondary">
            {content}
          </p>
        </Column>
      </Row>

      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex j-c-between a-i-center mt-2 footer">
          <Comments
            comments={comments}
            onSend={addNewCommunicated}
            loading={loading}
          />
        </Column>
      </Row>
    </StyledCommunicated>
  );
}

export default Communicated;
