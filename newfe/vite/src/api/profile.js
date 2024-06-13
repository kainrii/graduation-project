import axios from 'axios';

const baseURL = 'https://localhost:7049/api/TalentProfiles/';

export const fetchProfile = async (id) => {
  try {
    const response = await axios.get(`${baseURL}${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

export const updateITSkills = async (id, requestData) => {
  const putURL = `${baseURL}it-skills/${id}`;
  try {
    const response = await axios.put(putURL, requestData);
    console.log('PUT request successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending PUT request:', error);
    throw error;
  }
};
export const fetchPersonalDetails = async (id) => {
    try {
      const response = await axios.get(`${baseURL}personal-details/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching personal details:', error);
      throw error;
    }
  };