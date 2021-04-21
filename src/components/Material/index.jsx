import React from 'react';
import {
  FaFile,
  FaGlobe,
  FaTimes,
  FaFileAlt,
  FaFileVideo,
  FaFileImage,
  FaFileAudio,
} from 'react-icons/fa';

import removeApiIdFromFileName from 'utils/removeApiIdFromFileName';

import { Button, AnchorButton } from 'components/Buttons';
import Loading from 'components/Loading';

import StyledMaterial from './styles';

function Material({
  id,
  type,
  typeLabel,
  material,
  onRemove,
}) {
  return (
    <StyledMaterial>
      <AnchorButton href={material.attachment_url} target="_blank">
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

          {type === 'link' && (
            <FaGlobe />
          )}
        </div>
      </AnchorButton>
      <div className="material-info">
        <AnchorButton href={material.attachment_url} target="_blank">
          <h3>{removeApiIdFromFileName(material.path)}</h3>
        </AnchorButton>
        <p className="txt-secondary">{typeLabel}</p>
      </div>
      {onRemove && (
        !material.deleteLoading ? (
          <Button theme="link" onClick={() => onRemove(id, type)}>
            <FaTimes />
          </Button>
        ) : (
          <Button theme="link">
            <Loading type="bubbles" className="button-loading" height={32} width={32} color="#8CC8F3" />
          </Button>
        )
      )}
    </StyledMaterial>
  );
}

export default Material;
