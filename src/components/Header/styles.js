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
`;

export default Header;
