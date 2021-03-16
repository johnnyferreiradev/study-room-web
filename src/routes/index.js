import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

// import Welcome from '../pages/Welcome';
import Login from 'pages/Login';
import Register from 'pages/Register';
import RecoveryPassword from 'pages/RecoveryPassword';
import RedefinePassword from 'pages/RedefinePassword';

import Public from './public';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Public path="/" exact component={Login} />
      <Public path="/register" exact component={Register} />
      <Public path="/recovery-password" exact component={RecoveryPassword} />
      <Public path="/redefine-password" exact component={RedefinePassword} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
