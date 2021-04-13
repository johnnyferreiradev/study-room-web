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
}) {
  return (
    <StyledUploadedFile error={file.error}>
      <Row className="a-i-center">
        <Column desktop="4" tablet="4" mobile="4" className="flex a-i-center">
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
            <h3>{file.name}</h3>
            <p className="txt-secondary">{typeLabel}</p>
          </div>
        </Column>
        <Column desktop="5" tablet="5" mobile="5">
          {!file.done && !file.error && (
            <div className="progressbar-area p-2">
              <Progress completed={file.progress} className="progressbar" />
            </div>
          )}
        </Column>
        <Column desktop="3" tablet="3" mobile="3" className="flex a-i-center j-c-center p-2">
          {file.done && (
            <>
              <p className="txt-success success">
                <FaCheck />
                Pronto
              </p>
              <Button theme="link" className="danger" onClick={() => onRemove(file.id)}>
                <FaTrashAlt />
                Remover
              </Button>
            </>
          )}

          {!file.done && !file.error && (
            <Button theme="link" className="danger" onClick={() => onCancel(file.id)}>
              <FaTimes />
              Cancelar
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
