import React from 'react';
import { FaFile, FaGlobe, FaTimes } from 'react-icons/fa';

import { Button } from 'components/Buttons';

import StyledMaterial from './styles';

function Material({
  id,
  type,
  title,
  onRemove,
}) {
  return (
    <StyledMaterial>
      <div className="preview">
        {type === 'file' && (
          <FaFile />
        )}

        {type === 'link' && (
          <FaGlobe />
        )}
      </div>
      <div className="material-info">
        <h3>{title}</h3>
        <p className="txt-secondary">{type}</p>
      </div>
      <Button theme="link" onClick={() => onRemove(id)}>
        <FaTimes />
      </Button>
    </StyledMaterial>
  );
}

export default Material;
