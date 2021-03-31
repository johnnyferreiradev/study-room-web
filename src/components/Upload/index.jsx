import React from 'react';
import Dropzone from 'react-dropzone';

import { Row, Column } from 'components/Grid';
import { Button } from 'components/Buttons';
import UploadedFileList from 'components/UploadedFileList';

import StyledUpload from './styles';

function Upload() {
  const handleUploadedFiles = () => {

  };

  return (
    <StyledUpload>
      <Row>
        <Column desktop="12" tablet="12" mobile="12">
          <Dropzone
            onDrop={(acceptedFiles) => handleUploadedFiles(acceptedFiles)}
            className="dropzone"
          >
            {({ getRootProps, getInputProps }) => (
              <div className="section">
                <div
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <p className="txt-secondary">Arraste e solte seus arquivos aqui</p>
                  <p className="txt-secondary">ou</p>
                  <Button theme="secondary">
                    Selecione seus arquivos
                  </Button>
                </div>
              </div>
            )}
          </Dropzone>
        </Column>
      </Row>
      <Row>
        <Column desktop="12" tablet="12" mobile="12">
          <UploadedFileList />
        </Column>
      </Row>
      <Row className="j-c-end">
        <Button theme="primary">
          Concluir
        </Button>
      </Row>
    </StyledUpload>
  );
}

export default Upload;
