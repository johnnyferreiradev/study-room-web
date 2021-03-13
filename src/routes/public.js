import React from 'react';
import { Route } from 'react-router-dom';

// import PublicLayout from 'layouts/PublicLayout';
import MainLayout from 'layouts/MainLayout';

const Public = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <MainLayout>
        <Component {...matchProps} />
      </MainLayout>
    )}
  />
);

export default Public;
