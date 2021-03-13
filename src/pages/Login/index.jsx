import React from 'react';

import { Container, Row, Column } from 'components/Grid';

import StyledLogin from './styles';

function Login() {
  return (
    <StyledLogin>
      <Container>
        <Row>
          <Column desktop="6" tablet="6" mobile="6" className="flex j-c-center a-i-center">
            Banner side
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
