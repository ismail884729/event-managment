const BASE_URL = process.env.REACT_APP_API_URL;

const api = async (endpoint, options = {}) => {
  const { body, ...customConfig } = options;

  const headers = {
    'Content-Type': 'application/json',
  };

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Something went wrong');
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export default api;
