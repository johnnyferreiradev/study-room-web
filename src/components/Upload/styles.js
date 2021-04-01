import styled from 'styled-components';

import { tertiaryColor, primaryColor } from 'variables';

const StyledUpload = styled.div.attrs(() => ({
  className: 'upload',
}))`
  width: 100%;

  .section {
    margin-bottom: 32px;
    border: 2px dashed ${primaryColor};
    background-size: cover;
    background-color: ${tertiaryColor};
    cursor: pointer;
    height: 240px;
    width: 100%;
    cursor: initial;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      width: 100%;
      height: 100%;
      outline: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    button {
      padding: 12px 16px;
      margin-top: 8px;
    }
  }
`;

export default StyledUpload;
