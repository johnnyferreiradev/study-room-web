import React from 'react';

import Material from 'components/Material';

import StyledMaterialList from './styles';

function MaterialList({ materials, onRemove }) {
  const getMaterialType = (file) => {
    if (file.type) {
      const type = file.type.split('/')[0];

      if (type === 'application') return { type, typeLabel: 'Documento' };
      if (type === 'video') return { type, typeLabel: 'Vídeo' };
      if (type === 'text') return { type, typeLabel: 'Documento de texto' };
      if (type === 'image') return { type, typeLabel: 'Imagem' };
      if (type === 'audio') return { type, typeLabel: 'Audio' };
      if (type === 'link') return { type, typeLabel: 'Link' };

      return { type, typeLabel: 'Arquivo' };
    }

    return { type: 'file', typeLabel: 'Arquivo' };
  };

  return (
    <StyledMaterialList>
      {materials.map((material) => (
        <Material
          key={material.id}
          id={material.id}
          type={getMaterialType(material).type}
          typeLabel={getMaterialType(material).typeLabel}
          material={material}
          onRemove={onRemove}
        />
      ))}
    </StyledMaterialList>
  );
}

export default MaterialList;
