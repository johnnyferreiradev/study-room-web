import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaColumns } from 'react-icons/fa';

import Card from 'components/Card';
import { Button } from 'components/Buttons';
import NotificationTag from 'components/NotificationTag';

import StyledStudentClassCard from './styles';

function StudentClassCard({
  id,
  image,
  title,
  description,
  notification,
}) {
  const history = useHistory();

  return (
    <StyledStudentClassCard>
      {notification && (
        <NotificationTag value={notification} />
      )}
      <Button theme="link" onClick={() => history.push(`/class/${id}`)}>
        <Card>
          <div className="class-image">
            {image ? (
              <img src={image} alt="Turma" />
            ) : (
              <FaColumns />
            )}
          </div>
          <div className="student-class-content">
            <h3 className="txt-dark">{title}</h3>
            <p className="txt-secondary">{description}</p>
          </div>
        </Card>
      </Button>
    </StyledStudentClassCard>
  );
}

export default StudentClassCard;
