import React from 'react';

import ProfileIcon from 'components/ProfileIcon';

import StyledPeople from './styles';

function People({ name, avatar }) {
  return (
    <StyledPeople>
      <ProfileIcon profileImage={avatar} />
      <p className="txt-secondary">{name}</p>
    </StyledPeople>
  );
}

export default People;
