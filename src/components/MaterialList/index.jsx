import React from 'react';

import Material from 'components/Material';

import StyledMaterialList from './styles';

function MaterialList() {
  return (
    <StyledMaterialList>
      <Material type="file" />
      <Material type="link" />
      <Material />
    </StyledMaterialList>
  );
}

export default MaterialList;
