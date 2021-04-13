import React from 'react';
import moment from 'moment';
// import { useHistory } from 'react-router-dom';
import { FaClipboardList } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { getCurrentDateAndHourInApiFormat, checkArrear } from 'services/time';

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
  createdAt,
}) {
  const history = useHistory();

  const currentTime = getCurrentDateAndHourInApiFormat();
  const isArrear = checkArrear(currentTime, moment(deadline).format('YYYY-MM-DD HH:mm:ss'));

  return (
    <StyledHomeworkCard className="card">
      <Row className="a-i-start">
        <Column desktop="10" tablet="10" mobile="10" className="flex">
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
            <p className="txt-primary">{moment(createdAt).format('DD/MM/YYYY HH:mm')}</p>
          </div>
        </Column>

        <Column desktop="2" tablet="2" mobile="2" className="flex j-c-end">
          <p className={isArrear ? 'txt-danger' : 'txt-primary'}>
            {isArrear ? 'Atrasada' : 'Pendente'}
          </p>
        </Column>
      </Row>

      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex j-c-between a-i-center mt-2 footer">
          <p className={isArrear ? 'txt-danger' : 'txt-primary'}>
            <span className="txt-secondary">Data de entrega: </span>
            {moment(deadline).format('DD/MM/YYYY HH:mm')}
          </p>
          <Button theme="link" onClick={() => history.push(`/class/${classId}/homework/${id}`)}>Ver atividade</Button>
        </Column>
      </Row>
    </StyledHomeworkCard>
  );
}

export default HomeworkCard;
