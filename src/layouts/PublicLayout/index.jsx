import React from 'react';

import Footer from 'components/Footer';

import StyledPublicLayout from './styles';

function PublicLayout({ children, className = '' }) {
  return (
    <StyledPublicLayout className={className}>
      {children}
      <Footer />
    </StyledPublicLayout>
  );
}

export default PublicLayout;
