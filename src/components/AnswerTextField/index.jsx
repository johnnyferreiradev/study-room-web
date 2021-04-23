import React from 'react';

import StyledAnswerTextField from './styles';

function AnswerTextField({ value, onChange }) {
  return (
    <StyledAnswerTextField>
      <textarea
        value={value}
        onChange={onChange}
        rows="5"
        placeholder="Digite sua resposta aqui"
      />
    </StyledAnswerTextField>
  );
}

export default AnswerTextField;
