import React from 'react';
import { FaColumns } from 'react-icons/fa';

import Card from 'components/Card';
import { Button } from 'components/Buttons';
import NotificationTag from 'components/NotificationTag';

import StyledStudentClassCard from './styles';

function StudentClassCard({
  image,
  title,
  description,
  notification,
}) {
  return (
    <StyledStudentClassCard>
      {notification && (
        <NotificationTag value={notification} />
      )}
      <Button theme="link">
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
