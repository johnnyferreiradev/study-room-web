import React from 'react';
import moment from 'moment';
// import { useHistory } from 'react-router-dom';
import { FaClipboardList } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { Row, Column } from 'components/Grid';
import { Button } from 'components/Buttons';
import ProfileIcon from 'components/ProfileIcon';

import StyledHomeworkCard from './styles';

function HomeworkCard({
  id,
  title,
  owner,
  deadline,
  classId,
}) {
  const history = useHistory();

  return (
    <StyledHomeworkCard className="card">
      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex">
          <ProfileIcon
            icon={(
              <FaClipboardList />
            )}
          />
          <div className="homework-info">
            <h3>{title}</h3>
            <p className="txt-secondary">
              <span>Por: </span>
              {owner}
            </p>
          </div>
        </Column>
      </Row>

      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex j-c-between a-i-center mt-2 footer">
          <p className="txt-primary">
            <span className="txt-secondary">Data de entrega: </span>
            {moment(deadline).format('MM/DD/YYYY HH:mm')}
          </p>
          <Button theme="link" onClick={() => history.push(`/class/${classId}/homework/${id}`)}>Ver atividade</Button>
        </Column>
      </Row>
    </StyledHomeworkCard>
  );
}

export default HomeworkCard;
