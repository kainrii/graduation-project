import axios from 'axios';

const BASE_URL = 'https://localhost:7049/api/Users'; 

export const login = async (id,username, password,infoID) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { id, username, password,infoID });
    return response.data;
  } catch (error) {
    throw new Error('Login failed. Please check your credentials.');
  }
};

export const register = async (id,username, password,role, isActive,infoID) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, { id, username, password,infoID });
    return response.data;
  } catch (error) {
    throw new Error('Register failed. Please check your credentials.');
  }
};


