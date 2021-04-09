import styled from 'styled-components';

import { primaryColor } from 'variables';

const SuspendedMenu = styled.div.attrs(() => ({
  classNames: 'suspended-menu',
}))`
  position: relative;
  width: max-content;

  & > button {
    padding: 0px;
    font-size: 16px;
    width: 32px;
  }

  .suspended-content {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    right: 0px;
    width: max-content;
    min-width: 114px;
    min-height: 50px;
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

      .loading {
        left: calc(50% - 14px);
      }
    }
  }
`;

export default SuspendedMenu;
