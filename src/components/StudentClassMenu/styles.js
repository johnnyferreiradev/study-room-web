import styled from 'styled-components';

import { primaryColor, dangerColor } from 'variables';

const StyledStudentClassMenu = styled.div.attrs(() => ({
  classNames: 'student-class-menu',
}))`
  position: relative;

  & > button {
    border-radius: 50%;
    padding: 0px;
  }

  .suspended-content {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    right: 0px;
    width: 260px;
    z-index: 1000;
    border: 1px solid ${primaryColor}55;
    transition: all .1s;
    /* box-shadow: 0px 0px 2px ${primaryColor}; */

    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      font-size: 14px !important;
      color: ${dangerColor} !important;
      padding: 0px !important;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default StyledStudentClassMenu;
