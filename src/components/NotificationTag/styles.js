import styled from 'styled-components';

import {
  dangerColor,
} from 'variables';

const StyledStudentClassCard = styled.div.attrs(() => ({
  className: 'notification-tag',
}))`
  background: ${dangerColor};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  font-weight: bold;
  color: #ffffff;
  font-size: 14px;
  overflow: hidden;
`;

export default StyledStudentClassCard;
