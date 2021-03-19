import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import { getToken } from 'services/auth';

import MainLayout from 'layouts/MainLayout';

const Private = ({ component: Component, ...rest }) => {
  const history = useHistory();

  if (!getToken()) {
    history.push('/');
  }

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

export default Private;
