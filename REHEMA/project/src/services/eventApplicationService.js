import api from './api';

export const getEventApplications = async () => {
  try {
    const data = await api('/event-applications/');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createEventApplication = async (eventApplicationData) => {
  try {
    const data = await api('/event-applications/', { body: eventApplicationData });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getEventApplicationById = async (id) => {
  try {
    const data = await api(`/event-applications/${id}/`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateEventApplication = async (id, eventApplicationData) => {
  try {
    const data = await api(`/event-applications/${id}/`, {
      method: 'PUT',
      body: eventApplicationData,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const partialUpdateEventApplication = async (id, eventApplicationData) => {
  try {
    const data = await api(`/event-applications/${id}/`, {
      method: 'PATCH',
      body: eventApplicationData,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteEventApplication = async (id) => {
  try {
    await api(`/event-applications/${id}/`, { method: 'DELETE' });
  } catch (error) {
    throw new Error(error.message);
  }
};
