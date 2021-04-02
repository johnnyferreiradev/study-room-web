import React, { useState, useEffect } from 'react';
import { FaClipboardList } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { getHomework } from 'api/homeworks';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import { Row, Column } from 'components/Grid';
import Card from 'components/Card';
import ProfileIcon from 'components/ProfileIcon';
import MaterialList from 'components/MaterialList';
import Comments from 'components/Comments';
import Answer from 'components/Answer';

import StyledHomework from './styles';

function Homework({ match }) {
  const dispatch = useDispatch();

  const [homeworkData, setHomeworkData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getHomework(match.params.id, match.params.homeworkId)
      .then((response) => {
        setHomeworkData(response.data);
        console.log(response.data);
      })
      .catch(() => {
        // const [error] = response.data;

        // if (error.field === 'classroom' && error.validation === 'not found') {
        //   dispatch(showSnackbar('Este E-mail já está sendo utilizado', 'danger'));
        // }

        dispatch(showSnackbar('Ocorreu um erro ao carregar a atividade. Tente novamente mais tarde', 'danger'));
        setHomeworkData(null);
      }).finally(() => {
        setLoading(false);
      });
  }, [match.params.id, match.params.homeworkId, dispatch]);

  return (
    <StyledHomework>
      <Row>
        {!loading && (
          <>
            <Column desktop="8" tablet="8" mobile="8" className="pr-2">
              <Card>
                <Row>
                  <Column desktop="12" tablet="12" mobile="12" className="flex mb-1">
                    <ProfileIcon
                      icon={(
                        <FaClipboardList />
                      )}
                    />
                    <div className="homework-info">
                      <h3>{homeworkData.title}</h3>
                      <p className="txt-secondary">
                        <span>Por: </span>
                        {homeworkData.user.name}
                      </p>
                    </div>
                  </Column>
                </Row>
                <Row className="info-row">
                  <Column desktop="8" tablet="8" mobile="8" className="flex">
                    <p className="txt-primary">
                      <span className="txt-secondary">Data de entrega: </span>
                      {moment(homeworkData.homework.dateLimit).format('MM/DD/YYYY HH:mm')}
                    </p>
                  </Column>
                  <Column desktop="4" tablet="4" mobile="4" className="flex j-c-end">
                    {homeworkData.homework.fullPoints}
                    &nbsp;
                    pontos
                  </Column>
                </Row>
                <Row className="statement">
                  <Column desktop="12" tablet="12" mobile="12" className="flex">
                    <p className="txt-secondary">
                      {homeworkData.description}
                    </p>
                  </Column>
                </Row>
                <Row>
                  <Column desktop="12" tablet="12" mobile="12" className="flex">
                    <MaterialList />
                  </Column>
                </Row>
                <Row>
                  <Column desktop="12" tablet="12" mobile="12" className="flex">
                    <Comments comments={homeworkData.commentsContents} onSend={() => {}} />
                  </Column>
                </Row>
              </Card>
            </Column>
            <Column desktop="4" tablet="4" mobile="4">
              <Answer />
            </Column>
          </>
        )}
      </Row>
    </StyledHomework>
  );
}

export default Homework;
