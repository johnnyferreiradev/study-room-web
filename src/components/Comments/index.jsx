import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { FaPaperPlane } from 'react-icons/fa';
import { uniqueId } from 'lodash';

import { Button } from 'components/Buttons';
import Comment from 'components/Comment';

import StyledComments from './styles';

function Comments() {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);

  const sendComment = () => {
    if (newComment === '') {
      return;
    }

    setComments([...comments, newComment]);
    setNewComment('');
  };

  const handleNewComment = (event) => {
    setNewComment(event.target.value);
  };

  return (
    <StyledComments>
      {comments.map((comment) => (
        <Comment key={uniqueId()} comment={comment} />
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
