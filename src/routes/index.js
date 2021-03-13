import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Public from './public';

import Welcome from '../pages/Welcome';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Public path="/" exact component={Welcome} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
