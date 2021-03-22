import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

// import Welcome from '../pages/Welcome';
import Login from 'pages/Login';
import Register from 'pages/Register';
import RecoveryPassword from 'pages/RecoveryPassword';
import RedefinePassword from 'pages/RedefinePassword';
import VerifyEmail from 'pages/VerifyEmail';
import VerifyEmailConfirm from 'pages/VerifyEmailConfirm';
import Dashboard from 'pages/Dashboard';

import Public from './public';
import Private from './private';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Public path="/" exact component={Login} />
      <Public path="/register" exact component={Register} />
      <Public path="/recovery-password" exact component={RecoveryPassword} />
      <Public path="/forgot-password" exact component={RedefinePassword} />
      <Public path="/verify-email" exact component={VerifyEmail} />
      <Public path="/check-email" exact component={VerifyEmailConfirm} />
      <Private path="/dashboard" exact component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
