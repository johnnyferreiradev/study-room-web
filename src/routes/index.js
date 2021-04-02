import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Welcome from '../pages/Welcome';
import PageNotFound from 'pages/PageNotFound';
import Login from 'pages/Login';
import Register from 'pages/Register';
import RecoveryPassword from 'pages/RecoveryPassword';
import RedefinePassword from 'pages/RedefinePassword';
import VerifyEmail from 'pages/VerifyEmail';
import VerifyEmailConfirm from 'pages/VerifyEmailConfirm';
import Dashboard from 'pages/Dashboard';
import StudentClassPage from 'pages/StudentClassPage';
import Homeworks from 'pages/Homeworks';
import PeoplePage from 'pages/PeoplePage';
import Homework from 'pages/Homework';

import Public from './public';
import Private from './private';
import PrivateStudentClass from './privateStudentClass';

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

      <PrivateStudentClass path="/class/:id" exact component={StudentClassPage} />
      <PrivateStudentClass path="/class/:id/homeworks" exact component={Homeworks} />
      <PrivateStudentClass path="/class/:id/people" exact component={PeoplePage} />
      <PrivateStudentClass path="/class/:id/homework/:homeworkId" exact component={Homework} />

      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
