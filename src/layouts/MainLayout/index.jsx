import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import StyledPublicLayout from './styles';

function PublicLayout({ children, className = '' }) {
  return (
    <StyledPublicLayout className={className}>
      <Header>Header content</Header>
      {children}
      <Footer />
    </StyledPublicLayout>
  );
}

export default PublicLayout;
