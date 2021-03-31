import styled from 'styled-components';

const StyledUploadedFileList = styled.div.attrs(() => ({
  className: 'uploaded-file-list',
}))`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;

export default StyledUploadedFileList;
