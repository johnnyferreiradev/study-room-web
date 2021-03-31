import styled from 'styled-components';

import { primaryColor } from 'variables';

const AnswerMenu = styled.div.attrs(() => ({
  classNames: 'answer-menu',
}))`
  position: relative;
  width: 100%;

  & > button {
    padding: 0px;
  }

  .suspended-content {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    left: 0px;
    width: 200px;
    z-index: 1000;
    border: 1px solid ${primaryColor}55;
    transition: all .1s;
    /* box-shadow: 0px 0px 2px ${primaryColor}; */

    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      font-size: 14px !important;
      color: ${primaryColor} !important;
      padding: 8px 0px !important;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default AnswerMenu;
