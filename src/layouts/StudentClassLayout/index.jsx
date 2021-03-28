import React from 'react';

import MainLayout from 'layouts/MainLayout';

import { Container, Row, Column } from 'components/Grid';
import StudentClassHeader from 'components/StudentClassHeader';

import StyledStudentClassLayout from './styles';

function StudentClassLayout({ children, params }) {
  const { id: studentClassId } = params;

  return (
    <MainLayout>
      <StyledStudentClassLayout>
        <Container>
          <Row>
            <Column desktop="12" tablet="12" mobile="12" className="flex j-c-center a-i-center mt-3">
              <StudentClassHeader classId={studentClassId} />
            </Column>
          </Row>
          <Row>
            <Column desktop="12" tablet="12" mobile="12" className="flex j-c-center a-i-center mt-2">
              {children}
            </Column>
          </Row>
        </Container>
      </StyledStudentClassLayout>
    </MainLayout>
  );
}

export default StudentClassLayout;
