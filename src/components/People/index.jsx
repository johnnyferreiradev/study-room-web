import React from 'react';

import ProfileIcon from 'components/ProfileIcon';

import StyledPeople from './styles';

function People({ name }) {
  return (
    <StyledPeople>
      <ProfileIcon />
      <p className="txt-secondary">{name}</p>
    </StyledPeople>
  );
}

export default People;
