import React from 'react';

import StyledSection from './styles';

function Section({ children, background, className }) {
  return (
    <StyledSection background={background} className={className}>{children}</StyledSection>
  );
}

export default Section;
