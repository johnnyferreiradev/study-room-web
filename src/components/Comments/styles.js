import styled from 'styled-components';

import { darkColor, tertiaryColor, quaternaryColor } from 'variables';

const StyledComments = styled.div.attrs(() => ({
  className: 'comments',
}))`
  width: 100%;
  margin-bottom: 4px;

  form {
    display: flex;
    border: 2px solid ${tertiaryColor};
    padding: 2px 0px;
    margin-top: 16px !important;

    textarea {
      border: none;
      resize: none;
      width: 100%;
      font-size: 14px;
      letter-spacing: normal;
      color: ${darkColor};

      &::-webkit-input-placeholder  { color: ${quaternaryColor}; }
      &:-moz-placeholder { color: ${quaternaryColor}; }
      &:-moz-placeholder { color: ${quaternaryColor}; }
    }

    button {
      width: 30px;
      padding: 4px;
      font-size: 18px;
      margin-right: 8px;
    }
  }
`;

export default StyledComments;
