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

export const recoveryPassword = (email) => api.post('/recovery-password', {
  email,
});

export const redefinePassword = (id, password) => api.post('/redefine-password', {
  id,
  password,
});
