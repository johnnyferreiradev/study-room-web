import React from 'react';

// import getFileType from 'utils/getFileType';

import Material from 'components/Material';

import StyledMaterialList from './styles';

function MaterialList({ materials, onRemove }) {
  const getMaterialType = (file) => {
    // getFileType(file.path);

    if (file.extension) {
      const { extension } = file;

      if (extension === 'application') return { type: '', typeLabel: 'Documento' };
      if (extension === 'video') return { type: '', typeLabel: 'Vídeo' };
      if (extension === 'text') return { type: '', typeLabel: 'Documento de texto' };

      // Image file types
      if (extension === 'jpg') return { type: 'image', typeLabel: 'Imagem' };
      if (extension === 'jpeg') return { type: 'image', typeLabel: 'Imagem' };
      if (extension === 'png') return { type: 'image', typeLabel: 'Imagem' };
      if (extension === 'gif') return { type: 'image', typeLabel: 'Imagem' };
      if (extension === 'ico') return { type: 'image', typeLabel: 'Imagem' };
      if (extension === 'svg') return { type: 'image', typeLabel: 'Imagem' };

      // Audio file types
      if (extension === 'mp3') return { type: 'audio', typeLabel: 'Audio' };
      if (extension === 'ogg') return { type: 'audio', typeLabel: 'Audio' };
      if (extension === 'mid') return { type: 'audio', typeLabel: 'Audio' };
      if (extension === 'wav') return { type: 'audio', typeLabel: 'Audio' };

      // Compressed files
      if (extension === 'rar') return { type: 'file', typeLabel: 'Arquivo compactado' };
      if (extension === 'tar.gz') return { type: 'file', typeLabel: 'Arquivo compactado' };
      if (extension === 'zip') return { type: 'file', typeLabel: 'Arquivo compactado' };
      if (extension === '7z') return { type: 'file', typeLabel: 'Arquivo compactado' };

      if (extension === 'link') return { type: 'file', typeLabel: 'Link' };

      return { type: '', typeLabel: 'Arquivo deconhecido' };
    }

    return { extension: 'file', typeLabel: 'Arquivo deconhecido' };
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
