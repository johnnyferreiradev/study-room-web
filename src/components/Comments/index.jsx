import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { FaPaperPlane } from 'react-icons/fa';
import { uniqueId } from 'lodash';

import { getAuthData } from 'services/auth';

import { Button } from 'components/Buttons';
import Comment from 'components/Comment';

import StyledComments from './styles';

function Comments({ comments, onSend }) {
  const { userName } = getAuthData();

  const [newComment, setNewComment] = useState('');

  const sendComment = () => {
    if (newComment === '') {
      return;
    }

    onSend([...comments, {
      id: uniqueId(),
      comment: newComment,
      created_at: 'Agora mesmo',
      user: {
        avatar_url: '',
        name: userName,
      },
    }]);
    setNewComment('');
  };

  const handleNewComment = (event) => {
    setNewComment(event.target.value);
  };

  return (
    <StyledComments>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}

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
    </StyledComments>
  );
}

export default Comments;
