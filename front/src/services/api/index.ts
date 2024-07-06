import axiosClient from '../axiosClient';

export const get = async (url: string, params = {}) => {
  const response = await axiosClient.get(url, { params });
  return response.data;
};

export const post = async (url: string, data = {}) => {
  const response = await axiosClient.post(url, data);
  return response.data;
};
