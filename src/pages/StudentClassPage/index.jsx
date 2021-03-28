import React from 'react';

// import EmptyMessage from 'components/EmptyMessage';
import Communicated from 'components/Communicated';
import HomeworkCard from 'components/HomeworkCard';

import StyledStudentClassPage from './styles';

function StudentClassPage() {
  return (
    <StyledStudentClassPage>
      <Communicated
        owner="Fulano de tal"
        deadline="30 de fev."
      />

      <HomeworkCard
        title="Atividade tal"
        owner="Fulano de tal"
        deadline="30 de fev."
      />

      <HomeworkCard
        title="Tal atividade"
        owner="Fulano de tal"
        deadline="30 de fev."
      />

      {/* <EmptyMessage
        title="Nenhum contéudo publicado"
        description="Aguarde até a públicação de um novo conteúdo"
      /> */}
    </StyledStudentClassPage>
  );
}

export default StudentClassPage;
