import React from 'react';

import StudentClassHeader from 'components/StudentClassHeader';
import { Container, Row, Column } from 'components/Grid';
import EmptyMessage from 'components/EmptyMessage';

import StyledStudentClassPage from './styles';

function StudentClassPage() {
  return (
    <StyledStudentClassPage>
      <Container>
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex j-c-center a-i-center mt-3">
            <StudentClassHeader />
          </Column>
        </Row>
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex j-c-center a-i-center mt-3">
            <EmptyMessage
              title="Nenhum contéudo publicado"
              description="Aguarde até a públicação de um novo conteúdo"
            />
          </Column>
        </Row>
      </Container>
    </StyledStudentClassPage>
  );
}

export default StudentClassPage;
