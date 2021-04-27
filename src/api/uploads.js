import { CancelToken } from 'axios';
import api from './api';

export const uploadFile = (data, fileId, onUpdateFile = () => {}, onCancelList = () => {}, classId) => api.post(`/communication/${classId}`, data, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  onUploadProgress: (e) => {
    const progress = parseInt(Math.round((e.loaded * 100) / e.total), 10);
    onUpdateFile({
      progress,
    }, fileId);
  },
  cancelToken: new CancelToken((c) => {
    onCancelList({ cancel: c, fileId });
  }),
});

export const uploadAnswerFile = (data, fileId, onUpdateFile = () => {}, onCancelList = () => {}, classId, homeworkId) => api.post(`/storeAttachmentResponse/${classId}/${homeworkId}`, data, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  onUploadProgress: (e) => {
    const progress = parseInt(Math.round((e.loaded * 100) / e.total), 10);
    onUpdateFile({
      progress,
    }, fileId);
  },
  cancelToken: new CancelToken((c) => {
    onCancelList({ cancel: c, fileId });
  }),
});

export const deleteUploadedFile = (homeworkResponseId, fileId) => api.delete(`destroyAttachmentResponse/${homeworkResponseId}/${fileId}`);
