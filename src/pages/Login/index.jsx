import React from 'react';

import { Container, Row, Column } from 'components/Grid';
import Banner from 'components/Banner';

import StyledLogin from './styles';

function Login() {
  return (
    <StyledLogin>
      <Container>
        <Row>
          <Column desktop="6" tablet="6" mobile="6" className="flex j-c-center a-i-center">
            <Banner>
              <div className="banner-text">
                <p className="txt-secondary">Bem-vindo ao</p>
                <h1 className="title">Study Room</h1>
                <h3 className="subtitle txt-dark">Sistema de gerenciamento de conteúdo para escolas</h3>
              </div>
            </Banner>
          </Column>
          <Column desktop="6" tablet="6" mobile="6" className="flex j-c-center a-i-center">
            Login card side
          </Column>
        </Row>
      </Container>
    </StyledLogin>
  );
}

export default Login;
