import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import { getToken } from 'services/auth';

import StudentClassLayout from 'layouts/StudentClassLayout';

const PrivateStudentClass = ({ component: Component, ...rest }) => {
  const history = useHistory();

  if (!getToken()) {
    history.push('/');
  }

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <StudentClassLayout params={rest.computedMatch.params}>
          <Component {...matchProps} />
        </StudentClassLayout>
      )}
    />
  );
};

export default PrivateStudentClass;
