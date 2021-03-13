import styled from 'styled-components';

import {
  baseColor,
  primaryColor,
  tertiaryColor,
  maxScreenWidth,
} from 'variables';

const Header = styled.header`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: ${maxScreenWidth} !important;
  display: flex;
  justify-content: center;
  background-color: ${baseColor};
  color: ${primaryColor};
  border-bottom: 2px solid ${tertiaryColor};

  .toggle-menu-button {
    width: 56px !important;
    display: none;
    margin-right: 8px;
  }

  .contact {
    button {
      display: block;
    }
  }

  .main-content {
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo-column {
      display: flex;
    }

    .app-logo {
      max-width: 84px;
      margin-left: 8px;
      margin-top: 8px;
    }

    a {
      color: ${primaryColor};
    }

    .nav-options {
      width: 100%;
      max-width: 243px;
      display: flex;
      justify-content: space-around;

      li {
        padding: 0px 8px;
        button {
          text-transform: uppercase;
          font-size: 12px;
        }
      }
    }
  }

  .mobile-nav {
    ul {
      z-index: 20;
      width: 100%;
      position: absolute;
      left: 0px;
      background: ${baseColor};
      list-style: none;
      height: ${({ menuState }) => (menuState === 'closed' ? '0px' : '292px')};
      padding-top: ${({ menuState }) => (menuState === 'closed' ? '0px' : '32px')};
      // padding-left: ${({ menuState }) => (menuState === 'closed' ? '0px' : '132px')};
      overflow: hidden;
      transition: all .2s;
      box-shadow: 0 2px 24px 0 rgba(0,0,0,.2);

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .no-button {
        margin: 0px;
      }
    }
  }

  @media (max-width: 1000px) {
    .main-content {
      .toggle-menu-button {
        display: block;
      }

      .desktop-nav {
        display: none;
      }

      .contact {
        button {
          display: none;
        }
      }

      button {
        width: max-content;
        padding: 12px 16px;
      }
    }
  }
`;

export default Header;
