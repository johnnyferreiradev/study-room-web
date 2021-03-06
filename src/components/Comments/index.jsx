import React, { useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { FaPaperPlane } from 'react-icons/fa';
import { uniqueId } from 'lodash';

import { getAuthData } from 'services/auth';
import { getCurrentDateAndHourInApiFormat } from 'services/time';

import { Button } from 'components/Buttons';
import Comment from 'components/Comment';
import Loading from 'components/Loading';
import { Row } from 'components/Grid';

import StyledComments from './styles';

function Comments({
  comments,
  onSend,
  onDelete,
  sendLoading,
  deleteLoading,
  placeholder,
}) {
  const { userId, userName, userAvatar } = getAuthData();

  const [newComment, setNewComment] = useState('');

  const [commentListView, setCommentListView] = useState(
    comments.length > 0 ? [comments[comments.length - 1]] : [],
  );

  const [showAll, setShowAll] = useState(false);

  const toggleCommentsView = () => {
    setShowAll((lastStatus) => {
      if (!lastStatus) {
        setCommentListView(comments);
        return true;
      }

      setCommentListView([comments[comments.length - 1]]);
      return false;
    });
  };

  const removeComment = (commentId) => {
    onDelete(commentId);
  };

  const sendComment = () => {
    if (newComment === '') {
      return;
    }

    onSend({
      id: `${uniqueId()}${Date.now()}`,
      comment: newComment,
      created_at: getCurrentDateAndHourInApiFormat(),
      user: {
        id: userId,
        avatar_url: userAvatar,
        name: userName,
      },
    });
    setNewComment('');
  };

  const handleNewComment = (event) => {
    setNewComment(event.target.value);
  };

  useEffect(() => {
    if (showAll) {
      setCommentListView(comments);
    } else {
      setCommentListView(
        comments.length > 0 ? [comments[comments.length - 1]] : [],
      );
    }
  }, [comments, showAll]);

  return (
    <StyledComments>
      <Row className="j-c-between a-i-center">
        {comments.length > 0 && (
          <h3 className="txt-primary comments-title">
            Coment??rios
            {comments.length > 1 && (
              <span>
                &nbsp;
                (
                {comments.length}
                )
              </span>
            )}
          </h3>
        )}

        {comments.length > 1 && (
          <Button theme="link" onClick={toggleCommentsView}>
            {showAll ? 'ver menos' : 'ver todos'}
          </Button>
        )}
      </Row>

      {commentListView.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={removeComment}
          deleteLoading={deleteLoading}
        />
      ))}

      {sendLoading && (
        <Loading type="bubbles" height={42} width={42} fluid color="#8CC8F3" />
      )}

      {!sendLoading && (
        <form>
          <TextareaAutosize
            maxLength="255"
            placeholder={placeholder || 'Adicione um coment??rio'}
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
