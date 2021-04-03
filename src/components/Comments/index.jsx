import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { FaPaperPlane } from 'react-icons/fa';
import { uniqueId } from 'lodash';

import { getAuthData } from 'services/auth';
import { getCurrentDateAndHourInApiFormat } from 'services/time';

import { Button } from 'components/Buttons';
import Comment from 'components/Comment';
import Loading from 'components/Loading';

import StyledComments from './styles';

function Comments({ comments, onSend, loading }) {
  const { userName, userAvatar } = getAuthData();

  const [newComment, setNewComment] = useState('');

  const sendComment = () => {
    if (newComment === '') {
      return;
    }

    onSend({
      id: uniqueId(),
      comment: newComment,
      created_at: getCurrentDateAndHourInApiFormat(),
      user: {
        avatar_url: userAvatar,
        name: userName,
      },
    });
    setNewComment('');
  };

  const handleNewComment = (event) => {
    setNewComment(event.target.value);
  };

  return (
    <StyledComments>
      {comments.length > 0 && (
        <h3 className="txt-primary comments-title">Comentários</h3>
      )}

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}

      {loading && (
        <Loading type="bubbles" height={42} width={42} fluid color="#8CC8F3" />
      )}

      {!loading && (
        <form>
          <TextareaAutosize
            maxLength="255"
            placeholder="Adicione um comentário"
            value={newComment}
            onChange={(e) => handleNewComment(e)}
          />
          <Button theme="link" onClick={sendComment}>
            <FaPaperPlane />
          </Button>
        </form>
      )}
    </StyledComments>
  );
}

export default Comments;
