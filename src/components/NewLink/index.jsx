import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'components/Buttons';
import Loading from 'components/Loading';

import StyledNewLink from './styles';

function NewLink() {
  // const dispatch = useDispatch();

  const [newLink, setNewLink] = useState('');
  const [loading] = useState(false);

  const handleNewLinkField = ({ target }) => {
    setNewLink(target.value);
  };

  return (
    <StyledNewLink>
      <div className="form">
        <div className="form-group mb-2">
          <label htmlFor="new-link-field">
            <p>Novo link</p>
            <input
              type="text"
              name="newLink"
              value={newLink}
              placeholder="Digite a url do link. Ex: https://meulink.com.br"
              id="new-link-field"
              onChange={handleNewLinkField}
            />
          </label>
        </div>

        <div className="form-group mb-2">
          <Button theme="primary" fluid onClick={NewLink}>
            {!loading ? 'Adicionar' : (
              <Loading type="bubbles" className="button-loading" height={32} width={32} fluid />
            )}
          </Button>
        </div>

      </div>
    </StyledNewLink>
  );
}

export default NewLink;