import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { FaPaperPlane } from 'react-icons/fa';
import { uniqueId } from 'lodash';

import { getAuthData } from 'services/auth';

import { Button } from 'components/Buttons';
import ProfileIcon from 'components/ProfileIcon';

import StyledNewCommunicated from './styles';

function NewCommunicated({
  list,
  onSend,
}) {
  const { userName, userAvatar } = getAuthData();

  const [newCommunicated, setNewCommunicated] = useState('');
  const [inFocus, setInFocus] = useState(false);

  const handleNewCommunicated = (event) => {
    setNewCommunicated(event.target.value);
  };

  const sendCommunicated = () => {
    setNewCommunicated('');

    onSend([{
      id: uniqueId(),
      user: {
        name: userName,
        avatar_url: userAvatar,
      },
      deadline: '30 de fev.',
      description: newCommunicated,
    }, ...list]);

    setInFocus(false);
  };

  const handleOnBlur = () => {
    if (newCommunicated === '') {
      setInFocus(false);
    }
  };

  return (
    <StyledNewCommunicated className="card" inFocus={inFocus}>
      <div className="flex a-i-center mb-2">
        <ProfileIcon profileImage={userAvatar} />
        <div className="profile">
          <h3>{userName}</h3>
        </div>
      </div>
      <form>
        <TextareaAutosize
          maxLength="255"
          placeholder="Adicione um novo comunicado para a turma"
          value={newCommunicated}
          onChange={(e) => handleNewCommunicated(e)}
          onFocus={() => setInFocus(true)}
          onBlur={() => handleOnBlur()}
        />
        <Button theme="link" onClick={sendCommunicated}>
          <FaPaperPlane />
        </Button>
      </form>
    </StyledNewCommunicated>
  );
}

export default NewCommunicated;
