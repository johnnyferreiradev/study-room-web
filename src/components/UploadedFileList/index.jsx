import React from 'react';

import UploadedFile from 'components/UploadedFile';

import StyledUploadedFileList from './styles';

function UploadedFileList() {
  return (
    <StyledUploadedFileList>
      <UploadedFile type="file" done />
      <UploadedFile type="link" done />
      <UploadedFile />
    </StyledUploadedFileList>
  );
}

export default UploadedFileList;
