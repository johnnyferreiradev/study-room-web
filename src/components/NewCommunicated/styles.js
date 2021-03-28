import styled from 'styled-components';

import { darkColor, tertiaryColor, quaternaryColor } from 'variables';

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
    display: flex;
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
      width: 30px;
      padding: 4px;
      font-size: 18px;
      margin-right: 8px;
      display: ${({ inFocus }) => (inFocus ? 'block' : 'none')} !important;
    }
  }

  .profile-icon {
    margin-right: 16px;
  }
`;

export default StyledNewCommunicated;
