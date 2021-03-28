import React from 'react';

import EmptyMessage from 'components/EmptyMessage';

import StyledStudentClassPage from './styles';

function StudentClassPage() {
  return (
    <StyledStudentClassPage>
      <EmptyMessage
        title="Nenhum contéudo publicado"
        description="Aguarde até a públicação de um novo conteúdo"
      />
    </StyledStudentClassPage>
  );
}

export default StudentClassPage;
