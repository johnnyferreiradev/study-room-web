import React from 'react';

import { LongArrowDown } from 'components/Icons';

import { primaryColor } from 'variables';

import StyledArrow from './styles';

const Arrow = ({ direction, handleClick }) => (
  <StyledArrow
    direction={direction}
    onClick={handleClick}
  >
    {direction === 'right' ? <LongArrowDown color={primaryColor} /> : <LongArrowDown color={primaryColor} />}
  </StyledArrow>
);

export default Arrow;
