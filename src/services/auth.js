import { AUTH_TOKEN_KEY } from 'settings';

const KEY_PREFIX = '@study-room/';

export const getToken = () => localStorage.getItem(AUTH_TOKEN_KEY);

export const authenticate = (data) => {
  localStorage.setItem(AUTH_TOKEN_KEY, data.token);
  localStorage.setItem(`${KEY_PREFIX}user-id`, data.id);
  localStorage.setItem(`${KEY_PREFIX}user-name`, data.name);
  localStorage.setItem(`${KEY_PREFIX}user-email`, data.email);
};

export const logoff = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(`${KEY_PREFIX}user-id`);
  localStorage.removeItem(`${KEY_PREFIX}user-name`);
  localStorage.removeItem(`${KEY_PREFIX}user-email`);
};
