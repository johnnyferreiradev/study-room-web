import styled from 'styled-components';

import { tertiaryColor } from 'variables';

const StyledComment = styled.div.attrs(() => ({
  className: 'comment',
}))`
  padding: 16px 0px;
  border-top: 1px solid ${tertiaryColor};

  & > .grid-row {
    padding-left: 24px;
  }

  .profile {
    height: max-content;

    h3 {
      font-size: 16px;
      line-height: 1;
    }

    p {
      font-weight: normal !important;
      font-size: 12px !important;
    }
  }

  .content {
    margin-left: 56px !important;
    padding-top: 8px !important;
  }

  .suspended-content {
    .remove-comment {
      display: flex;
      align-items: center;
      padding: 0px !important;

      svg {
        margin-right: 4px;
      }
    }
  }
`;

export default StyledComment;
