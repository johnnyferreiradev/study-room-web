import React from 'react';

import { Container, Row } from 'components/Grid';
import StudentClassCard from 'components/StudentClassCard';

import StyledDashboard from './styles';

function Dashboard() {
  return (
    <StyledDashboard>
      <Container>
        <Row>
          <StudentClassCard
            title="Turma 1"
            description="Descrição 1"
            notification={2}
          />
          <StudentClassCard
            title="Turma 2"
            description="Descrição 2"
          />
          <StudentClassCard
            title="Turma 3"
            description="Descrição 3"
          />
          <StudentClassCard
            title="Turma 4"
            description="Descrição 4"
          />
          <StudentClassCard
            title="Turma 5"
            description="Descrição 5"
          />
          <StudentClassCard
            title="Turma 6"
            description="Descrição 6"
          />
          <StudentClassCard
            title="Turma 7"
            description="Descrição 7"
            notification={3}
          />
        </Row>
      </Container>
    </StyledDashboard>
  );
}

export default Dashboard;
