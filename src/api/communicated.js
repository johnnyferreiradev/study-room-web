import api from './api';

export const getCommunications = (classId) => api.get(`/listComunications/${classId}`);

export const createCommunicated = (classId, data) => api.post(`/communication/${classId}`, data);
