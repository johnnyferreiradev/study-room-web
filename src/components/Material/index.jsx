import React from 'react';
import { FaFile, FaGlobe } from 'react-icons/fa';

import StyledMaterial from './styles';

function Material({ type }) {
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
        <h3>Name</h3>
        <p className="txt-secondary">Tipo ou link</p>
      </div>
    </StyledMaterial>
  );
}

export default Material;
