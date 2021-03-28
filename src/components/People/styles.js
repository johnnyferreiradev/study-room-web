import styled from 'styled-components';

import {
  tertiaryColor,
} from 'variables';

const StyledPeople = styled.div.attrs(() => ({
  className: 'people',
}))`
  display: flex;
  align-items: center;
  padding: 16px 0px;
  border-bottom: 1px solid ${tertiaryColor};

  &:last-child {
    border: none;
  }

  .profile-icon {
    margin-right: 16px;
  }
`;

export default StyledPeople;
