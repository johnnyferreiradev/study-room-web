import api from './api';

export const getStudentClasses = () => api.get('/classroom');

export const getStudentClass = (id) => api.get(`/classroom/${id}`);

export const subscribe = (code) => api.post('/classroom/enter', {
  code,
});

export const unsubscribe = (classroomId) => api.delete(`/classroom/leaveRoom/${classroomId}`);
