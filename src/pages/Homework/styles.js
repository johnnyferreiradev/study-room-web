import styled from 'styled-components';

import {
  tertiaryColor,
} from 'variables';

const StyledHomework = styled.div.attrs(() => ({
  className: 'homework',
}))`
  width: 100%;

  .profile-icon {
    margin-right: 16px;
  }

  .info-row, .statement {
    padding: 8px 0px;
  }

  .statement {
    border-top: 1px solid ${tertiaryColor};
    margin-bottom: 8px;
  }

  .homework-card {
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    .grid-row {
      .grid-column:first-child {
        padding-right: 0px;
        /* margin-bottom: 32px; */
      }
    }
  }
`;

export default StyledHomework;
