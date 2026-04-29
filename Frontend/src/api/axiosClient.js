import axios from 'axios';

const getBaseURL = () => {
  if (import.meta.env.PROD) {
    // Vercel production - using Vercel Functions
    return '/api';
  }
  // Development - using Vercel Functions locally
  return '/api';
};

const axiosClient = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor to add JWT token to requests if available
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
