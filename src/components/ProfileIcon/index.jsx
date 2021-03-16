import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

import StyledProfileIcon from './styles';

const DefaultProfileIcon = () => (
  <div className="default-profie-icon">
    <FaUserAlt />
  </div>
);

function ProfileIcon({ profileImage }) {
  return (
    <StyledProfileIcon>
      {profileImage ? (
        <img src={profileImage} alt="Perfil" />
      ) : (
        <DefaultProfileIcon />
      )}
    </StyledProfileIcon>
  );
}

export default ProfileIcon;
