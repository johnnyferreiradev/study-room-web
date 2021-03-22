import React from 'react';

// import {  } from 'api/auth';

import { Container, Row, Column } from 'components/Grid';
import Banner from 'components/Banner';
import Card from 'components/Card';
import { LinkButton } from 'components/Buttons';
// import Loading from 'components/Loading';

import StyledVerifyEmailConfirm from './styles';

function VerifyEmailConfirm() {
  return (
    <StyledVerifyEmailConfirm>
      <Container>
        <Row>
          <Column desktop="6" tablet="6" mobile="12" className="flex j-c-center a-i-center banner-column">
            <Banner />
          </Column>
          <Column desktop="6" tablet="6" mobile="12" className="flex f-column j-c-center a-i-center form-area">
            <Card width="344px" className="mb-3">
              <h2 className="text-center">E-mail confirmado!</h2>
              <p className="text-center txt-secondary mb-3">Agora você já pode utilizar a plataforma! Faça login para ter acesso.</p>
            </Card>

            <div className="flex">
              <LinkButton to="/">Fazer Login</LinkButton>
            </div>
          </Column>
        </Row>
      </Container>
    </StyledVerifyEmailConfirm>
  );
}

export default VerifyEmailConfirm;
