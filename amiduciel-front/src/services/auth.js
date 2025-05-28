import axios from 'axios';

// Constants
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

/**
 * Handles API errors consistently
 */
const handleApiError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const { status, data } = error.response;
    let errorMessage = 'An error occurred';
    
    if (data?.error?.message) {
      errorMessage = data.error.message;
    } else if (status === 401) {
      errorMessage = 'Invalid credentials';
    } else if (status === 400) {
      errorMessage = 'Invalid request';
    } else if (status >= 500) {
      errorMessage = 'Server error. Please try again later.';
    }
    
    const errorWithMessage = new Error(errorMessage);
    errorWithMessage.status = status;
    throw errorWithMessage;
  } else if (error.request) {
    // The request was made but no response was received
    throw new Error('No response from server. Please check your connection.');
  } else {
    // Something happened in setting up the request
    throw new Error(error.message || 'An error occurred');
  }
};

/**
 * Validates login input
 */
const validateLoginInput = (email, password) => {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Please enter a valid email address');
  }
};

/**
 * Validates registration input
 */
const validateRegisterInput = (username, email, password) => {
  if (!username || !email || !password) {
    throw new Error('All fields are required');
  }
  
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters long');
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Please enter a valid email address');
  }
};

/**
 * Logs in a user
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise<Object>} User data and JWT token
 */
export async function login(email, password) {
  try {
    // Input validation
    validateLoginInput(email, password);
    
    const response = await apiClient.post('/api/auth/local', {
      identifier: email.trim(),
      password: password.trim(),
    });

    // Store token in localStorage or httpOnly cookie in a real app
    if (response.data?.jwt) {
      localStorage.setItem('authToken', response.data.jwt);
    }

    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
}

/**
 * Registers a new user
 * @param {string} name - User's name
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise<Object>} Registered user data and JWT token
 */
export async function register(name, email, password) {
  try {
    // Input validation
    validateRegisterInput(name, email, password);
    
    const response = await apiClient.post('/api/auth/local/register', {
      username: name.trim(),
      email: email.trim().toLowerCase(),
      password: password.trim(),
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw new Error('Registration failed');
        }

        return response.data; // Assuming the API returns user data or a token
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
}

