import api from './api';

export const getOpportunities = async () => {
  try {
    const data = await api('/opportunities/');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createOpportunity = async (opportunityData) => {
  try {
    const data = await api('/opportunities/', { body: opportunityData });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getOpportunityById = async (id) => {
  try {
    const data = await api(`/opportunities/${id}/`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateOpportunity = async (id, opportunityData) => {
  try {
    const data = await api(`/opportunities/${id}/`, {
      method: 'PUT',
      body: opportunityData,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const partialUpdateOpportunity = async (id, opportunityData) => {
  try {
    const data = await api(`/opportunities/${id}/`, {
      method: 'PATCH',
      body: opportunityData,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteOpportunity = async (id) => {
  try {
    await api(`/opportunities/${id}/`, { method: 'DELETE' });
  } catch (error) {
    throw new Error(error.message);
  }
};
