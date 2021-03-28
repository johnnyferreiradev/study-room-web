import React from 'react';

import HomeworkCard from 'components/HomeworkCard';

import StyledHomeworks from './styles';

function Homeworks() {
  return (
    <StyledHomeworks>
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
    </StyledHomeworks>
  );
}

export default Homeworks;
