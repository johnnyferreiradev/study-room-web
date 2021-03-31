import React from 'react';
import {
  FaFile,
  FaGlobe,
  FaCheck,
  FaTrashAlt,
  FaTimes,
} from 'react-icons/fa';
import Progress from 'react-progressbar';

import { Row, Column } from 'components/Grid';
import { Button } from 'components/Buttons';

import StyledUploadedFile from './styles';

function UploadedFile({ type, done }) {
  return (
    <StyledUploadedFile>
      <Row className="a-i-center">
        <Column desktop="4" tablet="4" mobile="4" className="flex a-i-center">
          <div className="preview">
            {type === 'file' && (
              <FaFile />
            )}

            {type === 'link' && (
              <FaGlobe />
            )}
          </div>
          <div className="uploaded-file-info">
            <h3>Name</h3>
            <p className="txt-secondary">Tipo ou link</p>
          </div>
        </Column>
        <Column desktop="5" tablet="5" mobile="5">
          {!done && (
            <div className="progressbar-area p-2">
              <Progress completed={50} className="progressbar" />
            </div>
          )}
        </Column>
        <Column desktop="3" tablet="3" mobile="3" className="flex a-i-center j-c-center p-2">
          {done && (
            <>
              <p className="txt-success success">
                <FaCheck />
                Pronto
              </p>
              <Button theme="link" className="danger">
                <FaTrashAlt />
                Remover
              </Button>
            </>
          )}

          {!done && (
            <Button theme="link" className="danger">
              <FaTimes />
              Cancelar
            </Button>
          )}
        </Column>
      </Row>
    </StyledUploadedFile>
  );
}

export default UploadedFile;
