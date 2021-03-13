import React from 'react';

import { Container } from '../Grid';

import StyledBanner from './styles';

function Banner({ children, backgroundImage }) {
  return (
    <StyledBanner backgroundImage={backgroundImage}>
      <Container>
        {children}
      </Container>
    </StyledBanner>
  );
}

export default Banner;
