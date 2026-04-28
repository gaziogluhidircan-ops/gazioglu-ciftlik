import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5155/api', // Updated to match backend port
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
