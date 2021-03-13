import styled from 'styled-components';

import { baseColor } from 'variables';

const StyledPublicLayout = styled.div.attrs(() => ({
  className: 'public-layout',
}))`
  background-color: ${baseColor};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default StyledPublicLayout;
