import styled from 'styled-components';

import {
  tertiaryColor,
  primaryColor,
} from 'variables';

const StyledMaterial = styled.div.attrs(() => ({
  className: 'material',
}))`
  width: 284px;
  min-width: 284px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border: 1px solid ${tertiaryColor};
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

  .material-info {
    padding-left: 16px;

    h3 {
      font-size: 16px;
    }
  }
`;

export default StyledMaterial;
