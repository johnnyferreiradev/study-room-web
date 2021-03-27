import React from 'react';

import MainLayout from 'layouts/MainLayout';

import { Container, Row, Column } from 'components/Grid';
import StudentClassHeader from 'components/StudentClassHeader';

import StyledStudentClassLayout from './styles';

function StudentClassLayout({ children, className = '' }) {
  return (
    <MainLayout className={className}>
      <StyledStudentClassLayout>
        <Container>
          <Row>
            <Column desktop="12" tablet="12" mobile="12" className="flex j-c-center a-i-center mt-3">
              <StudentClassHeader />
            </Column>
          </Row>
          <Row>
            <Column desktop="12" tablet="12" mobile="12" className="flex j-c-center a-i-center mt-3">
              {children}
            </Column>
          </Row>
        </Container>
      </StyledStudentClassLayout>
    </MainLayout>
  );
}

export default StudentClassLayout;
