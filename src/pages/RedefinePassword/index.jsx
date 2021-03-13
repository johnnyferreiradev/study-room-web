import React from 'react';

import { Container, Row, Column } from 'components/Grid';
import Banner from 'components/Banner';
import Card from 'components/Card';
import { Button, LinkButton } from 'components/Buttons';

import StyledRedefinePassword from './styles';

function RedefinePassword() {
  return (
    <StyledRedefinePassword>
      <Container>
        <Row>
          <Column desktop="6" tablet="6" mobile="12" className="flex j-c-center a-i-center banner-column">
            <Banner />
          </Column>
          <Column desktop="6" tablet="6" mobile="12" className="flex f-column j-c-center a-i-center form-area">
            <Card width="344px" className="mb-3">
              <h2 className="text-center">Criar nova senha</h2>
              <p className="text-center txt-secondary mb-3">Insira a sua nova senha de acesso</p>

              <div className="form">
                <div className="form-group mb-2">
                  <label htmlFor="redefine-password">
                    <p>Senha</p>
                    <input type="password" placeholder="" id="redefine-password" />
                  </label>
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="redefine-confirm-password">
                    <p>Repita a senha</p>
                    <input type="password" placeholder="" id="redefine-confirm-password" />
                  </label>
                </div>

                <div className="form-group mb-3">
                  <Button theme="primary" fluid>Salvar</Button>
                </div>
              </div>
            </Card>

            <div className="flex">
              <LinkButton to="/">Voltar para o Login</LinkButton>
            </div>
          </Column>
        </Row>
      </Container>
    </StyledRedefinePassword>
  );
}

export default RedefinePassword;
