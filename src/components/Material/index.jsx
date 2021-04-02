import React from 'react';
import { FaFile, FaGlobe } from 'react-icons/fa';

import StyledMaterial from './styles';

function Material({ type, title }) {
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
    </StyledMaterial>
  );
}

export default Material;
