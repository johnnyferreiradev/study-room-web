import React from 'react';

import { Container, Row, Column } from 'components/Grid';
import Banner from 'components/Banner';
import Card from 'components/Card';
import { Button, LinkButton } from 'components/Buttons';

import StyledRecoveryPassword from './styles';

function RecoveryPassword() {
  return (
    <StyledRecoveryPassword>
      <Container>
        <Row>
          <Column desktop="6" tablet="6" mobile="12" className="flex j-c-center a-i-center banner-column">
            <Banner />
          </Column>
          <Column desktop="6" tablet="6" mobile="12" className="flex f-column j-c-center a-i-center form-area">
            <Card width="344px" className="mb-3">
              <h2 className="text-center">Recuperar senha</h2>
              <p className="text-center txt-secondary mb-3">Insira seu e-mail e enviaremos um link de recuperação de senha</p>

              <div className="form">
                <div className="form-group mb-2">
                  <label htmlFor="recovery-password-email">
                    <p>E-mail</p>
                    <input type="email" placeholder="Digite seu e-mail" id="recovery-password-email" />
                  </label>
                </div>

                <div className="form-group mb-3">
                  <Button theme="primary" fluid>Enviar</Button>
                </div>
              </div>
            </Card>

            <div className="flex">
              <LinkButton to="/">Voltar para o Login</LinkButton>
            </div>
          </Column>
        </Row>
      </Container>
    </StyledRecoveryPassword>
  );
}

export default RecoveryPassword;
