import api from './api';

export const uploadFile = (data, fileId, onUpdateFile = () => {}) => api.put('/user', data, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  onUploadProgress: (e) => {
    const progress = parseInt(Math.round((e.loaded * 100) / e.total), 10);
    onUpdateFile(fileId, {
      progress,
    });
  },
});

export default uploadFile;
