import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';

import { storePrivateComment, deletePrivateComment } from 'api/comments';
import { uploadFile } from 'api/uploads';

import store from 'store';
import setFileList from 'store/actions/upload/setFileList';
import setCancellationList from 'store/actions/upload/setCancellationList';

import { getCurrentDateAndHourInApiFormat, checkArrear } from 'services/time';
import { getAuthData } from 'services/auth';

import getStatusClassColor from 'utils/getStatusClassColor';

import showSnackbar from 'store/actions/snackbar/showSnackbar';
import showGlobalModal from 'store/actions/modal/showGlobalModal';

import { Row, Column } from 'components/Grid';
import Card from 'components/Card';
import { Button } from 'components/Buttons';
import MaterialList from 'components/MaterialList';
import Comments from 'components/Comments';
import SuspendedMenu from 'components/SuspendedMenu';
import Upload from 'components/Upload';
import NewLink from 'components/NewLink';
import AnswerTextField from 'components/AnswerTextField';

import StyledAnswer from './styles';

function Answer({
  deadline,
  privateComments,
  classId,
  homeworkId,
  status,
}) {
  const dispatch = useDispatch();
  const currentTime = getCurrentDateAndHourInApiFormat();
  const isArrear = checkArrear(currentTime, moment(deadline).format('YYYY-MM-DD HH:mm:ss'));
  const { userId, userAvatar, userName } = getAuthData();

  // Comments logic
  const [comments, setComments] = useState(privateComments || []);
  const [sendLoading, setSendLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const addNewComment = (newComment) => {
    setSendLoading(true);
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
        setSendLoading(false);
      });
  };

  const removePrivateComment = (commentId) => {
    setDeleteLoading(true);
    deletePrivateComment(commentId)
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

  // Upload logic
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const addCancellationItem = (cancellationItem) => {
    const lastCancellationList = store.getState().upload.cancellationList;
    dispatch(setCancellationList([...lastCancellationList, cancellationItem]));
  };

  const updateFile = (data, fileId) => {
    dispatch(setFileList(
      store
        .getState()
        .upload
        .fileList
        .map((file) => (fileId === file.id ? {
          ...file,
          name: file.name,
          type: file.type,
          ...data,
        } : file)),
    ));
  };

  const removeUploadedFile = (fileId) => {
    dispatch(setFileList(
      store
        .getState()
        .upload
        .fileList
        .filter((file) => fileId !== file.id),
    ));

    setUploadedFiles((lastUploadedFiles) => lastUploadedFiles
      .filter((file) => file.id !== fileId));
  };

  const processUpload = (file) => {
    const data = new FormData();
    data.append('avatar', file);

    uploadFile(data, file.id, updateFile, addCancellationItem)
      .then(() => {
        setUploadedFiles((lastUploadedFiles) => [file, ...lastUploadedFiles]);
        updateFile({
          done: true,
        }, file.id);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          updateFile({
            error: true,
            canceled: true,
          }, file.id);

          removeUploadedFile(file.id);
          return;
        }

        updateFile({
          error: true,
        }, file.id);
      });
  };

  const cancelUpload = (fileId) => {
    const [cancellationItem] = store
      .getState()
      .upload
      .cancellationList
      .filter((item) => item.fileId === fileId);

    cancellationItem.cancel();
  };

  const newUpload = () => {
    dispatch(setFileList([]));
    dispatch(showGlobalModal(
      <Upload
        onProcess={processUpload}
        onRemove={removeUploadedFile}
        onCancel={cancelUpload}
        uploadLimit={9}
        totalUploads={uploadedFiles.length}
      />,
      true,
    ));
  };

  // Link logic
  const [links, setLinks] = useState([]);

  const newLink = () => {
    dispatch(showGlobalModal(
      <NewLink setLinks={setLinks} />,
      false,
    ));
  };

  const removeLink = (linkId) => {
    setLinks((lastLinks) => lastLinks
      .map((link) => {
        if (link.id === linkId) {
          link.deleteLoading = true;
        }
        return link;
      }));

    setLinks((lastLinks) => lastLinks
      .filter((link) => link.id !== linkId));
  };

  // Answer text field logic
  const [text, setText] = useState('');

  const removeMaterial = (materialId, materialType) => {
    if (materialType === 'link') {
      removeLink(materialId);
      return;
    }
    removeUploadedFile(materialId);
  };

  return (
    <StyledAnswer>
      <Card>
        <Row>
          <Column desktop="6" tablet="6" mobile="6" className="flex">
            <h3>Responder</h3>
          </Column>
          <Column desktop="6" tablet="6" mobile="6" className="flex j-c-end">
            <p className={getStatusClassColor(status)}>
              {status}
            </p>
          </Column>
        </Row>
        <Row className="answer-text-field-row">
          <Column desktop="12" tablet="12" mobile="12">
            <AnswerTextField value={text} onChange={(e) => setText(e.target.value)} />
          </Column>
        </Row>
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex">
            <MaterialList
              materials={[...links, ...uploadedFiles]}
              onRemove={removeMaterial}
            />
          </Column>
        </Row>
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex">
            <SuspendedMenu
              openButton={(
                <Button theme="secondary" className="add-button" fluid>
                  <FaPlus />
                  Adicionar
                </Button>
              )}
            >
              <Button theme="link" onClick={newUpload}>Arquivo</Button>
              <Button theme="link" onClick={newLink}>Link</Button>
            </SuspendedMenu>
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
              comments={comments.sort((a, b) => {
                if (a.created_at > b.created_at) {
                  return 1;
                }

                if (a.created_at < b.created_at) {
                  return -1;
                }

                return 0;
              })}
              placeholder="Novo comentário para o professor"
              onSend={addNewComment}
              onDelete={removePrivateComment}
              sendLoading={sendLoading}
              deleteLoading={deleteLoading}
            />
          </Column>
        </Row>
      </Card>
    </StyledAnswer>
  );
}

export default Answer;
