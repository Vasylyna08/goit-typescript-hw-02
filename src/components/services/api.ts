import axios from 'axios';
import { ImageData } from '../../App.types';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
});

export const requestImages = async (
  query: string = '',
  page: number
): Promise<ImageData> => {
  const { data } = await instance.get<ImageData>(
    `/search/photos?client_id=2w8w9nr8CjJr2_EmItI5XAVW85REm_5iPcToHLRUhLI&page=${page}&query=${query}`
  );

  return data;
};
