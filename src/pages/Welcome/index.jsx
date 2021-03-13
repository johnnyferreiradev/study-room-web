import React from 'react';

import Banner from 'components/Banner';

import { Row, Column } from 'components/Grid';

import StyledWelcome from './styles';

function Welcome() {
  return (
    <StyledWelcome>
      <Banner>
        <Row alignItems="flex-start">
          <Column desktop="12" tablet="12" mobile="12" className="flex f-column j-c-center a-i-center">
            <h1 className="banner-title">Study Room</h1>
            <h3 className="banner-subtitle">Sistema de gerenciamento de conteúdo para escolas</h3>
          </Column>
        </Row>
      </Banner>
    </StyledWelcome>
  );
}

export default Welcome;
