import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
// import { uniqueId } from 'lodash';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Progress from 'react-progressbar';

import { uploadFile } from 'api/uploads';

import store from 'store';
import setFileList from 'store/actions/upload/setFileList';
import showGlobalModal from 'store/actions/modal/showGlobalModal';
import showSnackbar from 'store/actions/snackbar/showSnackbar';

import { getAuthData } from 'services/auth';

import { Button } from 'components/Buttons';
import ProfileIcon from 'components/ProfileIcon';
import TextEditor from 'components/TextEditor';
import MaterialList from 'components/MaterialList';
import Upload from 'components/Upload';
import Loading from 'components/Loading';
import { Row, Column } from 'components/Grid';

import StyledNewCommunicated from './styles';

function NewCommunicated({
  classId,
  onSend,
  inFocus,
  setInFocus,
}) {
  const dispatch = useDispatch();
  const { userId, userName, userAvatar } = getAuthData();

  const [newCommunicated, setNewCommunicated] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [upload, setUpload] = useState({
    fileList: [],
    progress: 0,
    done: false,
    canceled: false,
    error: false,
  });
  const [cancellationItem, setCancellationItem] = useState({});
  const [sendLoading, setSendLoading] = useState(false);

  const sendCommunicated = (newId, contentAttachments) => {
    onSend({
      id: newId,
      user: {
        id: userId,
        name: userName,
        avatar_url: userAvatar,
      },
      deadline: '30 de fev.',
      description: newCommunicated,
      contentAttachments,
    });
  };

  const addCancellationItem = (item) => {
    setCancellationItem(item);
  };

  const updateUpload = (data) => {
    setUpload((lastUpload) => ({ ...lastUpload, ...data }));
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

  const handleFiles = (file) => {
    setUploadedFiles((lastUploadedFiles) => [file, ...lastUploadedFiles]);
  };

  const processUpload = () => {
    if (!newCommunicated || newCommunicated === '') {
      dispatch(showSnackbar('A descrição do comunicado não pode ser vazia', 'danger'));
      return;
    }

    if (uploadedFiles.length >= 10) {
      dispatch(showSnackbar('Você só pode enviar no máximo 9 arquivos', 'danger'));
      return;
    }

    const data = new FormData();

    uploadedFiles.forEach((item) => {
      data.append('files[]', item);
    });

    data.append('title', 'Comunicado');
    data.append('description', newCommunicated);

    setSendLoading(true);

    uploadFile(data, null, updateUpload, addCancellationItem, classId)
      .then((response) => {
        updateUpload({
          done: true,
          fileList: uploadedFiles,
        });
        sendCommunicated(response.data.id, uploadedFiles);
        setUploadedFiles([]);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          updateUpload({
            error: true,
            canceled: true,
            progress: 0,
          });
          return;
        }

        dispatch(showSnackbar('Ocorreu um erro ao publicar o comunicado. Tente novamente', 'danger'));

        updateUpload({
          error: true,
          progress: 0,
        });
      })
      .finally(() => {
        setSendLoading(false);
      });
  };

  const handleCancel = () => {
    setUploadedFiles([]);
    setInFocus(false);
    setNewCommunicated('');
  };

  const cancelUpload = () => {
    cancellationItem.cancel();
  };

  const newUpload = () => {
    dispatch(setFileList([]));
    dispatch(showGlobalModal(
      <Upload
        onProcess={handleFiles}
        onRemove={removeUploadedFile}
        onCancel={cancelUpload}
        singleUpload
      />,
      true,
    ));
  };

  const openCommunicated = () => {
    setInFocus(true);
    setUpload({
      fileList: [],
      progress: 0,
      done: false,
      canceled: false,
      error: false,
    });
  };

  return (
    <StyledNewCommunicated className="card" inFocus={inFocus}>
      <div className="flex a-i-center mb-2">
        <ProfileIcon profileImage={userAvatar} />
        <div className="profile">
          <h3>{userName}</h3>
        </div>
      </div>
      <form>
        {!inFocus && (
          <Button
            theme="link"
            onClick={() => openCommunicated(true)}
          >
            Adicione um novo comunicado para a turma
          </Button>
        )}
      </form>

      {inFocus && (
        <TextEditor
          onChange={setNewCommunicated}
          value={newCommunicated}
          disabled={sendLoading}
        />
      )}

      {!sendLoading && (upload.progress === 0 || upload.canceled) && (
        <MaterialList
          materials={uploadedFiles}
          onRemove={removeUploadedFile}
        />
      )}

      {(upload.progress === 0 || upload.canceled) && !sendLoading && (
        <Row className="actions-row">
          <Column desktop="6" tablet="6" mobile="6">
            <Button theme="secondary" className="mr-2" onClick={newUpload}>
              Anexar arquivos
            </Button>
          </Column>
          <Column desktop="6" tablet="6" mobile="6">
            {!sendLoading && (
              <div className="actions flex j-c-end a-i-center">
                <Button theme="secondary" className="mr-2" onClick={handleCancel}>
                  Cancelar
                </Button>
                <Button theme="primary" onClick={() => processUpload()}>
                  <FaPaperPlane className="mr-1" />
                  Publicar
                </Button>
              </div>
            )}
          </Column>
        </Row>
      )}

      {upload.progress > 0 && !upload.done && (
        <Row className="progress-row">
          <Column desktop="10" tablet="10" mobile="10" className="p-3 progress-column">
            <Progress completed={upload.progress} className="progressbar" />
          </Column>
          <Column desktop="2" tablet="2" mobile="2" className="flex a-i-center j-c-end">
            <Button theme="secondary" className="mr-2" onClick={cancelUpload}>
              Cancelar
            </Button>
          </Column>
        </Row>
      )}

      {sendLoading && upload.progress === 0 && (
        <div className="actions flex j-c-center a-i-center">
          <Loading type="bubbles" height={48} width={48} color="#8CC8F3" />
        </div>
      )}
    </StyledNewCommunicated>
  );
}

export default NewCommunicated;
