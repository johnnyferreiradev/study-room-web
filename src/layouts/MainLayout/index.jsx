import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import hideGlobalModal from 'store/actions/modal/hideGlobalModal';
import setProfileImage from 'store/actions/profile/setProfileImage';

import { getAuthData } from 'services/auth';

import Header from 'components/Header';
import Snackbar from 'components/Snackbar';
import Modal from 'components/Modal';

import StyledMainLayout from './styles';

function MainLayout({ children, className = '' }) {
  const dispatch = useDispatch();

  const snackbar = useSelector((state) => state.snackbar);
  const modal = useSelector((state) => state.modal);

  const handleModalClose = () => {
    dispatch(hideGlobalModal());
  };

  useEffect(() => {
    const profileData = getAuthData();
    dispatch(setProfileImage(profileData.userAvatar));
  }, [dispatch]);

  return (
    <StyledMainLayout className={className}>
      <Header>Header content</Header>
      {children}

      {snackbar.showSnackbar && (
        <Snackbar
          message={snackbar.message}
          theme={snackbar.theme}
          timeout={snackbar.timeout}
        />
      )}

      {modal.showGlobalModal && (
        <Modal large={modal.large} onClose={handleModalClose}>
          {modal.modalContent}
        </Modal>
      )}
    </StyledMainLayout>
  );
}

export default MainLayout;
