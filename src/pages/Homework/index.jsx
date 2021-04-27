import React, { useState, useEffect } from 'react';
import { FaClipboardList } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { getHomework } from 'api/homeworks';
import { storeComment, deleteComment } from 'api/comments';

import { getAuthData } from 'services/auth';
import { getCurrentDateAndHourInApiFormat, checkArrear } from 'services/time';

import getStatusClassColor from 'utils/getStatusClassColor';

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
  const { userId, userAvatar, userName } = getAuthData();

  const [homeworkData, setHomeworkData] = useState(null);
  const [dateNow, setDateNow] = useState(getCurrentDateAndHourInApiFormat());
  const [homeworkResponses, setHomeworkResponses] = useState(null);
  const [commentsPrivate, setCommentsPrivate] = useState(null);
  const [loading, setLoading] = useState(true);

  const [comments, setComments] = useState([]);
  const [loadingNewComment, setLoadingNewComment] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const getStatus = () => {
    const isArrear = checkArrear(dateNow, moment(homeworkData.homework.dateLimit).format('YYYY-MM-DD HH:mm:ss'));
    let status = 'Pendente';

    if (homeworkResponses && homeworkResponses.length === 0 && isArrear) {
      status = 'Atrasada';
    }

    if (homeworkResponses && homeworkResponses.length > 0 && homeworkResponses[0].status === 'noReply' && isArrear) {
      status = 'Atrasada';
    }

    return homeworkResponses.length > 0 && homeworkResponses[0].status !== 'noReply'
      ? homeworkResponses[0].status
      : status;
  };

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
            id: userId,
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

  const removeComment = (commentId) => {
    setDeleteLoading(true);
    deleteComment(commentId)
      .then(() => {
        setComments((lastComments) => lastComments
          .filter((comment) => comment.id !== commentId));
      })
      .catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao remover o comentário. Tente novamente', 'danger'));
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getHomework(match.params.id, match.params.homeworkId)
      .then((response) => {
        setHomeworkData(response.data.activity);
        setCommentsPrivate(response.data.commentsPrivate);
        setComments(response.data.activity.commentsContents);
        setDateNow(response.data.dateNow);
        setHomeworkResponses(response.data.activity.homeworkResponses);
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
            <Column desktop="8" tablet="8" mobile="12" className="pr-2 homework-card">
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
                        {homeworkData.user && homeworkData.user.name}
                      </p>
                      <p className="txt-primary">{moment(homeworkData.created_at).format('DD/MM/YYYY HH:mm')}</p>
                    </div>
                  </Column>
                </Row>
                <Row className="info-row">
                  <Column desktop="8" tablet="8" mobile="8" className="flex">
                    <p
                      className={homeworkResponses ? getStatusClassColor(getStatus()) : 'txt-primary'}
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
                    <MaterialList materials={homeworkData.contentAttachments} />
                  </Column>
                </Row>
                <Row>
                  <Column desktop="12" tablet="12" mobile="12" className="flex">
                    <Comments
                      comments={comments}
                      onSend={addNewCommunicated}
                      onDelete={removeComment}
                      sendLoading={loadingNewComment}
                      deleteLoading={deleteLoading}
                    />
                  </Column>
                </Row>
              </Card>
            </Column>
            <Column desktop="4" tablet="4" mobile="12">
              <Answer
                deadline={homeworkData.homework.dateLimit}
                classId={match.params.id}
                homeworkId={match.params.homeworkId}
                hasText={homeworkData.homework.hasText}
                privateComments={commentsPrivate}
                status={homeworkResponses ? getStatus() : ''}
                homeworkResponse={
                  homeworkResponses && homeworkResponses.length > 0
                    ? homeworkResponses[0] : null
                }
                dateNow={dateNow}
                fullPoints={homeworkData.homework.fullPoints}
              />
            </Column>
          </>
        )}
      </Row>
    </StyledHomework>
  );
}

export default Homework;
