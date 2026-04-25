import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://localhost:7083/api', // Adjust port based on backend launchSettings.json
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
