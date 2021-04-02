import api from './api';

export const getHomeworks = (classId) => api.get(`/listActivities/${classId}`);

export const getHomework = (classId, homeworkId) => api.get(`/showActivity/${classId}/${homeworkId}`);
