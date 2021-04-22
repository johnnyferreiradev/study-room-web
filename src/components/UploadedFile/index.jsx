import React from 'react';
import {
  FaFile,
  FaCheck,
  FaTrashAlt,
  FaTimes,
  FaFileAlt,
  FaFileVideo,
  FaFileImage,
  FaFileAudio,
} from 'react-icons/fa';
import Progress from 'react-progressbar';

import { Row, Column } from 'components/Grid';
import { Button } from 'components/Buttons';

import StyledUploadedFile from './styles';

function UploadedFile({
  file,
  type,
  typeLabel,
  onRemove,
  onCancel,
  singleUpload,
}) {
  return (
    <StyledUploadedFile error={file.error}>
      <Row className="a-i-center">
        <Column desktop="4" tablet="4" mobile="8" className="flex a-i-center">
          <div className="preview">
            {type === 'application' && (
              <FaFile />
            )}

            {type === 'video' && (
              <FaFileVideo />
            )}

            {type === 'text' && (
              <FaFileAlt />
            )}

            {type === 'image' && (
              <FaFileImage />
            )}

            {type === 'audio' && (
              <FaFileAudio />
            )}

            {type === 'file' && (
              <FaFile />
            )}
          </div>
          <div className="uploaded-file-info">
            <h3>{file.path}</h3>
            <p className="txt-secondary">{typeLabel}</p>
          </div>
        </Column>
        <Column desktop="5" tablet="5" mobile="2">
          {!file.done && !file.error && !singleUpload && (
            <div className="progressbar-area p-2">
              <Progress completed={file.progress} className="progressbar" />
            </div>
          )}
        </Column>
        <Column desktop="3" tablet="3" mobile="2" className="flex a-i-center j-c-center p-2">
          {file.done && (
            <>
              <p className="txt-success success">
                <FaCheck />
                <span>Pronto</span>
              </p>
              <Button theme="link" className="danger" onClick={() => onRemove(file.id)}>
                <FaTrashAlt />
                <span>Remover</span>
              </Button>
            </>
          )}

          {singleUpload && (
            <Button theme="link" className="danger" onClick={() => onRemove(file.id)}>
              <FaTrashAlt />
              <span>Remover</span>
            </Button>
          )}

          {!file.done && !file.error && !singleUpload && (
            <Button theme="link" className="danger" onClick={() => onCancel(file.id)}>
              <FaTimes />
              <span>Cancelar</span>
            </Button>
          )}

          {file.error && (
            <p className="txt-danger">Falha no envio</p>
          )}
        </Column>
      </Row>
    </StyledUploadedFile>
  );
}

export default UploadedFile;
