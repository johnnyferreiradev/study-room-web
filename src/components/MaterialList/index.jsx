import React from 'react';

import Material from 'components/Material';

import StyledMaterialList from './styles';

function MaterialList({ materials, onRemove }) {
  return (
    <StyledMaterialList>
      {materials.map((material) => (
        <Material
          key={material.id}
          id={material.id}
          type="file"
          onRemove={onRemove}
        />
      ))}
    </StyledMaterialList>
  );
}

export default MaterialList;
