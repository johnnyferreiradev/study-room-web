import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { updateProfileImage } from 'api/profile';

import { authenticate, getToken } from 'services/auth';

import showSnackbar from 'store/actions/snackbar/showSnackbar';
import hideGlobalModal from 'store/actions/modal/hideGlobalModal';
import setProfileImage from 'store/actions/profile/setProfileImage';

import { Button } from 'components/Buttons';
import Loading from 'components/Loading';

import StyledChangeProfileAvatar from './styles';

function ChangeProfileAvatar() {
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const preview = useMemo(() => (avatar ? URL.createObjectURL(avatar) : null), [avatar]);

  const changeProfileAvatar = () => {
    if (!avatar) {
      dispatch(showSnackbar('Você deve selecionar uma imagem', 'danger'));
      return;
    }

    setLoading(true);

    const data = new FormData();
    data.append('avatar', avatar);

    updateProfileImage(data)
      .then((response) => {
        response.data.token = getToken();

        authenticate(response.data);

        dispatch(setProfileImage(response.data.avatar_url));
        dispatch(showSnackbar('Imagem de perfil atualizada com sucesso', 'success'));
        dispatch(hideGlobalModal());
        window.location.reload();
      })
      .catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao atualizar a imagem de perfil', 'danger'));
      }).finally(() => {
        setLoading(false);
      });
  };

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
      <Button theme="primary" onClick={changeProfileAvatar}>
        {!loading ? 'Salvar' : (
          <Loading type="bubbles" height={32} width={32} fluid />
        )}
      </Button>
    </StyledChangeProfileAvatar>
  );
}

export default ChangeProfileAvatar;
