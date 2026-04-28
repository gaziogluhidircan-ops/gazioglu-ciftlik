import axios from 'axios';

const getBaseURL = () => {
  if (import.meta.env.PROD) {
    // Vercel production - backend deployed separately
    return 'https://your-backend-url.vercel.app/api';
  }
  // Development
  return 'http://localhost:5155/api';
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
