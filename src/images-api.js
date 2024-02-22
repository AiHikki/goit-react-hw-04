import axios from 'axios';

const API_KEY = 'XlQHejxEb7aa8VHPbhkOCsQ5rLw_yC586ecpSv9njn0';

axios.defaults.baseURL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}`;

export const fetchImages = async (params = {}) => {
  const response = await axios.get('', {
    params,
  });
  return response.data.results;
};
