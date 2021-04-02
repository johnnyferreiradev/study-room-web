import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getStudentClass } from 'api/studentClasses';

import MainLayout from 'layouts/MainLayout';

import { Container, Row, Column } from 'components/Grid';
import StudentClassHeader from 'components/StudentClassHeader';
import Loading from 'components/Loading';

import StyledStudentClassLayout from './styles';

function StudentClassLayout({ children, params }) {
  const { id: studentClassId } = params;
  const history = useHistory();

  const [studentClass, setStudentClass] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getStudentClass(studentClassId)
      .then((response) => {
        setStudentClass(response.data);
      })
      .catch(() => {
        history.push('/page-not-found');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [history, studentClassId]);

  return (
    <MainLayout>
      <StyledStudentClassLayout>
        {!loading && (
          <Container>
            <Row>
              <Column desktop="12" tablet="12" mobile="12" className="flex j-c-center a-i-center mt-3">
                <StudentClassHeader classId={studentClassId} title={studentClass.title} />
              </Column>
            </Row>
            <Row>
              <Column desktop="12" tablet="12" mobile="12" className="flex j-c-center a-i-center mt-2">
                {children}
              </Column>
            </Row>
          </Container>
        )}

        {loading && (
          <Loading type="bubbles" height={96} width={96} fluid color="#8CC8F3" />
        )}
      </StyledStudentClassLayout>
    </MainLayout>
  );
}

export default StudentClassLayout;
