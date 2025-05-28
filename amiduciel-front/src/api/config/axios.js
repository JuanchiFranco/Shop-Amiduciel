import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const REQUEST_TIMEOUT = 10000; // 10 seconds

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      let errorMessage = 'An error occurred';
      
      if (data?.error?.message) {
        errorMessage = data.error.message;
      } else if (status === 401) {
        errorMessage = 'Invalid credentials';
        // Optionally redirect to login or clear auth state
        localStorage.removeItem('authToken');
      } else if (status === 400) {
        errorMessage = 'Invalid request';
      } else if (status >= 500) {
        errorMessage = 'Server error. Please try again later.';
      }
      
      const errorWithMessage = new Error(errorMessage);
      errorWithMessage.status = status;
      return Promise.reject(errorWithMessage);
    } else if (error.request) {
      return Promise.reject(new Error('No response from server. Please check your connection.'));
    }
    return Promise.reject(error);
  }
);

export default apiClient;
