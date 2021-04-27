import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';

import { storePrivateComment, deletePrivateComment } from 'api/comments';
import { uploadAnswerFile, deleteUploadedFile } from 'api/uploads';
import { deleteLink, createALink, sendResponse } from 'api/answer';

import store from 'store';
import setFileList from 'store/actions/upload/setFileList';
import setCancellationList from 'store/actions/upload/setCancellationList';
import hideGlobalModal from 'store/actions/modal/hideGlobalModal';

import { checkArrear } from 'services/time';
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
import Loading from 'components/Loading';
import ConfirmSendResponse from 'components/ConfirmSendResponse';

import StyledAnswer from './styles';

function Answer({
  deadline,
  privateComments,
  classId,
  homeworkId,
  status,
  hasText,
  homeworkResponse,
  dateNow,
  fullPoints,
}) {
  const dispatch = useDispatch();
  const isArrear = checkArrear(dateNow, moment(deadline).format('YYYY-MM-DD HH:mm:ss'));
  const { userId, userAvatar, userName } = getAuthData();

  // Comments logic
  const [comments, setComments] = useState(privateComments || []);
  const [sendLoading, setSendLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(status);
  const [deliveryDate, setDeliveryDate] = useState(homeworkResponse
    ? homeworkResponse.deliveryDate : null);

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
  const [uploadedFiles, setUploadedFiles] = useState(homeworkResponse
    ? homeworkResponse.responseAttachments
    : []);

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

    setUploadedFiles((lastUploadedFiles) => lastUploadedFiles.map((file) => (fileId === file.id ? {
      ...file,
      name: file.name,
      type: file.type,
      ...data,
    } : file)));
  };

  const removeUploadedFileFromList = (fileId) => {
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

  const removeUploadedFile = (fileId) => {
    dispatch(setFileList(
      store
        .getState()
        .upload
        .fileList
        .map((file) => (fileId === file.id ? { ...file, deleteLoading: true } : file)),
    ));

    setUploadedFiles((lastFiles) => lastFiles
      .map((file) => {
        if (file.id === fileId) {
          file.deleteLoading = true;
        }
        return file;
      }));

    deleteUploadedFile(homeworkResponse.id, fileId)
      .then(() => {
        removeUploadedFileFromList(fileId);
      })
      .catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao remover o arquivo. Tente novamente', 'danger'));

        setUploadedFiles((lastFiles) => lastFiles
          .map((file) => {
            if (file.id === fileId) {
              file.deleteLoading = false;
            }
            return file;
          }));
      });
  };

  const processUpload = (file) => {
    const data = new FormData();
    data.append('file', file);

    uploadAnswerFile(data, file.id, updateFile, addCancellationItem, classId, homeworkId)
      .then((response) => {
        setUploadedFiles((lastUploadedFiles) => [file, ...lastUploadedFiles]);
        updateFile({
          id: response.data.id,
          done: true,
        }, file.id);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          updateFile({
            error: true,
            canceled: true,
          }, file.id);

          removeUploadedFileFromList(file.id);
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
  const [links, setLinks] = useState(homeworkResponse ? homeworkResponse.responseLinks : []);

  const addANewLink = (link) => {
    createALink(classId, homeworkId, {
      link,
    })
      .then((response) => {
        setLinks((prevLinks) => [{
          id: response.data.id,
          type: 'link',
          extension: 'link',
          attachment_url: link,
          path: link,
          deleteLoading: false,
        }, ...prevLinks]);
      })
      .catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao adionar o link. Tente novamente', 'danger'));
      })
      .finally(() => {
        dispatch(hideGlobalModal());
      });
  };

  const newLink = () => {
    dispatch(showGlobalModal(
      <NewLink
        classId={classId}
        homeworkId={homeworkId}
        onSend={addANewLink}
      />,
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

    deleteLink(homeworkResponse.id, linkId)
      .then(() => {
        setLinks((lastLinks) => lastLinks
          .filter((link) => link.id !== linkId));
      })
      .catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao remover o link. Tente novamente', 'danger'));

        setLinks((lastLinks) => lastLinks
          .map((link) => {
            if (link.id === linkId) {
              link.deleteLoading = false;
            }
            return link;
          }));
      });
  };

  // Answer text field logic
  const [text, setText] = useState(homeworkResponse && homeworkResponse.response ? homeworkResponse.response : '');
  const [sendResponseLoading, setSendReponseLoading] = useState(false);

  const answer = () => {
    dispatch(hideGlobalModal());
    setSendReponseLoading(true);

    sendResponse(classId, homeworkId, text === '' ? null : text)
      .then((response) => {
        dispatch(showSnackbar('Resposta enviada com sucesso', 'success'));

        setAnswerStatus(response.data.status);
        setDeliveryDate(response.data.deliveryDate);
      })
      .catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao enviar a resposta. Tente novamente', 'danger'));
      })
      .finally(() => {
        setSendReponseLoading(false);
      });
  };

  const handleConfirmAnswer = () => {
    if (!hasText || text !== '') {
      answer();
      return;
    }

    dispatch(showGlobalModal(
      <ConfirmSendResponse
        title="Resposta vazia"
        subtitle="Deseja entregar a atividade sem uma resposta?"
      >
        <Button theme="primary" onClick={() => answer()}>Entregar</Button>
        <Button theme="secondary" onClick={() => dispatch(hideGlobalModal())}>Cancelar</Button>
      </ConfirmSendResponse>,
    ));
  };

  const removeMaterial = (materialId, materialType) => {
    if (materialType === 'link') {
      removeLink(materialId);
      return;
    }
    removeUploadedFile(materialId);
  };

  const isDisabled = () => answerStatus !== 'Pendente' && answerStatus !== 'Atrasada';

  return (
    <StyledAnswer>
      <Card>
        <Row>
          <Column desktop="6" tablet="6" mobile="6" className="flex">
            <h3>Resposta</h3>
          </Column>
          <Column desktop="6" tablet="6" mobile="6" className="flex j-c-end">
            <p className={getStatusClassColor(answerStatus)}>
              {answerStatus}
            </p>
          </Column>
        </Row>
        {isDisabled() && (
          <Row>
            <Column desktop="6" tablet="6" mobile="6" className="flex f-column j-c-start a-i-start delivery-date">
              <p className="txt-secondary">Entregue em:</p>
              <p className="txt-primary">{moment(deliveryDate).format('DD/MM/YYYY HH:mm')}</p>
            </Column>

            {answerStatus === 'Corrigida' && (
              <Column desktop="6" tablet="6" mobile="6" className="flex j-c-end a-i-end points">
                <p>
                  {homeworkResponse.note}
                  /
                  {fullPoints}
                </p>
              </Column>
            )}
          </Row>
        )}
        {hasText && (
          <Row className="answer-text-field-row">
            <Column desktop="12" tablet="12" mobile="12">
              <AnswerTextField
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={isDisabled()}
              />
            </Column>
          </Row>
        )}
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex">
            <MaterialList
              materials={[...links, ...uploadedFiles]}
              onRemove={removeMaterial}
              disabledRemove={isDisabled()}
            />
          </Column>
        </Row>
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex">
            <SuspendedMenu
              openButton={(
                <Button
                  theme="secondary"
                  className={`add-button ${isDisabled() ? 'disabled' : ''}`}
                  fluid
                  disabled={isDisabled()}
                >
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
            <Button
              theme="primary"
              fluid
              disabled={isDisabled()}
              className={`${isDisabled() ? 'disabled' : ''} send-button`}
              onClick={() => handleConfirmAnswer()}
            >
              {!isDisabled() && !sendResponseLoading && (
                isArrear ? 'Enviar com atraso' : 'Enviar'
              )}

              {isDisabled() && !sendResponseLoading && (
                checkArrear(moment(deliveryDate).format('DD/MM/YYYY HH:mm'), moment(deadline).format('YYYY-MM-DD HH:mm:ss')) ? 'Enviado' : 'Enviado'
              )}

              {sendResponseLoading && (
                <Loading type="bubbles" height={32} width={32} fluid />
              )}
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
