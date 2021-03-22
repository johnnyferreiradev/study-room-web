import React from 'react';

import { Container, Row, Column } from 'components/Grid';
import Banner from 'components/Banner';
import Card from 'components/Card';
import { LinkButton } from 'components/Buttons';

import StyledVerifyEmail from './styles';

function VerifyEmail() {
  return (
    <StyledVerifyEmail>
      <Container>
        <Row>
          <Column desktop="6" tablet="6" mobile="12" className="flex j-c-center a-i-center banner-column">
            <Banner />
          </Column>
          <Column desktop="6" tablet="6" mobile="12" className="flex f-column j-c-center a-i-center form-area">
            <Card width="344px" className="mb-3">
              <h2 className="text-center">Confirme seu E-mail</h2>
              <p className="text-center txt-secondary mb-3">Uma mensagem de confirmação foi enviada para seu e-mail</p>
            </Card>

            <div className="flex">
              <LinkButton to="/">Voltar para o Login</LinkButton>
            </div>
          </Column>
        </Row>
      </Container>
    </StyledVerifyEmail>
  );
}

export default VerifyEmail;
