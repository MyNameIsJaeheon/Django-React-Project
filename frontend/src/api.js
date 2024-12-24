import axios from 'axios';
import { ACCESS_TOKEN } from './constants.js';

const apiUrl = "https://7b1e8a9a-ca73-43d4-a750-9aa53cc03d3e-dev.e1-us-east-azure.choreoapis.dev/djangoreactpostgresql/backend/v1"

const api = axios.create({
  baseURL: apiUrl ? apiUrl : import.meta.env.VITE_API_URL,
});

console.log(apiUrl)

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default api