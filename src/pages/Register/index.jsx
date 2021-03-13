import React from 'react';

import { Container, Row, Column } from 'components/Grid';
import Banner from 'components/Banner';
import Card from 'components/Card';
import { Button, LinkButton } from 'components/Buttons';

import StyledRegister from './styles';

function Register() {
  return (
    <StyledRegister>
      <Container>
        <Row>
          <Column desktop="6" tablet="6" mobile="12" className="flex j-c-center a-i-center banner-column">
            <Banner />
          </Column>
          <Column desktop="6" tablet="6" mobile="12" className="flex f-column j-c-center a-i-center form-area">
            <Card width="344px" className="mb-3">
              <h2 className="text-center">Cadastre-se</h2>
              <p className="text-center txt-secondary mb-3">Faça seu cadastro para acessar a plataforma</p>

              <div className="form">
                <div className="form-group mb-2">
                  <label htmlFor="register-user-name">
                    <p>Nome</p>
                    <input type="text" placeholder="Digite seu nome" id="register-user-name" />
                  </label>
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="register-email">
                    <p>E-mail</p>
                    <input type="email" placeholder="Digite seu e-mail" id="register-email" />
                  </label>
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="register-password">
                    <p>Senha</p>
                    <input type="password" placeholder="" id="register-password" />
                  </label>
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="register-confirm-password">
                    <p>Repita a senha</p>
                    <input type="password" placeholder="" id="register-confirm-password" />
                  </label>
                </div>

                <div className="form-group mb-3">
                  <Button theme="primary" fluid>Cadastrar-se</Button>
                </div>
              </div>
            </Card>

            <div className="flex">
              <p className="txt-secondary mr-1">Já possui uma conta?</p>
              <LinkButton to="/">Fazer login</LinkButton>
            </div>
          </Column>
        </Row>
      </Container>
    </StyledRegister>
  );
}

export default Register;
