import api from './api';

export const storeComment = (classId, postId, comment) => api.post(`/storeComment/${classId}/${postId}`, {
  comment,
});

export const aaa = () => {};
