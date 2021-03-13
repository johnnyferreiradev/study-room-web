import styled from 'styled-components';

const StyledCarousel = styled.div.attrs(() => ({
  className: 'carousel',
}))`
  position: relative;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 1000px) {
    padding-bottom: 64px;
  }
`;

export default StyledCarousel;
