import axios from 'axios';

import { BASE_URL } from 'settings';

import { getToken } from 'services/auth';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

export default api;
