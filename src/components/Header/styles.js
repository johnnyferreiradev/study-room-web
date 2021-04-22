import styled from 'styled-components';

import {
  baseColor,
  primaryColor,
} from 'variables';

const Header = styled.header`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${baseColor};
  color: ${primaryColor};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  max-height: 72px;

  .student-classes-link {
    margin-top: 4px;
    padding-left: 4px;
  }

  .student-classes {
    margin-left: 4px;
    font-size: 14px;
    text-transform: uppercase;

    &:hover {
      text-decoration: underline;
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

    a {
      color: ${primaryColor};
      text-decoration: none;
    }

    button {
      padding: 0px;
      font-size: 20px;
      width: 42px;
      margin: 0px 8px;
    }
  }

  @media (max-width: 768px) {
    .app-name {
      line-height: 1;
    }
  }
`;

export default Header;
