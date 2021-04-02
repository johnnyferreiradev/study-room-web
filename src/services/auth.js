import { AUTH_TOKEN_KEY } from 'settings';

const KEY_PREFIX = '@study-room/';

export const getToken = () => localStorage.getItem(AUTH_TOKEN_KEY);

export const authenticate = (data) => {
  localStorage.setItem(AUTH_TOKEN_KEY, data.token);
  localStorage.setItem(`${KEY_PREFIX}user-id`, data.id);
  localStorage.setItem(`${KEY_PREFIX}user-name`, data.name);
  localStorage.setItem(`${KEY_PREFIX}user-email`, data.email);
  localStorage.setItem(`${KEY_PREFIX}user-avatar`, data.avatar_url);
};

export const getAuthData = () => {
  const userId = localStorage.getItem(`${KEY_PREFIX}user-id`);
  const userName = localStorage.getItem(`${KEY_PREFIX}user-name`);
  const userEmail = localStorage.getItem(`${KEY_PREFIX}user-email`);
  const userAvatar = localStorage.getItem(`${KEY_PREFIX}user-avatar`);

  return {
    userId,
    userName,
    userEmail,
    userAvatar,
  };
};

export const logoff = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(`${KEY_PREFIX}user-id`);
  localStorage.removeItem(`${KEY_PREFIX}user-name`);
  localStorage.removeItem(`${KEY_PREFIX}user-email`);
};
