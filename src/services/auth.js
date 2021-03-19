import { AUTH_TOKEN_KEY } from 'settings';

export const getToken = () => localStorage.getItem(AUTH_TOKEN_KEY);

export const authenticate = (token) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
};

export const logoff = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};
