import styled from 'styled-components';

const StyledMaterials = styled.div.attrs(() => ({
  classNames: 'materials',
}))`
  width: 100%;

  .empty-message {
    margin-top: 32px;
  }
`;

export default StyledMaterials;
