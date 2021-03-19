import api from './api';

export const login = (email, password) => api.post('/login/', {
  email,
  password,
});

export const register = (name, email, password) => api.post('/signup/email-and-password', {
  name,
  email,
  password,
});

export const recoveryPassword = (email) => api.post('/recovery-password', {
  email,
});

export const redefinePassword = (id, password) => api.post('/redefine-password', {
  id,
  password,
});
