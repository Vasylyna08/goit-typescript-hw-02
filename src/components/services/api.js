import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
});

export const requestImages = async (query = '', page) => {
  const { data } = await instance.get(
    `/search/photos?client_id=2w8w9nr8CjJr2_EmItI5XAVW85REm_5iPcToHLRUhLI&page=${page}&query=${query}`
  );

  return data;
};
