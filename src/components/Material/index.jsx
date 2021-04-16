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

import { Button } from 'components/Buttons';

import StyledMaterial from './styles';

function Material({
  id,
  type,
  extension,
  typeLabel,
  material,
  onRemove,
}) {
  const fileTokenIdLimit = 36;

  return (
    <StyledMaterial>
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
      <div className="material-info">
        <h3>{material.path.replace(material.path.substring(material.path.length - fileTokenIdLimit), '')}</h3>
        <p className="txt-secondary">{typeLabel}</p>
      </div>
      {onRemove && (
        <Button theme="link" onClick={() => onRemove(id)}>
          <FaTimes />
        </Button>
      )}
    </StyledMaterial>
  );
}

export default Material;
