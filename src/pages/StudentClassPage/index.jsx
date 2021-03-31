import React, { useState } from 'react';

import EmptyMessage from 'components/EmptyMessage';
import NewCommunicated from 'components/NewCommunicated';
import Communicated from 'components/Communicated';

import StyledStudentClassPage from './styles';

function StudentClassPage() {
  const [communicatedList, setCommunicatedList] = useState([]);

  return (
    <StyledStudentClassPage>
      <NewCommunicated
        list={communicatedList}
        onSend={setCommunicatedList}
      />

      {communicatedList.map((communicated) => (
        <Communicated
          key={communicated.id}
          owner={communicated.owner}
          deadline={communicated.deadline}
          content={communicated.content}
        />
      ))}

      {communicatedList.length === 0 && (
        <EmptyMessage
          title="Nenhum comunicado publicado"
          description="Aguarde até a publicação de um novo comunicado ou crie um novo"
        />
      )}
    </StyledStudentClassPage>
  );
}

export default StudentClassPage;
