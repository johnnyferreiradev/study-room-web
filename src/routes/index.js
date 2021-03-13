import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Public from './public';

// import Welcome from '../pages/Welcome';
import Login from '../pages/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Public path="/" exact component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
