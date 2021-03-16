import React from 'react';
import { useSelector } from 'react-redux';

import Footer from 'components/Footer';
import Snackbar from 'components/Snackbar';

import StyledPublicLayout from './styles';

function PublicLayout({ children, className = '' }) {
  const snackbar = useSelector((state) => state.snackbar);

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
    </StyledPublicLayout>
  );
}

export default PublicLayout;
