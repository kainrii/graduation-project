import axios from 'axios';

const BASE_URL = 'https://localhost:7049/api/Users'; 

export const login = async (id,username, password,role) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { id, username, password,role });
    return response.data;
  } catch (error) {
    throw new Error('Login failed. Please check your credentials.');
  }
};


