import axios from 'axios';

const baseURL = 'https://localhost:7049/api/Job/';

export const fetchJobs = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};
