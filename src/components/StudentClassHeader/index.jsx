import React from 'react';
import { FaColumns } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { Row, Column } from 'components/Grid';
import { Button } from 'components/Buttons';
import StudentClassMenu from 'components/StudentClassMenu';

import StyledStudentClassHeader from './styles';

function StudentClassHeader({ classId }) {
  const history = useHistory();

  return (
    <StyledStudentClassHeader>
      <Row>
        <Column desktop="8" tablet="8" mobile="8" className="flex a-i-center class-info">
          <FaColumns />
          <h3>Nome da turma</h3>
        </Column>
        <Column desktop="4" tablet="4" mobile="4" className="flex j-c-end a-i-center class-actions">
          <Button theme="link" onClick={() => history.push(`/class/${classId}/homeworks`)}>Atividades</Button>
          <Button theme="link">Pessoas</Button>
          <StudentClassMenu />
        </Column>
      </Row>
    </StyledStudentClassHeader>
  );
}

export default StudentClassHeader;
