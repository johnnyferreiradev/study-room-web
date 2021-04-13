import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { uniqueId } from 'lodash';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { uploadFile } from 'api/uploads';

import store from 'store';
import setFileList from 'store/actions/upload/setFileList';
import setCancellationList from 'store/actions/upload/setCancellationList';
import showGlobalModal from 'store/actions/modal/showGlobalModal';

import { getAuthData } from 'services/auth';

import { Button } from 'components/Buttons';
import ProfileIcon from 'components/ProfileIcon';
import TextEditor from 'components/TextEditor';
import MaterialList from 'components/MaterialList';
import Upload from 'components/Upload';
import NewLink from 'components/NewLink';
import Loading from 'components/Loading';

import StyledNewCommunicated from './styles';

function NewCommunicated({
  sendLoading,
  onSend,
  inFocus,
  setInFocus,
}) {
  const dispatch = useDispatch();
  const { userName, userAvatar } = getAuthData();

  const [newCommunicated, setNewCommunicated] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const sendCommunicated = () => {
    onSend({
      id: `${uniqueId()}${Date.now()}`,
      user: {
        name: userName,
        avatar_url: userAvatar,
      },
      deadline: '30 de fev.',
      description: newCommunicated,
    });
  };

  const addCancellationItem = (cancellationItem) => {
    const lastCancellationList = store.getState().upload.cancellationList;
    dispatch(setCancellationList([...lastCancellationList, cancellationItem]));
  };

  const updateFile = (fileId, data) => {
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
        updateFile(file.id, {
          done: true,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          updateFile(file.id, {
            error: true,
            canceled: true,
          });

          removeUploadedFile(file.id);
          return;
        }

        updateFile(file.id, {
          error: true,
        });
      });
  };

  const handleCancel = () => {
    setInFocus(false);
    setNewCommunicated('');
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
      />,
      true,
    ));
  };

  const newLink = () => {
    dispatch(showGlobalModal(
      <NewLink />,
      false,
    ));
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
            onClick={() => setInFocus(true)}
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

      <MaterialList
        materials={uploadedFiles}
        onRemove={removeUploadedFile}
      />

      {!sendLoading && (
        <div className="actions flex j-c-end a-i-center">
          <Button theme="secondary" className="mr-2" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button theme="primary" onClick={sendCommunicated}>
            <FaPaperPlane className="mr-1" />
            Publicar
          </Button>
        </div>
      )}

      {sendLoading && (
        <div className="actions flex j-c-center a-i-center">
          <Loading type="bubbles" height={32} width={32} color="#8CC8F3" />
        </div>
      )}
    </StyledNewCommunicated>
  );
}

export default NewCommunicated;
