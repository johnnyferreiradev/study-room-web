import api from './api';

export const createALink = (classId, homeworkId, data) => api.post(`storeLinkResponse/${classId}/${homeworkId}`, data);

export const deleteLink = (responseId, linkId) => api.delete(`destroyLinkResponse/${responseId}/${linkId}`);

export const sendResponse = (classId, homeworkId, response) => api.post(`storeResponse/${classId}/${homeworkId}`, {
  response,
});

export default createALink;
