import styled from 'styled-components';

import { tertiaryColor } from 'variables';

const StyledMainLayout = styled.div.attrs(() => ({
  className: 'main-layout',
}))`
  background-color: ${tertiaryColor};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default StyledMainLayout;
