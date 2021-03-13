import React from 'react';

import { Container, Row, Column } from 'components/Grid';
import { AnchorButton } from 'components/Buttons';

import StyledFooter from './styles';

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Container>
            <Row>
              <Column desktop="12" tablet="12" mobile="12" className="flex j-c-between a-i-center">
                <AnchorButton theme="inverseLink">Ajuda</AnchorButton>
                <p className="txt-white">
                  {new Date().getFullYear()}
                  - Todos os direitos reservados
                </p>
              </Column>
            </Row>
          </Container>
        </Row>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
