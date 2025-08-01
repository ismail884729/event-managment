import api from './api';

export const getStudents = async () => {
  try {
    const data = await api('/students/');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createStudent = async (studentData) => {
  try {
    const data = await api('/students/', { body: studentData });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getStudentById = async (id) => {
  try {
    const data = await api(`/students/${id}/`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateStudent = async (id, studentData) => {
  try {
    const data = await api(`/students/${id}/`, {
      method: 'PUT',
      body: studentData,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const partialUpdateStudent = async (id, studentData) => {
  try {
    const data = await api(`/students/${id}/`, {
      method: 'PATCH',
      body: studentData,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteStudent = async (id) => {
  try {
    await api(`/students/${id}/`, { method: 'DELETE' });
  } catch (error) {
    throw new Error(error.message);
  }
};
