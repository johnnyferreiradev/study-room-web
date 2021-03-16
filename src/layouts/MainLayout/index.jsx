import React from 'react';

import Header from 'components/Header';

import StyledMainLayout from './styles';

function MainLayout({ children, className = '' }) {
  return (
    <StyledMainLayout className={className}>
      <Header>Header content</Header>
      {children}
    </StyledMainLayout>
  );
}

export default MainLayout;
