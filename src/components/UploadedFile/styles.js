import styled from 'styled-components';

import {
  tertiaryColor,
  primaryColor,
  dangerColor,
} from 'variables';

const StyledUploadedFile = styled.div.attrs(() => ({
  className: 'uploaded-file',
}))`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border: 1px solid ${({ error }) => (!error ? tertiaryColor : dangerColor)};
  border-radius: 4px;

  .preview {
    width: 64px;
    height: 64px;
    border-radius: 4px 0px 0px 4px;
    background-color: ${primaryColor};
    color: #fff;
    font-size: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .uploaded-file-info {
    padding-left: 16px;

    h3 {
      font-size: 16px;
      max-width: 17ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .progressbar-area {
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

  .success {
    display: flex;
    align-items: center;
    margin-right: 16px;
    font-size: 12px;
    svg {
      margin-right: 4px;
      position: relative;
      font-size: 16px;
    }
  }

  .danger {
    padding: 0px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: ${primaryColor};

    &:hover {
      text-decoration: underline;
    }

    svg {
      margin-right: 4px;
      position: relative;
      top: -1px;
      font-size: 16px;
    }
  }

  .txt-danger {
    font-size: 12px;
  }

  .preview {
    background: ${({ error }) => (!error ? primaryColor : dangerColor)};
  }

  @media (max-width: 768px) {
    .uploaded-file-info {
      h3 {
        font-size: 16px;
        max-width: 12ch;
      }
    }

    .danger, .success {
      & > * {
        display: none;
      }

      & > svg {
        display: block;
      }
    }

    .txt-danger {
      display: none;
    }
  }
`;

export default StyledUploadedFile;
