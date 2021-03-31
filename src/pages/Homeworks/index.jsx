import React from 'react';

// import HomeworkCard from 'components/HomeworkCard';
import EmptyMessage from 'components/EmptyMessage';

import StyledHomeworks from './styles';

function Homeworks() {
  return (
    <StyledHomeworks>
      {/* <HomeworkCard
        title="Atividade tal"
        owner="Fulano de tal"
        deadline="30 de fev."
      />

      <HomeworkCard
        title="Tal atividade"
        owner="Fulano de tal"
        deadline="30 de fev."
      /> */}

      <EmptyMessage
        title="Não há atividades"
        description="Aguarde até a publicação de uma nova atividade"
      />
    </StyledHomeworks>
  );
}

export default Homeworks;
