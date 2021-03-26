import styled from 'styled-components';

import { primaryColor } from 'variables';

const StyledProfileMenu = styled.div.attrs(() => ({
  classNames: 'profile-menu',
}))`
  position: relative;

  & > button {
    border-radius: 50%;

    &:hover {
      box-shadow: 0px 0px 12px ${primaryColor};
    }
  }

  .suspended-content {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    right: 0px;
    width: 320px;
    z-index: 1000;
    border: 1px solid ${primaryColor}55;
    transition: all .1s;
    /* box-shadow: 0px 0px 2px ${primaryColor}; */

    flex-direction: column;
    justify-content: center;
    align-items: center;

    .profile-action {
      position: relative;
      margin: 16px 0px;

      .profile-icon {
        width: 64px;
        height: 64px;
        font-size: 28px;
      }

      .change-profile-image {
        position: absolute;
        font-weight: bold;
        margin: 0px;
        width: 64px;
        height: 64px;
        color: #000;
        top: 0px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          margin: 0px;
          font-size: 24px !important;
          text-align: center !important;
          color: #ffffff;
          display: none;
        }

        &:hover {
          background: #00000088;

          svg {
            display: block;
          }
        }
      }
    }

    h3 {
      font-size: 16px;
      margin-bottom: 4px;
    }

    p {
      font-size: 14px;
      margin-bottom: 32px;
    }

    button {
      margin-bottom: 16px !important;
      font-size: 16px !important;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default StyledProfileMenu;
