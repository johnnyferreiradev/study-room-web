import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { storePrivateComment } from 'api/comments';

import { getCurrentDateAndHourInApiFormat, checkArrear } from 'services/time';
import { getAuthData } from 'services/auth';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import { Row, Column } from 'components/Grid';
import Card from 'components/Card';
import { Button } from 'components/Buttons';
import MaterialList from 'components/MaterialList';
import Comments from 'components/Comments';
import AnswerMenu from 'components/AnswerMenu';

import StyledAnswer from './styles';

function Answer({
  deadline,
  privateComments,
  classId,
  homeworkId,
}) {
  const dispatch = useDispatch();
  const currentTime = getCurrentDateAndHourInApiFormat();
  const isArrear = checkArrear(currentTime, moment(deadline).format('YYYY-MM-DD HH:mm:ss'));
  const { userId, userAvatar, userName } = getAuthData();

  const [comments, setComments] = useState(privateComments || []);
  const [loading, setLoading] = useState(false);

  const addNewComment = (newComment) => {
    setLoading(true);
    storePrivateComment(classId, homeworkId, newComment.comment)
      .then((response) => {
        const comment = response.data;

        setComments(() => [...comments, {
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
        setLoading(false);
      });
  };

  return (
    <StyledAnswer>
      <Card>
        <Row>
          <Column desktop="6" tablet="6" mobile="6" className="flex">
            <h3>Responder</h3>
          </Column>
          <Column desktop="6" tablet="6" mobile="6" className="flex j-c-end">
            <p className={isArrear ? 'txt-danger' : 'txt-primary'}>
              Pendente
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
            <AnswerMenu />
          </Column>
        </Row>
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex">
            <Button theme="primary" fluid>
              {isArrear ? 'Enviar com atraso' : 'Enviar'}
            </Button>
          </Column>
        </Row>
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex">
            <Comments
              comments={comments}
              onSend={addNewComment}
              placeholder="Novo comentário para o professor"
              loading={loading}
              isPrivate
            />
          </Column>
        </Row>
      </Card>
    </StyledAnswer>
  );
}

export default Answer;
