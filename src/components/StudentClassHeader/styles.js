import styled from 'styled-components';

import { primaryColor } from 'variables';

const StyledStudentClassHeader = styled.div.attrs(() => ({
  classNames: 'student-class-header',
}))`
  width: 100%;
  max-width: 1000px;
  /* min-height: 120px; */
  padding: 32px;
  background: ${primaryColor};
  border-radius: 4px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  .class-info {
    svg {
      font-size: 36px;
      margin-right: 16px;
    }
  }

  .class-actions {
    button {
      color: #ffffff;
      padding: 14px 16px;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 768px) {
    .class-actions {
      & > button {
        display: none;
      }
    }
  }
`;

export default StyledStudentClassHeader;
