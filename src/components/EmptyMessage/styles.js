import styled from 'styled-components';

import { quaternaryColor } from 'variables';

const StyledEmptyMessage = styled.div.attrs(() => ({
  className: 'empty-message',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 36px;
    margin-bottom: 16px;
    color: ${quaternaryColor};
  }

  h3 {
    font-weight: normal;
    font-size: 18px;
  }

  p {
    max-width: 400px;
    text-align: center;
    margin-top: 4px;
  }
`;

export default StyledEmptyMessage;
