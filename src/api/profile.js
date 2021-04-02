import api from './api';

export const updateProfileImage = (data) => api.put('/user', data, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const aaa = () => {};
