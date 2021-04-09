import api from './api';

export const getCommunications = (classId) => api.get(`/listComunications/${classId}`);

export const createCommunicated = (data) => api.post('/storeCommunicated', data);
