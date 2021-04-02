import React from 'react';
import { FaGrinBeamSweat } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { Button } from 'components/Buttons';

import StyledPageNotFound from './styles';

function PageNotFound() {
  const history = useHistory();

  return (
    <StyledPageNotFound>
      <FaGrinBeamSweat className="txt-primary" />
      <h1>Página não encontrada</h1>
      <Button theme="primary" onClick={() => history.push('/dashboard')}>Voltar para a página inicial</Button>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
