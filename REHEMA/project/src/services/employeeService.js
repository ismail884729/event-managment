import api from './api';

export const getEmployees = async () => {
  try {
    const data = await api('/employees/');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createEmployee = async (employeeData) => {
  try {
    const data = await api('/employees/', { body: employeeData });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getEmployeeById = async (id) => {
  try {
    const data = await api(`/employees/${id}/`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateEmployee = async (id, employeeData) => {
  try {
    const data = await api(`/employees/${id}/`, {
      method: 'PUT',
      body: employeeData,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const partialUpdateEmployee = async (id, employeeData) => {
  try {
    const data = await api(`/employees/${id}/`, {
      method: 'PATCH',
      body: employeeData,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteEmployee = async (id) => {
  try {
    await api(`/employees/${id}/`, { method: 'DELETE' });
  } catch (error) {
    throw new Error(error.message);
  }
};
