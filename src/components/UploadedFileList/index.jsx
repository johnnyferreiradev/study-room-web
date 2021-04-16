import React from 'react';

import getFileType from 'utils/getFileType';

import UploadedFile from 'components/UploadedFile';

import StyledUploadedFileList from './styles';

function UploadedFileList({
  fileList,
  onRemove,
  onCancel,
  singleUpload,
}) {
  return (
    <StyledUploadedFileList>
      {fileList.map((file) => (
        <UploadedFile
          key={file.id}
          file={file}
          type={getFileType(file).type}
          typeLabel={getFileType(file).typeLabel}
          onRemove={onRemove}
          onCancel={onCancel}
          singleUpload={singleUpload}
        />
      ))}
    </StyledUploadedFileList>
  );
}

export default UploadedFileList;
