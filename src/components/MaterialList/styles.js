import styled from 'styled-components';

const StyledMaterialList = styled.div.attrs(() => ({
  className: 'material-list',
}))`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;

export default StyledMaterialList;
