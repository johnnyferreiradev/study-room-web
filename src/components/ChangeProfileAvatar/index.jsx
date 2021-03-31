import React, { useState, useMemo } from 'react';

import { Button } from 'components/Buttons';

import StyledChangeProfileAvatar from './styles';

function ChangeProfileAvatar() {
  const [avatar, setAvatar] = useState(null);

  const preview = useMemo(() => (avatar ? URL.createObjectURL(avatar) : null), [avatar]);

  return (
    <StyledChangeProfileAvatar>
      <h3>Nova foto de perfil</h3>
      <label
        id="avatar"
        style={{ backgroundImage: `url(${preview})` }}
        className={avatar ? 'has-avatar' : ''}
        htmlFor="new-avatar"
      >
        <input
          type="file"
          onChange={(event) => setAvatar(event.target.files[0])}
          id="new-avatar"
        />
        <p className="txt-secondary">Clique aqui e envie a nova imagem de perfil</p>
      </label>
      <Button theme="primary">Salvar</Button>
    </StyledChangeProfileAvatar>
  );
}

export default ChangeProfileAvatar;
