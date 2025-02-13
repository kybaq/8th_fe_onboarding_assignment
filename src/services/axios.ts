import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AUTH_BASE_URL as string,
  timeout: 1000, // ms
});
