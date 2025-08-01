import api from './api';

export const getEvents = async () => {
  try {
    const data = await api('/events/');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createEvent = async (eventData) => {
  try {
    const data = await api('/events/', { body: eventData });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getEventById = async (id) => {
  try {
    const data = await api(`/events/${id}/`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateEvent = async (id, eventData) => {
  try {
    const data = await api(`/events/${id}/`, {
      method: 'PUT',
      body: eventData,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const partialUpdateEvent = async (id, eventData) => {
  try {
    const data = await api(`/events/${id}/`, {
      method: 'PATCH',
      body: eventData,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteEvent = async (id) => {
  try {
    await api(`/events/${id}/`, { method: 'DELETE' });
  } catch (error) {
    throw new Error(error.message);
  }
};
