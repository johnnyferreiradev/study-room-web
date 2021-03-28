import styled from 'styled-components';

import { tertiaryColor } from 'variables';

const StyledComment = styled.div.attrs(() => ({
  className: 'comment',
}))`
  padding: 16px 0px;
  border-top: 1px solid ${tertiaryColor};

  .profile {
    height: max-content;

    h3 {
      font-size: 16px;
      line-height: 1;
    }
  }

  .content {
    margin-left: 56px !important;
  }
`;

export default StyledComment;
