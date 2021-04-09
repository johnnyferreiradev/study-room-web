import api from './api';

export const storeComment = (classId, postId, comment) => api.post(`/storeComment/${classId}/${postId}`, {
  comment,
});

export const storePrivateComment = (classId, postId, comment) => api.post(`/storeCommentPrivate/${classId}/${postId}`, {
  comment,
});

export const deleteComment = (id) => api.delete(`/destroyComment/${id}`);

export const deletePrivateComment = (id) => api.delete(`/destroyCommentPrivate/${id}`);
