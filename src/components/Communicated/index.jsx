import React, { useState } from 'react';

import { Row, Column } from 'components/Grid';
// import { Button } from 'components/Buttons';
import ProfileIcon from 'components/ProfileIcon';
import Comments from 'components/Comments';

import StyledCommunicated from './styles';

function Communicated({
  owner,
  content,
  ownerAvatar,
  communicatedComments,
  // deadline,
}) {
  const [comments, setComments] = useState(communicatedComments || []);

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
            onSend={setComments}
          />
        </Column>
      </Row>
    </StyledCommunicated>
  );
}

export default Communicated;
