import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createALink } from 'api/answer';

import hideGlobalModal from 'store/actions/modal/hideGlobalModal';
import showSnackbar from 'store/actions/snackbar/showSnackbar';

import { Button } from 'components/Buttons';
import Loading from 'components/Loading';

import StyledNewLink from './styles';

function NewLink({
  setLinks,
  totalLinks,
  linksLimit,
  classId,
  homeworkId,
}) {
  const dispatch = useDispatch();

  const [newLink, setNewLink] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNewLinkField = ({ target }) => {
    setNewLink(target.value);
  };

  const isValidURL = (string) => {
    const res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g); // eslint-disable-line
    return (res !== null);
  };

  const addNewLink = () => {
    let linkContent = newLink;

    if (newLink.indexOf('http://') === -1 && newLink.indexOf('https://') === -1) {
      linkContent = `https://${newLink.replace('www.', '')}`;
    }

    if (!isValidURL(linkContent)) {
      dispatch(showSnackbar('URL inválida', 'danger'));
      return;
    }

    if (totalLinks >= linksLimit) {
      dispatch(showSnackbar(`Você só pode adicionar até ${linksLimit} links`, 'danger'));
      return;
    }

    setLoading(true);

    createALink(classId, homeworkId, {
      link: linkContent,
    })
      .then((response) => {
        setLinks((prevLinks) => [{
          id: response.data.id,
          type: 'link',
          extension: 'link',
          attachment_url: linkContent,
          path: linkContent,
          deleteLoading: false,
        }, ...prevLinks]);

        dispatch(hideGlobalModal());
      })
      .catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao adionar o link. Tente novamente', 'danger'));
      })
      .finally(() => {
        setLoading(false);
      });
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
          <Button theme="primary" fluid onClick={addNewLink}>
            {!loading ? 'Adicionar' : (
              <Loading
                type="bubbles"
                className="button-loading"
                height={32}
                width={32}
                fluid
              />
            )}
          </Button>
        </div>

      </div>
    </StyledNewLink>
  );
}

export default NewLink;
