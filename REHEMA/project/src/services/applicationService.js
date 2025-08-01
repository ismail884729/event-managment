import api from './api';

export const getApplications = async () => {
  try {
    const data = await api('/applications/');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createApplication = async (applicationData) => {
  try {
    const data = await api('/applications/', { body: applicationData });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getApplicationById = async (id) => {
  try {
    const data = await api(`/applications/${id}/`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateApplication = async (id, applicationData) => {
  try {
    const data = await api(`/applications/${id}/`, {
      method: 'PUT',
      body: applicationData,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const partialUpdateApplication = async (id, applicationData) => {
  try {
    const data = await api(`/applications/${id}/`, {
      method: 'PATCH',
      body: applicationData,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteApplication = async (id) => {
  try {
    await api(`/applications/${id}/`, { method: 'DELETE' });
  } catch (error) {
    throw new Error(error.message);
  }
};
