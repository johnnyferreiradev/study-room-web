import React from 'react';
import Dropzone from 'react-dropzone';
import { uniqueId } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

import getFileType from 'utils/getFileType';

import store from 'store';
import setFileList from 'store/actions/upload/setFileList';
import hideGlobalModal from 'store/actions/modal/hideGlobalModal';
import showSnackbar from 'store/actions/snackbar/showSnackbar';

import { Row, Column } from 'components/Grid';
import { Button } from 'components/Buttons';
import UploadedFileList from 'components/UploadedFileList';

import StyledUpload from './styles';

function Upload({
  onProcess,
  onRemove,
  onCancel,
  singleUpload,
}) {
  const dispatch = useDispatch();
  const { fileList, cancellationList } = useSelector((state) => state.upload);

  const handleUploadedFiles = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      file.customType = file.type.split('/')[0], // eslint-disable-line
      file.extension = file.type.split('/')[1]; // eslint-disable-line
      file.id = `${uniqueId()}${Date.now()}`;
      file.progress = 0;
      file.done = false;
      file.canceled = false;
      file.error = false;
      file.attachment_url = URL.createObjectURL(file);

      const { found } = getFileType(file);

      if (!found) {
        dispatch(showSnackbar(`O arquivo ${file.name} não é suportado!`, 'danger'));
        return;
      }

      if (file.size > 1000000000) {
        dispatch(showSnackbar(`O arquivo ${file.name} deve conter no máximo 1 GB!`, 'danger'));
        return;
      }

      const lastFileList = store.getState().upload.fileList;

      dispatch(setFileList([file, ...lastFileList]));
      onProcess(file);
    });
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
          <UploadedFileList
            fileList={fileList}
            cancellationList={cancellationList}
            onRemove={onRemove}
            onCancel={onCancel}
            singleUpload={singleUpload}
          />
        </Column>
      </Row>
      <Row className="j-c-end">
        <Button theme="primary" onClick={() => dispatch(hideGlobalModal())}>
          Concluir
        </Button>
      </Row>
    </StyledUpload>
  );
}

export default Upload;
