import axios from 'axios';

const API_KEY = 'XlQHejxEb7aa8VHPbhkOCsQ5rLw_yC586ecpSv9njn0';

axios.defaults.baseURL = `https://api.unsplash.com/`;
axios.defaults.params = {
  client_id: API_KEY,
  per_page: 12,
};

export const fetchImages = async (params = {}) => {
  const { data } = await axios.get('search/photos/', {
    params,
  });
  return data;
};
