import styled from 'styled-components';

import {
  darkColor,
  tertiaryColor,
  quaternaryColor,
  secondaryFontColor,
  primaryColor,
} from 'variables';

const StyledNewCommunicated = styled.div.attrs(() => ({
  className: 'new-communicated',
}))`
  position: relative;
  padding: 16px 32px;
  width: 100%;
  margin-bottom: 16px;

  & > div {
    display: ${({ inFocus }) => (inFocus ? 'flex' : 'none')} !important;
  }

  form {
    display: ${({ inFocus }) => (!inFocus ? 'block' : 'none')} !important;
    border: 2px solid ${tertiaryColor};
    padding: 2px 0px;

    textarea {
      border: none;
      resize: none;
      width: 100%;
      font-size: 14px;
      letter-spacing: normal;
      color: ${darkColor};
      line-height: 1.8;

      &::-webkit-input-placeholder  { color: ${quaternaryColor}; }
      &:-moz-placeholder { color: ${quaternaryColor}; }
      &:-moz-placeholder { color: ${quaternaryColor}; }
      &::-webkit-scrollbar { width: 0px; }
    }

    button {
      width: 100%;
      height: 100%;
      padding: 10px;
      font-size: 14px;
      color: ${secondaryFontColor};
      text-transform: initial;
      text-align: start;
      font-weight: normal;
    }
  }

  .text-editor {
    margin-bottom: 16px;
  }

  .profile-icon {
    margin-right: 16px;
  }

  .actions-row {
    button {
      max-width: 168px;
      padding: 12px 16px;
    }
  }

  .progress-row {
    align-items: center;

    .grid-column {
      height: 100%;

      button {
        padding: 12px 16px;
        margin: 0px;
      }
    }

    .progress-column {
      padding: 32px 0px;

      .progressbar {
        height: 8px !important;
        background-color: ${tertiaryColor};
        border-radius: 2px;

        div.progressbar-progress {
          height: 8px !important;
          background-color: ${primaryColor} !important;
          border-radius: 2px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 16px;

    .actions-row {
      .attachments-button {
        width: 100%;
        max-width: 100%;
      }
    }
  }
`;

export default StyledNewCommunicated;
