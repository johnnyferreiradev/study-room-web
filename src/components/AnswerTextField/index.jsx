import React from 'react';

import StyledAnswerTextField from './styles';

function AnswerTextField({ value, onChange, disabled }) {
  return (
    <StyledAnswerTextField>
      <textarea
        value={value}
        onChange={onChange}
        rows="5"
        placeholder="Digite sua resposta aqui"
        disabled={disabled}
      />
    </StyledAnswerTextField>
  );
}

export default AnswerTextField;
