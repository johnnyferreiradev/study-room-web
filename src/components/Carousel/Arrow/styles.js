import styled from 'styled-components';

import { primaryColor } from 'variables';

const StyledArrow = styled.div.attrs(() => ({
  className: 'carousel-control',
}))`
  display: flex;
  position: absolute;
  top: 85%;
  ${({ direction }) => (direction === 'right' ? 'right: 25px' : 'left: 25px')};
  height: 50px;
  width: 50px;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  color: ${primaryColor};
  z-index: 1000;

  transform: rotate(${({ direction }) => (direction === 'left' ? '90deg' : '-90deg')});

  &:hover {
    transform: scale(1.1);
    transform: rotate(${({ direction }) => (direction === 'left' ? '90deg' : '-90deg')});
  }

  img {
    &:focus {
      outline: 0;
    }
  }

  @media (max-width: 1000px) {
    top: 85%;
  }
`;

export default StyledArrow;
