import React from 'react';

import UploadedFile from 'components/UploadedFile';

import StyledUploadedFileList from './styles';

function UploadedFileList({ fileList, onRemove }) {
  const getFileType = (file) => {
    if (file.type) {
      const type = file.type.split('/')[0];

      if (type === 'application') return { type, typeLabel: 'Documento' };
      if (type === 'video') return { type, typeLabel: 'Vídeo' };
      if (type === 'text') return { type, typeLabel: 'Documento de texto' };
      if (type === 'image') return { type, typeLabel: 'Imagem' };
      if (type === 'audio') return { type, typeLabel: 'Audio' };

      return { type, typeLabel: 'Arquivo' };
    }

    return { type: 'file', typeLabel: 'Arquivo' };
  };

  return (
    <StyledUploadedFileList>
      {fileList.map((file) => (
        <UploadedFile
          key={file.id}
          file={file}
          type={getFileType(file).type}
          typeLabel={getFileType(file).typeLabel}
          onRemove={onRemove}
        />
      ))}
    </StyledUploadedFileList>
  );
}

export default UploadedFileList;
