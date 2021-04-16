import React from 'react';

import getFileType from 'utils/getFileType';

import Material from 'components/Material';

import StyledMaterialList from './styles';

function MaterialList({ materials, onRemove }) {
  return (
    <StyledMaterialList>
      {materials.map((material) => (
        <Material
          key={material.id}
          id={material.id}
          type={getFileType(material).type}
          typeLabel={getFileType(material).typeLabel}
          material={material}
          onRemove={onRemove}
        />
      ))}
    </StyledMaterialList>
  );
}

export default MaterialList;
