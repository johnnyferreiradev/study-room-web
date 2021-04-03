import React, { useState, useEffect } from 'react';
import { FaClipboardList } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { getHomework } from 'api/homeworks';
import { storeComment } from 'api/comments';

import { getAuthData } from 'services/auth';
import { getCurrentDateAndHourInApiFormat, checkArrear } from 'services/time';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import { Row, Column } from 'components/Grid';
import Card from 'components/Card';
import ProfileIcon from 'components/ProfileIcon';
import MaterialList from 'components/MaterialList';
import Comments from 'components/Comments';
import Answer from 'components/Answer';
import Loading from 'components/Loading';

import StyledHomework from './styles';

function Homework({ match }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userAvatar, userName } = getAuthData();

  const currentTime = getCurrentDateAndHourInApiFormat();

  const [homeworkData, setHomeworkData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [loadingNewComment, setLoadingNewComment] = useState(false);

  const addNewCommunicated = (newComment) => {
    setLoadingNewComment(true);
    storeComment(match.params.id, match.params.homeworkId, newComment.comment)
      .then((response) => {
        const comment = response.data;

        setComments((lastComments) => [...lastComments, {
          id: comment.id,
          comment: comment.comment,
          created_at: comment.created_at,
          user: {
            avatar_url: userAvatar,
            name: userName,
          },
        }]);
      })
      .catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao adicionar um comentário. Tente novamente.', 'danger'));
      }).finally(() => {
        setLoadingNewComment(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getHomework(match.params.id, match.params.homeworkId)
      .then((response) => {
        setHomeworkData(response.data);
        setComments(response.data.commentsContents);
      })
      .catch(({ response }) => {
        const [error] = response.data;

        if (error.field === 'activity' && error.validation === 'content') {
          history.push('/page-not-found');
        } else {
          dispatch(showSnackbar('Ocorreu um erro ao carregar a atividade. Tente novamente mais tarde', 'danger'));
          history.push('/page-not-found');
        }
      }).finally(() => {
        setLoading(false);
      });
  }, [match.params.id, match.params.homeworkId, dispatch, history]);

  return (
    <StyledHomework>
      <Row>
        {loading && (
          <Loading type="bubbles" height={96} width={96} fluid color="#8CC8F3" />
        )}

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
                    <p
                      className={
                        checkArrear(
                          currentTime,
                          moment(homeworkData.homework.dateLimit)
                            .format('YYYY-MM-DD HH:mm:ss'),
                        ) ? 'txt-danger' : 'txt-primary'
                      }
                    >
                      <span className="txt-secondary">Data de entrega: </span>
                      {moment(homeworkData.homework.dateLimit).format('DD/MM/YYYY HH:mm')}
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
                    <Comments
                      comments={comments}
                      onSend={addNewCommunicated}
                      loading={loadingNewComment}
                    />
                  </Column>
                </Row>
              </Card>
            </Column>
            <Column desktop="4" tablet="4" mobile="4">
              <Answer deadline={homeworkData.homework.dateLimit} />
            </Column>
          </>
        )}
      </Row>
    </StyledHomework>
  );
}

export default Homework;
