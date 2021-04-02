import React, { useState, useRef } from 'react';
import { FaCamera } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useOutsideEvent from 'hooks/useOutsideEvent';

import showGlobalModal from 'store/actions/modal/showGlobalModal';

import { logoff, getAuthData } from 'services/auth';

import { Button } from 'components/Buttons';
import ProfileIcon from 'components/ProfileIcon';
import Card from 'components/Card';
import ChangeProfileAvatar from 'components/ChangeProfileAvatar';

import StyledProfileMenu from './styles';

function ProfileMenu() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userName, userEmail } = getAuthData();
  const profileImage = useSelector(({ profile }) => profile.profileImage);

  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideEvent(wrapperRef, () => {
    setIsOpen(false);
  });

  const logout = () => {
    logoff();
    history.push('/');
  };

  const changeProfileAvatar = () => {
    dispatch(showGlobalModal(
      <ChangeProfileAvatar />,
    ));
  };

  return (
    <StyledProfileMenu isOpen={isOpen} ref={wrapperRef}>
      <Button theme="link" onClick={() => setIsOpen(!isOpen)}>
        <ProfileIcon profileImage={profileImage} />
      </Button>

      <Card className="suspended-content">
        <div className="profile-action">
          <ProfileIcon profileImage={profileImage} />
          <Button theme="link" className="change-profile-image" onClick={changeProfileAvatar}>
            <FaCamera />
          </Button>
        </div>
        <h3 className="txt-dark">{userName}</h3>
        <p className="txt-secondary">{userEmail}</p>
        <Button theme="link" onClick={logout}>Sair</Button>
      </Card>
    </StyledProfileMenu>
  );
}

export default ProfileMenu;
