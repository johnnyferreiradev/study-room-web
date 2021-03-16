import React from 'react';
import { Route } from 'react-router-dom';

import PublicLayout from 'layouts/PublicLayout';

const Public = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <PublicLayout>
        <Component {...matchProps} />
      </PublicLayout>
    )}
  />
);

export default Public;
