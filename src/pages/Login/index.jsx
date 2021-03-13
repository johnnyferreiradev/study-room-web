import React from 'react';

import { Container, Row, Column } from 'components/Grid';
import Banner from 'components/Banner';
import Card from 'components/Card';
import { Button, LinkButton } from 'components/Buttons';
import Snackbar from 'components/Snackbar';

import StyledLogin from './styles';

function Login() {
  return (
    <StyledLogin>
      <Container>
        <Row>
          <Column desktop="6" tablet="6" mobile="12" className="flex j-c-center a-i-center">
            <Banner />
          </Column>
          <Column desktop="6" tablet="6" mobile="12" className="flex f-column j-c-center a-i-center form-area">
            <Card width="344px" className="mb-3">
              <h2 className="text-center">Entrar</h2>
              <p className="text-center txt-secondary mb-3">Faça login para acessar a plataforma</p>

              <div className="form">
                <div className="form-group mb-2">
                  <label htmlFor="login-email">
                    <p>E-mail</p>
                    <input type="email" placeholder="Digite seu e-mail" id="login-email" />
                  </label>
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="login-password">
                    <p>Senha</p>
                    <input type="password" placeholder="" id="login-password" />
                  </label>
                </div>

                <div className="form-group mb-2">
                  <Button theme="primary" fluid>Login</Button>
                </div>

                <div className="form-group mb-2">
                  <LinkButton to="recovery-password">Esqueci minha senha</LinkButton>
                </div>
              </div>
            </Card>

            <div className="flex">
              <p className="txt-secondary mr-1">Não possui uma conta?</p>
              <LinkButton to="/register">Cadastre-se</LinkButton>
            </div>

            <Snackbar theme="success" message="error" />
          </Column>
        </Row>
      </Container>
    </StyledLogin>
  );
}

export default Login;
