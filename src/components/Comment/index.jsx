import React from 'react';
import { FaTrash } from 'react-icons/fa';
import moment from 'moment';

import { getAuthData } from 'services/auth';

import ProfileIcon from 'components/ProfileIcon';
import { Row, Column } from 'components/Grid';
import SuspendedMenu from 'components/SuspendedMenu';
import { Button } from 'components/Buttons';

import StyledComment from './styles';

function Comment({ comment, onDelete }) {
  const { userId } = getAuthData();

  return (
    <StyledComment>
      <Row className="a-i-center">
        <Column desktop="11" tablet="11" mobile="11" className="flex a-i-center">
          <ProfileIcon profileImage={comment.user.avatar_url} />
          <div className="profile">
            <h3>{comment.user.name}</h3>
            <p className="txt-primary">
              Há
              <span> </span>
              {moment(comment.created_at).fromNow(true)}
            </p>
          </div>
        </Column>

        <Column desktop="1" tablet="1" mobile="1" className="flex a-i-center j-c-end">
          {userId === `${comment.user.id}` && (
            <SuspendedMenu>
              <Button theme="link" className="remove-comment" onClick={() => onDelete(comment.id)}>
                <FaTrash />
                Excluir
              </Button>
            </SuspendedMenu>
          )}
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
