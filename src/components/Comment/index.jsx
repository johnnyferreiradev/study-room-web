import React from 'react';

import ProfileIcon from 'components/ProfileIcon';
import { Row, Column } from 'components/Grid';

import StyledComment from './styles';

function Comment({ comment }) {
  return (
    <StyledComment>
      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex a-i-center">
          <ProfileIcon />
          <div className="profile">
            <h3>{comment.owner.name}</h3>
            <p className="txt-primary">{comment.createdAt}</p>
          </div>
        </Column>
      </Row>

      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex">
          <p className="content txt-secondary">
            {comment.comment}
          </p>
        </Column>
      </Row>
    </StyledComment>
  );
}

export default Comment;
