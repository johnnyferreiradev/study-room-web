import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import hideGlobalModal from 'store/actions/modal/hideGlobalModal';

import Footer from 'components/Footer';
import Snackbar from 'components/Snackbar';
import Modal from 'components/Modal';

import StyledPublicLayout from './styles';

function PublicLayout({ children, className = '' }) {
  const dispatch = useDispatch();

  const snackbar = useSelector((state) => state.snackbar);
  const modal = useSelector((state) => state.modal);

  const handleModalClose = () => {
    dispatch(hideGlobalModal());
  };

  return (
    <StyledPublicLayout className={className}>
      {children}
      <Footer />

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
    </StyledPublicLayout>
  );
}

export default PublicLayout;
