import api from './api';

export const login = async (credentials) => {
  try {
    const data = await api('/api/login/', { body: credentials });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
