import axios from 'axios';

const API_URL = 'http://localhost:7049'; 

const AuthorService = {
  // Lấy danh sách tất cả các tác giả từ backend
  getAllusers: async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      return response.data;
    } catch (error) {
      console.error('Error while fetching users:', error);
      throw error;
    }
  },


  getuserById: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error while fetching user with ID ${userId}:`, error);
      throw error;
    }
  },

  createuser: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/users`, userData);
      return response.data;
    } catch (error) {
      console.error('Error while creating user:', error);
      throw error;
    }
  },

  updateuser: async (userId, userData) => {
    try {
      const response = await axios.put(`${API_URL}/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error(`Error while updating user with ID ${userId}:`, error);
      throw error;
    }
  },

  deleteuser: async (userId) => {
    try {
      await axios.delete(`${API_URL}/users/${userId}`);
    } catch (error) {
      console.error(`Error while deleting user with ID ${userId}:`, error);
      throw error;
    }
  },
};

export default AuthorService;
