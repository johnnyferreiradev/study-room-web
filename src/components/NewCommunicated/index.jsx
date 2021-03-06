import React, { useState } from 'react';
import { FaPaperPlane, FaPlus } from 'react-icons/fa';
// import { uniqueId } from 'lodash';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Progress from 'react-progressbar';
import { uniqueId } from 'lodash';

import { uploadFile } from 'api/uploads';

import store from 'store';
import setFileList from 'store/actions/upload/setFileList';
import showGlobalModal from 'store/actions/modal/showGlobalModal';
import showSnackbar from 'store/actions/snackbar/showSnackbar';
import hideGlobalModal from 'store/actions/modal/hideGlobalModal';

import { getAuthData } from 'services/auth';

import { Button } from 'components/Buttons';
import ProfileIcon from 'components/ProfileIcon';
import TextEditor from 'components/TextEditor';
import MaterialList from 'components/MaterialList';
import Upload from 'components/Upload';
import NewLink from 'components/NewLink';
import Loading from 'components/Loading';
import { Row, Column } from 'components/Grid';
import SuspendedMenu from 'components/SuspendedMenu';

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
  const [links, setLinks] = useState([]);
  const [upload, setUpload] = useState({
    fileList: [],
    progress: 0,
    done: false,
    canceled: false,
    error: false,
  });
  const [cancellationItem, setCancellationItem] = useState({});
  const [sendLoading, setSendLoading] = useState(false);

  const sendCommunicated = (newId, contentAttachments, contentLinks) => {
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
      contentLinks,
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
      dispatch(showSnackbar('A descri????o do comunicado n??o pode ser vazia', 'danger'));
      return;
    }

    if (uploadedFiles.length >= 10) {
      dispatch(showSnackbar('Voc?? s?? pode enviar no m??ximo 9 arquivos', 'danger'));
      return;
    }

    const data = new FormData();

    uploadedFiles.forEach((item) => {
      data.append('files[]', item);
    });

    links.forEach((item) => {
      data.append('links[]', item.attachment_url);
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
        sendCommunicated(
          response.data.id,
          response.data.contentAttachments,
          response.data.contentLinks,
        );
        setUploadedFiles([]);
        setLinks([]);
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

  const addANewLink = (link) => {
    setLinks((prevLinks) => [{
      id: `${uniqueId()}${Date.now()}`,
      type: 'link',
      extension: 'link',
      attachment_url: link,
      path: link,
      deleteLoading: false,
    }, ...prevLinks]);
    dispatch(hideGlobalModal());
  };

  const newLink = () => {
    dispatch(showGlobalModal(
      <NewLink
        totalLinks={links.length}
        linksLimit={9}
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

    setLinks((lastLinks) => lastLinks
      .filter((link) => link.id !== linkId));
  };

  const removeMaterial = (materialId, materialType) => {
    if (materialType === 'link') {
      removeLink(materialId);
      return;
    }
    removeUploadedFile(materialId);
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
          materials={[...links, ...uploadedFiles]}
          onRemove={removeMaterial}
        />
      )}

      {(upload.progress === 0 || upload.canceled) && !sendLoading && (
        <Row className="actions-row">
          <Column desktop="6" tablet="6" mobile="12" className="mb-2">
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
          <Column desktop="6" tablet="6" mobile="12">
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
