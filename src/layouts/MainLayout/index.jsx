import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Card from 'components/Card';

import StyledPublicLayout from './styles';

function PublicLayout({ children, className = '' }) {
  return (
    <StyledPublicLayout className={className}>
      <Header>Header content</Header>
      {children}
      <Footer />
      <Card className="mt-3" width="max-content">
        <h1>Teste</h1>
        <p className="txt-primary">teste</p>
        <p className="txt-secondary">teste</p>
        <p className="txt-placeholder">teste</p>

        <input type="text" />
        <textarea name="" id="" cols="30" rows="10" />
        <input type="checkbox" />
        <input type="radio" />
        <select name="" id="">
          <option value="">op1</option>
          <option value="">op2</option>
        </select>
      </Card>
    </StyledPublicLayout>
  );
}

export default PublicLayout;
