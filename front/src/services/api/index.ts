import axiosClient from '../axiosClient';

export const get = async (url: string, token: string) => {
  const response = await axiosClient.get(url, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

export const post = async (url: string, data = {}) => {
  const response = await axiosClient.post(url, data);
  return response.data;
};

export const patch = async (url: string, data = {}) => {
  const response = await axiosClient.patch(url, data);
  return response.data;
}