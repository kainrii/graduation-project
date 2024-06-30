import axios from 'axios';

const baseURL = 'https://localhost:7049/api/Company';

export const fetchCompanies = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};


