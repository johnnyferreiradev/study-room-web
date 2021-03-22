import api from './api';

export const login = (email, password) => api.post('/auth/', {
  email,
  password,
});

export const register = (name, email, password) => api.post('/user', {
  name,
  email,
  password,
  password_confirmation: password,
});

export const recoveryPassword = (email) => api.post('/forgotPassword', {
  email,
});

export const redefinePassword = (token, password) => api.put('/resetPassword', {
  token,
  password,
  password_confirmation: password,
});

export const checkEmail = (token) => api.put('/checkEmail', {
  token,
});
