import styled from 'styled-components';

import {
  primaryColor,
} from 'variables';

const StyledPeopleSection = styled.div.attrs(() => ({
  className: 'people-section',
}))`
  position: relative;
  width: 100%;
  margin-bottom: 32px;

  .people-section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;

    h3 {
      color: ${primaryColor};
      font-weight: normal;
    }
  }

  .card {
    padding: 0px 32px;
  }
`;

export default StyledPeopleSection;
