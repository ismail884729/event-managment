import api from './api';

export const getUsers = async () => {
  try {
    const data = await api('/users/');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createUser = async (userData) => {
  try {
    const data = await api('/users/', { body: userData });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserById = async (id) => {
  try {
    const data = await api(`/users/${id}/`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUser = async (id, userData) => {
  try {
    const data = await api(`/users/${id}/`, {
      method: 'PUT',
      body: userData,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const partialUpdateUser = async (id, userData) => {
  try {
    const data = await api(`/users/${id}/`, {
      method: 'PATCH',
      body: userData,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    await api(`/users/${id}/`, { method: 'DELETE' });
  } catch (error) {
    throw new Error(error.message);
  }
};
