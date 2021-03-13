import React from 'react';

import { Container, Row, Column } from 'components/Grid';
import Banner from 'components/Banner';
import Card from 'components/Card';
import { Button, LinkButton } from 'components/Buttons';

import StyledLogin from './styles';

function Login() {
  return (
    <StyledLogin>
      <Container>
        <Row>
          <Column desktop="6" tablet="6" mobile="12" className="flex j-c-center a-i-center">
            <Banner>
              <div className="banner-text">
                <p className="txt-secondary">Bem-vindo ao</p>
                <h1 className="title">Study Room</h1>
                <h3 className="subtitle txt-dark">Plataforma de gerenciamento de conteúdo para escolas</h3>
              </div>
            </Banner>
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
                  <LinkButton>Esqueci minha senha</LinkButton>
                </div>
              </div>
            </Card>

            <div className="flex">
              <p className="txt-secondary mr-1">Não possui uma conta?</p>
              <LinkButton to="/register">Cadastre-se</LinkButton>
            </div>
          </Column>
        </Row>
      </Container>
    </StyledLogin>
  );
}

export default Login;
