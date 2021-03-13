import styled from 'styled-components';

import { baseColor, maxScreenWidth } from 'variables';

const styledSection = styled.div.attrs(() => ({
  className: 'section',
}))`
  position: relative;
  width: 100%;
  max-width: ${maxScreenWidth};
  background: ${({ background }) => background || baseColor}
`;

export default styledSection;
