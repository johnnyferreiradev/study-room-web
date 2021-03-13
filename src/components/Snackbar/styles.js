import styled from 'styled-components';

import {
  primaryColor,
  whiteColor,
  dangerColor,
  warningColor,
  successColor,
  infoColor,
} from 'variables';

const themes = {
  primary: {
    background: primaryColor,
  },
  secondary: {
    background: whiteColor,
  },
  danger: {
    background: dangerColor,
  },
  warning: {
    background: warningColor,
  },
  success: {
    background: successColor,
  },
  info: {
    background: infoColor,
  },
};

const StyledSnackbar = styled.div.attrs(() => ({ className: 'custom-snackbar' }))`
    .mdc-snackbar {
        top: 0px;
        height: 100px;

        .mdc-snackbar__surface {
            background: ${({ theme }) => themes[theme].background};
            border-radius: 4px;
            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
            
            .mdc-snackbar__label {
                font-weight: bold;
                color: #FFFFFF;
                font-size: 18px;
            }
        }

        .mdc-button {
          background: none;
          font-size: 16px;
          padding: 8px;
          border: none;
          outline: none;
          cursor: pointer;
          color: #FFFFFF;
          margin-right: 8px;
        }
    }
`;

export default StyledSnackbar;
