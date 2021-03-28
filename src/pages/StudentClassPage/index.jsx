import React, { useState } from 'react';

// import EmptyMessage from 'components/EmptyMessage';
import NewCommunicated from 'components/NewCommunicated';
import Communicated from 'components/Communicated';
import HomeworkCard from 'components/HomeworkCard';

import StyledStudentClassPage from './styles';

function StudentClassPage() {
  const [communicatedList, setCommunicatedList] = useState([{
    id: '123',
    owner: 'Fulano de tal',
    deadline: '30 de fev.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }]);

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
